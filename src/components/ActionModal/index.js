import { useState } from "react";
import { Modal } from "../../context/Modal";
import ActionForm from "./ActionForm";

function ActionModal({ productData, confirmation, handleClick, isDisabled, setIsDisabled }) {
  const [showActionModal, setShowActionModal] = useState(true);

  return (
    <>
      <button onClick={() => setShowActionModal(true)} id='show-detail-button'>Show Sale Details</button>
      {showActionModal && (
        <Modal onClose={() => setShowActionModal(false)}>
          <ActionForm setShowActionModal={setShowActionModal} productData={productData} confirmation={confirmation} handleClick={handleClick} isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
        </Modal>
      )}
    </>
  )
}

export default ActionModal;