import './ProductPage.css';
import { useEffect, useState } from "react";
import ActionModal from '../ActionModal';

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [confirmation, setConfirmation] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  // Fetch product data
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })

      if(data.ok) {
        const parsedData = await data.json();
        setProductData(parsedData);
      } else {
        alert("Error fetching data")
      }
    }

    fetchData();
  }, []);

  const handleClick = (action) => {
    setIsDisabled(true)
    if (action === 'accept') {
      const acceptSale = async () => {
        const res = await fetch("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/accept", {
          method: 'POST'
        });

        if (res.ok) {
          setConfirmation("You have accepted the sale! Check your email for a confirmation.")
        } else {
          setConfirmation("There was an error processing the sale. Please try again later.")
        }
      }
      acceptSale();
    } else {
      const rejectSale = async () => {
        const res = await fetch("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/decline", {
          method: 'POST'
        });

        if (res.ok) {
          setConfirmation("You have rejected the sale. We will notify you if you receive another offer.")
        } else {
          setConfirmation("There was an error processing the sale. Please try again later.")
        }
      }
      rejectSale();
    }
  }

  if(productData.length === 0) {
    return null;
  }

  return (
    <>
      <div className='product-page'>
        <div className='product-page-left'>
          {
            productData.listing.images.map(imageOption => {
              return (
                <img src={imageOption.image.url} className='product-images' />
              )
            })
          }
        </div>

        <div className='product-page-right'>
          <div className='breadcrumbs'>
            <div className='breadcrumb1'>
              SHOP
            </div> / 
            <div className='breadcrumb1'>
              {productData.listing.model.referenceNumber}
            </div>
          </div>

          <div className='product-name'>
            {productData.listing.manufactureYear} {productData.listing.model.brand.name} {productData.listing.model.displayName}
          </div>

          <div className='product-price'>
            ${(productData.salePriceCents / 100).toLocaleString("en-US")}
          </div>

          <div className='product-highlights'>
            <div className='highlight-item'>
              <div className='highlight-title'>
                CONDITION
              </div>
              <div className='highlight-detail'>
                {productData.listing.condition}
              </div>
            </div>
            <div className='highlight-item'>
              <div className='highlight-title'>
                BOX
              </div>
              <div className='highlight-detail'>
                YES
              </div>
            </div>
            <div className='highlight-item'>
              <div className='highlight-title'>
                PAPERS
              </div>
              <div className='highlight-detail'>
                YES
              </div>
            </div>
            <div className='highlight-item'>
              <div className='highlight-title'>
                YEAR
              </div>
              <div className='highlight-detail'>
                {productData.listing.manufactureYear}
              </div>
            </div>
            <div className='highlight-item'>
              <div className='highlight-title'>
                CASE SIZE
              </div>
              <div className='highlight-detail'>
                40mm
              </div>
            </div>
          </div>

          <div className='button-container'>
            <button className='button accept' onClick={() => handleClick('accept')} disabled={isDisabled}>Accept Sale</button>
            <button className='button reject' onClick={() => handleClick('reject')} disabled={isDisabled}>Reject Sale</button>
            <ActionModal productData={productData} confirmation={confirmation} handleClick={handleClick} isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
            <div className='confirmation'>
              {confirmation}
            </div>
          </div>

          <div className='spotlight-item'>
            <div className='spotlight-header'>
              The Story
            </div>
            <div className='spotlight-details'>
              {productData.listing.model.description}
            </div>
          </div>
          <div className='spotlight-item'>
            <div className='spotlight-header'>
              Condition
            </div>
            <div className='spotlight-details'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className='spotlight-item'>
            <div className='spotlight-header'>
              Returns
            </div>
            <div className='spotlight-details'>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProductPage;