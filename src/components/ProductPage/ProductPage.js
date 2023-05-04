import './ProductPage.css';
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);

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

  console.log(productData)

  if(productData.length === 0) {
    return null;
  }

  // if(productData.length > 0) {
    return (
      <>
        <div className='product-page'>
          <div className='product-page-left'>
            <img src={productData.listing.images[0].image.url} className='product-images'/>
          </div>

          <div className='product-page-right'>
            <div className='breadcrumbs'>
              {/* SHOP / {productData.listing.model.referenceNumber} */}
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
              <button className='button accept'>Accept Sale</button>
              <button className='button reject'>Reject Sale</button>
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
  // }
}

export default ProductPage;