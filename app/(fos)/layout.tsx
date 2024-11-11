import { PropsWithChildren } from 'react';

const LayoutPage = async ({ children }: PropsWithChildren) => {
  // const user = await currentUser();

  // if (!user) {
  //   redirect('/sign-in');
  // }
  return <div>{children}</div>;
};

export default LayoutPage;
