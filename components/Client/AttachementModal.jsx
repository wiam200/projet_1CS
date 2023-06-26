import { Button, Modal } from "antd";
import { useState } from "react";
import { getAttachementLink } from "@/api/demandes";
export default function PdfPreview({ name }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [PDF, setPDF] = useState({
    link: "",
    title: "",
  });

  // The integration request
  const getPDF = () => {
    return new Promise((resolve, reject) => {
      getAttachementLink(name).then((res) => {
        resolve({
          link: res,
          title: name.replace(".pdf", ""),
        });
      });
    });
  };

  const showModal = async () => {
    setLoading(true);
    await getPDF().then((res) => {
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
      <Button
        type="primary"
        className="bg-blue-500"
        onClick={showModal}
        loading={loading}
      >
        Preview
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
