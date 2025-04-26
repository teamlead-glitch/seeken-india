<template>
  <CommonInnerBanner page_title="Cart" />
  <section class="inner_container" v-if="cart?.items?.length">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7 col-xl-7">
          <div class="cart_left">
            <h6>You have <span>{{ cart.total_quantity }} item(s)</span> in your cart</h6>

            <div class="full__boxes" v-for="item in cart.items" :key="item.id">
              <div class="left">
                <div class="img_box">
                  <img :src="item.product_image" class="img-fluid" :alt="item.product_name" />
                </div>
              </div>
              <div class="right">
                <div class="full__container">
                  <div class="product__details">
                    <h4>{{ item.product_name }}</h4>
                  </div>
                  <div class="price__details">
                    <div class="price">
                      <h3>
                        ₹ {{ item.selling_price }}
                        <span v-if="Number(item.discount_amount) > 0">₹ {{ item.price }}</span>
                      </h3>
                    </div>
                    <div class="save" v-if="Number(item.discount_amount) > 0">
                      Save ₹ {{ item.discount_amount }}
                    </div>
                  </div>
                </div>

                <div class="quantity__boxes">
                  <div class="quantity-input">
                    <button class="quantity-btn minus-btn" @click="updateQuantity(item, 1, 'minus')"><i
                        class="bi bi-dash-lg"></i></button>
                    <input type="number" class="quantity" :value="item.quantity" min="1" max="10">
                    <button class="quantity-btn plus-btn" @click="updateQuantity(item, 1)"><i
                        class="bi bi-plus-lg"></i></button>
                  </div>
                  <div class="delete">
                    <i class="bi bi-trash" @click="updateQuantity(item, item.quantity, 'minus')"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="total__price">
              <h6>Price Breakdown</h6>
              <div class="pricing">
                <div class="left">Subtotal</div>
                <div class="right">₹ {{ cart.total_price }}</div>
                <div class="left">Discount</div>
                <div class="right">₹ {{ cart.total_discount }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-5 col-xl-4">
          <div class="total_prices">
            <div class="coupon">
              <div class="row">
                <div class="col-md-12"><label>Voucher Code</label></div>
                <div class="col-8 col-md-12 col-xl-8">
                  <input type="text" class="form-control" name="email" placeholder="Enter Voucher">
                </div>
                <div class="col-4 col-md-12 col-xl-4">
                  <button class="btn_4">Apply</button>
                </div>
              </div>
            </div>
            <div class="total__price">
              <h6>Price Breakdown</h6>
              <div class="pricing">
                <div class="left">Subtotal</div>
                <div class="right">₹ {{ cart.total_price }}</div>
                <div class="left">Discount</div>
                <div class="right">₹ {{ cart.total_discount }}</div>
              </div>
            </div>
            <div class="total__price">
              <h6>Total</h6>
              <div class="pricing_two">
                <div class="left">
                  <h3>Total <span>Includes GST*</span></h3>
                </div>
                <div class="right">
                  <h3>₹ {{ cart.grand_total }}</h3>
                  <h5 v-if="Number(cart.total_discount) > 0">
                    <span>₹ {{ cart.total_price }}</span>
                    save ₹ {{ cart.total_discount }}
                  </h5>
                </div>
              </div>
            </div>

            <div class="checkout__btn">
              <NuxtLink to="/checkout">
                <button class="btn_2">Continue to Checkout</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <CheckoutSupportedPayments />
    </div>
  </section>


  <section class="inner_container" v-else>


    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="empty__cart" style="min-height: auto;">
            <img src="/images/empyt-cart.svg" alt="seeken">
            <h5>Your cart is empty</h5>
            <p>Sign in to your Seeken account to view your saved items or continue shopping</p>
            <div class="btn_box">
              <NuxtLink to="/" class="btn_1">Continue shopping</NuxtLink>
              <NuxtLink to="/login" class="btn_2" v-if="!authStore.token">Sign in</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <CheckoutSupportedPayments />
    </div>

  </section>


</template>


<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useCartStore } from '~/store/cart'
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();

const cartStore = useCartStore()
const cart = computed(() => cartStore.cart)

onMounted(() => {
  cartStore.fetchCartFromServer()
})

const updateQuantity = async (item, newQty: number = 1, action = 'add') => {
  //if (item.quantity < 1 || item.quantity > 10) return;

  let message = action === 'add'
    ? 'Increase quantity of this item?'
    : 'Decrease quantity of this item?'


  if (action == 'minus' && newQty == item.quantity) {
    message = 'Are you sure you want to delete this item from the cart?';
    if (confirm(message)) {
    await cartStore.addToCart(item.product_id, newQty, item.variant_id ? item.variant_id : 0, action)
  }
  }else{
    await cartStore.addToCart(item.product_id, newQty, item.variant_id ? item.variant_id : 0, action)
  }
 
}



</script>

<style scoped></style>
