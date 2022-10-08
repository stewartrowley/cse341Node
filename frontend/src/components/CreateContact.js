import { useState } from "react";
import PostContact from "./PostContact";

const CreateContact = () => {
    const [firstName, setFirstName] = useState(0)
    const [lastName, setLastName] = useState(0)
    const [birthday, setBirthday] = useState(0)
    const [email, setEmail] = useState(0)
    const [favoriteColor, setFavoriteColor] = useState(0)
    const [contactInfo, setContactInfo] = useState(0)
    const [isReady, setIsReady] = useState(false)

    const submitHandler = (event) => {
        event.preventDefault();

        const contactData = [{
            firstName: firstName.toString(),
            lastName: lastName.toString(),
            email: email.toString(),
            favoriteColor: favoriteColor.toString(),
            birthday: birthday.toString(),
        }]

        setContactInfo(contactData);
        setIsReady(true)
    }

    const firstNameHandler = (element) => {
        setFirstName(element.target.value);
    }
    const lastNameHandler = (element) => {
        setLastName(element.target.value);
    }
    const birthdayHandler = (element) => {
        setBirthday(element.target.value);
    }
    const emailHandler = (element) => {
        setEmail(element.target.value);
    }
    const favoriteColorHandler = (element) => {
        setFavoriteColor(element.target.value);
    }

   return (
      <div>
         <fieldset>
            <form onSubmit={submitHandler}>
               <label>
                  Firstname
                  <input onChange={firstNameHandler} type='text' />
               </label>
               <label>
                  Lastname
                  <input onChange={lastNameHandler} type='text' />
               </label>
               <label>
                  Email
                  <input onChange={emailHandler} type='email' />
               </label>
               <label>
                  Birthday
                  <input onChange={birthdayHandler} type='date' />
               </label>
               <label>
                  FavoriteColor
                  <input onChange={favoriteColorHandler} type='text' />
               </label>

               <button type="submit">Create</button>
            </form>
         </fieldset>

        {isReady && <PostContact contactInfo={contactInfo}/>}
         
      </div>
   );
};

export default CreateContact;
