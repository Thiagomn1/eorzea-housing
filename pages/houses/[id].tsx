import Head from 'next/head';
import { GetServerSideProps } from 'next';
import styles from '../../styles/House.module.css';

function House({ houseData }: any) {
  return (
    <>
      <Head>
        <title>{houseData.title}</title>
      </Head>
      <div>House</div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  const houseData = {
    title: 'Title Test',
  };

  return {
    props: {
      houseData,
    },
  };
};

export default House;
