import { useUser } from '@stackframe/stack';
import { useMutation } from 'convex/react';
import React, { useEffect, useState } from 'react';
import { api } from '../convex/_generated/api'; // Make sure this path is correct
import { UserDetailContext } from '@/context/UserDetailContext';

function Provider({ children }) {
  const user = useUser();
  const createNewUserMutation = useMutation(api.users.CreateNewUser);

  const CreateUser = async () => {
    if (!user) return;

    const data = {
      name: user?.displayName,
      email: user?.primaryEmail,
      picture: user?.profileImageUrl,
    };

    try {
      const result = await createNewUserMutation({ ...data });
      console.log("User created:", result);
      setUserDetail(result);
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };
  const [userDetail,setUserDetail]=useState(null);

  useEffect(() => {
    if (user) {
      CreateUser();
    }
  }, [user]);

  return <div>
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
    {children}
    </UserDetailContext.Provider>
    </div>;
}

export default Provider;
