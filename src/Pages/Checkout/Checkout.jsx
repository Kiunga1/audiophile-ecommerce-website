import { useCart } from "../../context/CartContext";
import  { useState } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import CheckoutIcon from '../../assets/checkouticon/checkout-icon.png'
import Button from "../../components/Button/Button";

const Checkout = () => {
  const { cartItems } = useCart();

  // Function to calculate total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to calculate VAT (Value Added Tax)
  const calculateVAT = () => {
    return calculateTotalPrice() * 0.2; // 20% VAT rate
  };

  // Function to calculate total price including VAT and shipping
  const calculateTotalWithVATAndShipping = () => {
    return calculateTotalPrice() + calculateVAT() + 50; // Shipping cost of $50
  };


  const [billingDetails, setBillingDetails] = useState({
    name: "",
    phoneNumber: "",
    emailAddress: ""
  });

  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    zipCode: "",
    city: "",
    country: ""
  });

  const [paymentDetails, setPaymentDetails] = useState({
    paymentMethod: "",
    eMoneyNumber: "",
    eMoneyPIN: ""
  });

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    switch (section) {
      case "billing":
        setBillingDetails({ ...billingDetails, [name]: value });
        break;
      case "shipping":
        setShippingInfo({ ...shippingInfo, [name]: value });
        break;
      case "payment":
        setPaymentDetails({ ...paymentDetails, [name]: value });
        break;
      default:
        break;
    }
  };

  return (
    <div className="checkout">
      <Link to="/" className="go-back-link">
        <p>Go Back</p>
      </Link>
      <div className="checkout-container">
        <h1>CHECKOUT</h1>
        <div className="checkout-billing">
          <h3>BILLING DETAILS</h3>
          <div className="biling-info">
            <div className="biling-name">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={billingDetails.name}
                onChange={(e) => handleChange(e, "billing")}
                placeholder="Enter your name"
              />
            </div>
            <div className="email-address">
              <label htmlFor="emailAddress">Email Address:</label>
              <input
                type="text"
                id="emailAddress"
                name="emailAddress"
                value={paymentDetails.emailAddress}
                onChange={(e) => handleChange(e, "billing")}
                placeholder="Enter your email address"
              />
            </div>
            
            <div className="phone-number">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={billingDetails.phoneNumber}
                onChange={(e) => handleChange(e, "billing")}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          
        </div>
        <div className="checkout-shipping">
          <h3>SHIPPING INFO</h3>
          <label htmlFor="address">Your Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={shippingInfo.address}
            onChange={(e) => handleChange(e, "shipping")}
            placeholder="Enter your address"
          />
          <div className="grid-display">
            <div className="zip-code">
              <label htmlFor="zipCode">ZIP Code:</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={shippingInfo.zipCode}
                onChange={(e) => handleChange(e, "shipping")}
                placeholder="Enter your ZIP code"
              />
            </div>
            <div className="city">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={shippingInfo.city}
                onChange={(e) => handleChange(e, "shipping")}
                placeholder="Enter your city"
              />
            </div>
            <div className="country">
              <label htmlFor="country">Country:</label>
              <input
                type="text"
                id="country"
                name="country"
                value={shippingInfo.country}
                onChange={(e) => handleChange(e, "shipping")}
                placeholder="Enter your country"
              />
            </div>
          </div>
        </div>
        <div className="checkout-payment">
          <h3>PAYMENT DETAILS</h3>
          <div className="payment-method">
            <label htmlFor="paymentMethod">Payment Method:</label>
            <div className="payment-methods">
              <div className="e-money">
                <input
                  type="radio"
                  id="eMoney"
                  name="paymentMethod"
                  value="eMoney"
                  checked={paymentDetails.paymentMethod === "eMoney"}
                  onChange={(e) => handleChange(e, "payment")}
                />
                <label htmlFor="eMoney">e-Money</label>
              </div>

              <div className="cash-on-delivery">
                <input
                  type="radio"
                  id="cashOnDelivery"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  checked={paymentDetails.paymentMethod === "cashOnDelivery"}
                  onChange={(e) => handleChange(e, "payment")}
                />
                <label htmlFor="cashOnDelivery">Cash on Delivery</label>
              </div>
            </div>
          </div>

          {/* Additional input fields for e-money or cash on delivery */}
          {paymentDetails.paymentMethod === "eMoney" && (
            <div className="eMoney-details">
              <div className="eMoney-number">
                <label htmlFor="eMoneyNumber">e-Money Number:</label>
                <input
                  type="text"
                  id="eMoneyNumber"
                  name="eMoneyNumber"
                  value={paymentDetails.eMoneyNumber}
                  onChange={(e) => handleChange(e, "payment")}
                  placeholder="Enter your e-Money number"
                />
              </div>
              <div className="eMoney-pin">
                <label htmlFor="eMoneyPIN">e-Money PIN:</label>
                <input
                  type="text"
                  id="eMoneyPIN"
                  name="eMoneyPIN"
                  value={paymentDetails.eMoneyPIN}
                  onChange={(e) => handleChange(e, "payment")}
                  placeholder="Enter your e-Money PIN"
                />
              </div>
            </div>
          )}

          {/* Show information for Cash on Delivery */}
          {paymentDetails.paymentMethod === "cashOnDelivery" && (
            <div className="cash-on-delivery-info">
              <img src={CheckoutIcon} alt="cash exchange icon" />
              <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>
          )}
        </div>
      </div>

      <div className="summary-container">
        <div className="checkout-summary">
            <h2>SUMMARY</h2>
            <div className="cart-summary">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-details">
                    <img src={item.image.desktop} alt="Product" className="product-image" />
                    <div className="item-detail">
                      <h5 className="item-name">{item.name}</h5>
                      <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>  
                  <p className="item-quantity"> X{item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="totals-summary">
              <div className="total">
                <p>TOTAL: </p>
                <span className="bold">${calculateTotalPrice().toFixed(2)}</span>
              </div>
              <div className="total">
                <p>SHIPPING:</p>
                <span className="bold">$50</span>
              </div>
              <div className="total">
                <p>VAT (INCLUDED): </p>
                <span className="bold">${calculateVAT().toFixed(2)}</span>
              </div>
              <div className="total">
                <p>GRAND TOTAL:</p>
                <span className="bold grand-total">${calculateTotalWithVATAndShipping().toFixed(2)}</span>
              </div>
          </div>
            {/* Summary content remains unchanged */}

            <Button backgroundColor="#D87D4A" hoverColor="#FBAF85" content="CONTINUE & PAY" fullWidth={true} />  

        </div>
      </div>
    </div>
  );
};

export default Checkout;
