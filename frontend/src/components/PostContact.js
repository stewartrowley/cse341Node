import { useState, useEffect } from 'react';

const PostContact = (props) => {
   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);


   // Note: the empty deps array [] means
   // this useEffect will run once
   // similar to componentDidMount()
   useEffect(() => {


        const raw = JSON.stringify(props.contactInfo);
        console.log(raw)

        let requestOptions = {
            method: 'POST',
            body: raw,
        }

         fetch('https://stewartcse341node.onrender.com/contacts/', requestOptions)
            .then((res) => res.json())
            .then(
               (result) => {
                    console.log(result)
                  setIsLoaded(true);
               },
               // Note: it's important to handle errors here
               // instead of a catch() block so that we don't swallow
               // exceptions from actual bugs in components.
               (error) => {
                  setIsLoaded(true);
                  setError(error);
               }
            );

   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (error) {
      return <div>Error: {error.message}</div>;
   } else if (!isLoaded) {
      return <div>Loading...</div>;
   } else {
      return (
        <p>It has been submitted!!</p>
      );
   }
};

export default PostContact;
