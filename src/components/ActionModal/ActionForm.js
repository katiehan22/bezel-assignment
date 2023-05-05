import { useState } from 'react';
import './ActionForm.css';

const ActionForm = ({ setShowActionModal, productData, confirmation, handleClick, isDisabled, setIsDisabled }) => {

  return (
    <>
      <div className='action-form'>
        <div className="row-1">
          <button id="close-modal-button" onClick={() => setShowActionModal(false)}>X</button>
        </div>
        <div className="row-2">
          <div className='modal-left'>
            <div className='modal-left-top'>
              <div className='modal-h2'>
                CONGRATS!
              </div>
              <div className='modal-h1'>
                Your watch sold!
              </div>
              <div className='modal-p'>
                You have 1 business day to accept the sale. If you do not accept, it will be automatically rejected.
              </div>
            </div>
            <div className='modal-left-bottom'>
              <button className='button accept' onClick={() => handleClick('accept')} disabled={isDisabled}>Accept Sale</button>
              <button className='button reject' onClick={() => handleClick('reject')} disabled={isDisabled}>Reject Sale</button>
              <div className='confirmation'>
                {confirmation}
              </div>
            </div>
          </div>
          <div className='modal-right'>
            <div className='modal-right-top'>
              <div className='modal-col-1'>
                <div className='modal-product-name'>
                  {productData.listing.model.brand.name} {productData.listing.model.displayName}
                </div>
                <div className='modal-product-details gray'>
                  {productData.listing.condition} / {productData.listing.manufactureYear}
                </div>
              </div>
              <div className='modal-col-2'>
                <img src={productData.listing.images[0].image.url} className='product-images' id='modal-img'/>
              </div>
            </div>

            <div className='modal-right-middle'>
              <div className='modal-right-row'>
                <div className='modal-col-1 gray'>
                  Selling Price
                </div>
                <div className='modal-col-2'>
                  ${(productData.salePriceCents / 100).toLocaleString("en-US")}
                </div>
              </div>
              <div className='modal-right-row'>
                <div className='modal-col-1 gray'>
                  Level 1 Commission ({productData.commissionRateBips / 100}%)
                </div>
                <div className='modal-col-2'>
                  ${((productData.salePriceCents / 100) * productData.commissionRateBips / 10000).toLocaleString("en-US")}
                </div>
              </div>
              <div className='modal-right-row'>
                <div className='modal-col-1 gray'>
                  Seller Fee
                </div>
                <div className='modal-col-2'>
                  ${(productData.sellerFeeCents / 100).toLocaleString("en-US")}
                </div>
              </div>
              <div className='modal-right-row'>
                <div className='modal-col-1 gray'>
                  Insured Shipping
                </div>
                <div className='modal-col-2'>
                  Free
                </div>
              </div>
              <div className='modal-right-row'>
                <div className='modal-col-1 green'>
                  Bezel authentication
                </div>
                <div className='modal-col-2 green'>
                  Free
                </div>
              </div>
            </div>
            
            <div className='modal-right-bottom'>
              <div className='modal-col-1'>
                Earnings
              </div>
              <div className='modal-col-2'>
                ${(productData.payoutAmountCents / 100).toLocaleString("en-US")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ActionForm;