

const DisplayContacts = (props) => {
   const displayAllContacts = (contacts) => {
      const contactsList = [...contacts];

      return contactsList.map((element) => (
         <div key={element.birthday}>
            <p>
               Name: {element.firstName} {element.lastName}
            </p>
            <p>Birthday: {element.birthday}</p>
            <p>Email: {element.email}</p>
            <p>Favorite Color: {element.favoriteColor}</p>
         </div>
      ));
   };

   return (
      <div>
         <h1>Contacts</h1>
         {displayAllContacts(props.items)}

      </div>
   );
};

export default DisplayContacts;
