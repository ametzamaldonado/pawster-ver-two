import React, { useEffect, useState } from 'react';
import ImagesDisplay from './ImagesDisplay';
import Form from './Form'
import { 
    ref, 
    uploadBytesResumable, 
    getDownloadURL 
} from "firebase/storage";
import { 
    doc, 
    updateDoc, 
    arrayUnion, 
    arrayRemove, 
    getDoc 
} from "firebase/firestore";
import { db, storage } from '../../../firebase/config';
import { useAuth } from '../../../context/AuthContext';
import './ProfileContainer.scss';

function ProfileContainer() {
    const { currentUser } = useAuth(); 
    const [ userImages, setUserImages ] = useState([]);

    let userId = currentUser.uid;
    const photosPhotedRef = doc(db, "users", userId);


    const handleSubmitPhotos = async (photo) => {
        // create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${currentUser.displayName + date}`);

        await uploadBytesResumable(storageRef, photo).then(() => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
              try {
                // Atomically add a new imageURL to the "imagesPosted" array field.
                await updateDoc(photosPhotedRef, {
                    imagesPosted: arrayUnion(downloadURL)
                });
              } catch (err) {
                console.log(err);
                return;
              }
            })});

            const docSnap = await getDoc(photosPhotedRef);

            if (docSnap.exists()) {
                setUserImages(docSnap.data());
            } 
        
    }

    const removePhotoFromUser = async (photoLink) => {
        await updateDoc(photosPhotedRef, {
            imagesPosted: arrayRemove(photoLink)
        });  
    }

    useEffect(() => {
        async function getData (){
            const data = (await getDoc(photosPhotedRef)).data();
            if(data) {
                setUserImages(data['imagesPosted']);
            }   
        }

        getData()
    }, [photosPhotedRef, userImages])

    
    return (
        <div className='setting-profile-container'>
            <div className='default-column'>
                <div className="gallery ">
                    {
                        <ImagesDisplay 
                            images={userImages} 
                            handleSubmitPhotos={handleSubmitPhotos} 
                            removePhotoFromUser={removePhotoFromUser}
                        />
                        }
                </div>
                <Form />

            </div>
        </div>
    )
}


export default ProfileContainer