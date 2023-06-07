import { Button, Modal } from "antd";
import { useState } from "react";
export default function PdfPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [PDF, setPDF] = useState({
    link: "",
    title: "",
  });

  // The integration request
  const getPDF = (id) => {
    return new Promise((resolve, reject) => {
      /*
      fetch(`https://backend.com/pdf/${id}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          // data will contain link and title
          resolve({
            link: data.link,
            title: data.title,
          });
        })
        .catch((err) => {
          reject(err);
        });
        */

      // TO REMOVE: Temporary to test only
      setTimeout(() => {
        resolve({
          link: "https://uird.netlify.app/Resume.pdf",
          title: "Here is the PDF Title",
        });
      }, 2000);
    });
  };

  const showModal = async () => {
    setLoading(true);
    await getPDF(1).then((res) => {
      setPDF(res);
      setIsModalOpen(true);
    });
    setLoading(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} loading={loading}>
        FILE NAME.PDF
        
      </Button>
      <Modal
        title={PDF.title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={800}
        closable={false}
      >
        <div className="h-auto w-full" style={{ aspectRatio: "1 / 1.48" }}>
          <iframe src={PDF.link} className="h-full w-full" />
        </div>
      </Modal>
    </>
  );
}
