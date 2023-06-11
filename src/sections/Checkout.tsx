import {FC} from "react";
import {
    CheckOutButton,
    CheckOutInput,
    CheckOutForm,
    CheckOutTitle,
    CheckOutContainer,
    CheckoutSubTitle, CheckOutSelect
} from './sections.styled'

export const Checkout: FC = () => {

    return (
        <CheckOutContainer>
            <CheckOutTitle>Checkout</CheckOutTitle>
            <CheckOutForm>
                <CheckOutTitle>Customer Email</CheckOutTitle>
                <CheckOutInput type="email" id="email" name="email" placeholder="Email address"/>
                <CheckOutTitle>Shipping Address</CheckOutTitle>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <div style={{
                        width: '45%',
                    }}>
                        <CheckoutSubTitle>First Name</CheckoutSubTitle>
                        <CheckOutInput type="text" id="fname" name="fname" placeholder="First name"/>
                    </div>
                    <div style={{
                        width: '45%',
                    }}>
                        <CheckoutSubTitle>Last Name</CheckoutSubTitle>
                        <CheckOutInput type="text" id="lname" name="lname" placeholder="Last name"/>
                    </div>
                </div>
                <CheckoutSubTitle>Address Line</CheckoutSubTitle>
                <CheckOutInput type="text" id="address" name="address" placeholder="Address"/>
                <CheckoutSubTitle>Country</CheckoutSubTitle>
                <CheckOutSelect id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </CheckOutSelect>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <div style={{
                        width: '45%',
                    }}>
                        <CheckoutSubTitle>Postal Code</CheckoutSubTitle>
                        <CheckOutInput type="text" id="pcode" name="pcode" placeholder="First name"/>
                    </div>
                    <div style={{
                        width: '45%',
                    }}>
                        <CheckoutSubTitle>Phone Number</CheckoutSubTitle>
                        <CheckOutInput type="text" id="pnum" name="pnum" placeholder="Last name"/>
                    </div>
                </div>
                <CheckOutTitle>Billing Address</CheckOutTitle>
                <CheckOutButton type="submit">Continue</CheckOutButton>
            </CheckOutForm>
        </CheckOutContainer>
    )
}