import { Alert, Button, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

//Firebase
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from "../firebase";

//React circular loading
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);

  // Verificação de autenticação
  if (!currentUser) {
    console.log("Usuário não autenticado");
    return <div>Por favor, faça login</div>;
  }

  //A parte de uploadear a imagem
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  
  //console.log(imageFileUploadProgress, imageFileUploadError);

  const filePickerRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setImageFileUploadError('O arquivo deve ser menor que 2MB');
        return;
      }
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () => {
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError('Não foi possível fazer o upload da imagem');
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
        });
      }
    );
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Perfil de Usuário</h1>
      <form className="flex flex-col gap-4">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          ref={filePickerRef}
          hidden
        />
        <div className="relative w-40 h-40 self-center cursor-pointer shadow-md overflow-hidden rounded-full" onClick={() => filePickerRef.current.click()}>
          
          {imageFileUploadProgress && (
            <CircularProgressbar value={imageFileUploadProgress || 0} text={`${imageFileUploadProgress}%`}
            strokeWidth={5}
            styles={{
              root:{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              },
              stroke: `rgba(62, 152, 199, ${
                imageFileUploadProgress / 100
              })`,
            }}
            />
          )}

          <img
            src={imageFileUrl || currentUser.profilePicture}
            alt="Usuário"
            className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${
              imageFileUploadProgress &&
              imageFileUploadProgress < 100 &&
              'opacity-60'
            }`}
          />
        </div>
        {imageFileUploadError && <Alert color='failure'>{imageFileUploadError}</Alert>}
        <TextInput
          type="text"
          id="username"
          placeholder="Usuário"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="E-mail"
          defaultValue={currentUser.email}
        />
        <div className="relative">
          <TextInput
            type={passwordVisible ? "text" : "password"}
            id="password"
            placeholder="*********"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 px-3 text-sm text-gray-600 flex items-center"
          >
            {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>
        <Button type="submit" className="teal">Atualizar dados</Button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="cursor-pointer text-red-500">Deletar conta</span>
        <span className="cursor-pointer text-gray-500">Sair</span>
      </div>
      {/* {imageFileUploadError && <p className="text-red-500">{imageFileUploadError}</p>} */}
    </div>
  );
}
