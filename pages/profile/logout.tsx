import { GetServerSideProps } from 'next';
import { getSession, signOut } from 'next-auth/react';

const handleLogout = () => {
    return <div>Logout</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
    if (session) {
        await signOut();
    }
    return {
        redirect: {
            permanent: false,
            destination: '/profile'
        }
    };
};

export default handleLogout;
