<template>
  <b-modal
    v-model="show"
    class="generate-qr-modal"
    :width="840"
    scroll="keep"
    :style="{ overflow: 'hidden' }"
  >
    <div class="card mx-4">
      <div class="card-content">
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <p class="is-size-4 has-text-traxionBlack has-text-weight-bold">
            Contact Form
          </p>
          <b-icon
            class="is-clickable"
            icon="close"
            size="is-small"
            type="is-gray"
            @click.native="show = false"
          />
        </div>

        <div class="mt-5">
          <form method="POST" action="https://super7tech.com/developer_exam/api/sendMessage">
            <p class="has-text-weight-medium mb-1 is-size-14" for="fullname">
                Full Name<span class="has-text-red"> *</span>
              </p>
            <input type="text" id="fullname" name="fullname" v-model="fullName">

            <p class="has-text-weight-medium mb-1 is-size-14" for="email">
                Email<span class="has-text-red"> *</span>
              </p>
            <input type="email" id="email" name="email" v-model="email">

            <p class="has-text-weight-medium mb-1 is-size-14" for="subject">
                Subject<span class="has-text-red"> *</span>
              </p>
            <input type="text" id="subject" name="subject" v-model="subject">

            <p class="has-text-weight-medium mb-1 is-size-14" for="message">
                Message<span class="has-text-red"> *</span>
              </p>
            <input type="text" id="message" name="message" v-model="message">

            <input class="submit-btn" type="submit" value="Submit">
        </form>
        </div>
      </div>
    </div>

    <b-loading
      :is-full-page="isFullPage"
      v-model="isLoading"
      :can-cancel="true"
    ></b-loading>
  </b-modal>
</template>

<script>
export default {
  props: {
    isModal: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      fullName: '',
      email: '',
      subject: '',
      message: '',
      isLoading: false,
      isFullPage: true,
      errors: false
    }
  },
  computed: {
    show: {
      get () {
        return this.isModal
      },
      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  },
  methods: {
    contactHandler () {
      if (!this.validateForm()) {
        // this.isLoading = true

        // const data = {
        //   fullname: this.fullName,
        //   email: this.email,
        //   subject: this.subject,
        //   message: this.message
        // }

        // await this.$axios
        //   .$post('https://super7tech.com/developer_exam/api/sendMessage', data)
        //   .then(() => {
        //     this.isLoading = false

        //     this.clearForm()

        //     this.$buefy.toast.open({
        //       message: 'Success',
        //       type: 'is-success'
        //     })

        //     this.show = false
        //   })
        //   .catch((error) => {
        //     this.isLoading = false
        //     this.$buefy.toast.open({ message: error.response.data.errors.message, type: 'is-danger' })
        //   })
      }
    },
    isValidEmail (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      return emailRegex.test(email)
    },
    validateForm () {
      if (
        this.fullName === '' ||
        this.email === '' ||
        this.subject === '' ||
        this.message === ''
      ) {
        this.$buefy.toast.open({
          message: 'Please fill out required fields!',
          type: 'is-danger'
        })

        return true
      }

      if (!this.isValidEmail(this.email)) {
        this.$buefy.toast.open({
          message: 'Please input valid email!',
          type: 'is-danger'
        })

        return true
      }

      return false
    },
    clearForm () {
      this.fullName = ''
      this.email = ''
      this.subject = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>
.has-text-red {
  color: red;
}

.button.is-primary {
  background-color: #ff7d00 !important;
}

input {
    background-color: #fff;
    border-color: #efefef;
    border-radius: 4px;
    max-width: 100%;
    width: 100%;
    padding: 10px;
}
.submit-btn {
    background-color: #ff7d00 !important;
    border-color: transparent;
    border-width: 1px;
    color: #fff;
    cursor: pointer;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-bottom: calc(0.5em - 1px);
    padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(0.5em - 1px);
    text-align: center;
    white-space: nowrap;
    margin-top: 30px;
}
</style>
