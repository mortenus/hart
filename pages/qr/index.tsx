import { GetServerSideProps } from 'next';
import generateQR from 'utils/qr';

type Props = {
  qrCodeDataUrl: string;
};

const ShowQRPage = ({ qrCodeDataUrl }: Props) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Scan to Check In</h1>
      <img src={qrCodeDataUrl} alt="QR Code" />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const qrCodeDataUrl = await generateQR();
  return {
    props: { qrCodeDataUrl },
  };
};

export default ShowQRPage;
