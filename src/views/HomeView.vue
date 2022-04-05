<template>
    <section id="app" class="web-camera-container">

        <main class="camera-container">
            <div v-if="isCameraOpen && isLoading" class="camera-loading">
                <ul class="loader-circle">
                <li></li>
                <li></li>
                <li></li>
                </ul>
            </div>

            <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }">

                <!-- <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div> -->

                <video v-show="!isPhotoTaken" ref="camera" autoplay></video>

                <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas"></canvas>
            </div>

            <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
                <router-link to="/validation" >
                    <span>Valider</span>
                    <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </router-link>
            </div>
        </main>
        <footer class="camera-button">
                <font-awesome-icon @click="takePhoto()" v-if="!isPhotoTaken" icon="fa-solid fa-camera" size="2xl" />
                <font-awesome-icon @click="isPhotoTaken = false"  v-else icon="fa-solid fa-camera-rotate" size="2xl"/>
            <span class="input-file">
                <label for="file-img">
                        <font-awesome-icon icon="fa-solid fa-image" size="2xl"/>
                </label>
                <input type="file" id="file-img" name="file-img" ref="file-img" accept="image/*" @change="uploadFile" >
            </span>
        </footer>
    </section>
</template>
<script>
export default {
  data () {
    return {
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',
      photo: null
    }
  },
  mounted () {
    const that = this
    let deviceId = null
    navigator.mediaDevices.enumerateDevices()
      .then(function (devices) {
        devices.forEach(function (device) {
          if (device.kind.includes('video') && device.label.includes('back') && device.label.includes('2 0')) {
            deviceId = device.deviceId
          }
        })
        that.isCameraOpen = true
        that.createCameraElement(deviceId)
      })
      .catch(function (err) {
        console.log(err.name + ': ' + err.message)
      })
  },
  methods: {
    uploadFile () {
      const image = this.$refs['file-img'].files[0]
      const reader = new FileReader()
      const that = this
      reader.onload = function (event) {
        const imageSource = event.target.result
        const img = new Image()
        img.src = imageSource
        that.drawImage(img)
      }
      reader.readAsDataURL(image)
    },
    closeCamera () {
      this.isCameraOpen = false
      this.isPhotoTaken = false
      this.isShotPhoto = false
      this.stopCameraStream()
    },
    openCamera () {
      this.isCameraOpen = true
      this.createCameraElement()
    },
    createCameraElement (deviceId) {
      this.isLoading = true
      let constraints = (window.constraints = {
        audio: false,
        video: {
          facingMode: 'environment'
        }
      })
      if (deviceId) {
        constraints = (window.constraints = {
          audio: false,
          video: { deviceId: deviceId }
        })
      }

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.isLoading = false
          this.$refs.camera.srcObject = stream
        })
        .catch(() => {
          this.isLoading = false
          alert("May the browser didn't support or there is some errors.")
        })
    },

    stopCameraStream () {
      const tracks = this.$refs.camera.srcObject.getTracks()

      tracks.forEach(track => {
        track.stop()
      })
    },

    takePhoto () {
      const imageObj = this.$refs.camera
      this.drawImage(imageObj)
    },
    drawImage (image) {
      this.isPhotoTaken = !this.isPhotoTaken
      const context = this.$refs.canvas.getContext('2d')
      const cameraBoxElem = document.querySelector('.camera-box video').getBoundingClientRect()
      context.canvas.width = cameraBoxElem.width
      context.canvas.height = cameraBoxElem.height
      context.drawImage(image, 0, 0, cameraBoxElem.width, cameraBoxElem.height)
      this.photo = image
    },
    downloadImage () {
      const download = document.getElementById('downloadPhoto')
      const canvas = document.getElementById('photoTaken').toDataURL('image/jpeg')
        .replace('image/jpeg', 'image/octet-stream')
      download.setAttribute('href', canvas)
    }
  }
}
</script>
<style scoped lang="scss">
.input-file{
    cursor:pointer;
}
#file-img{
    display: none;
}

.web-camera-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100VH;
  width: 100VW;
    .camera-container::before{
      position: absolute;
      content: "";
      width: 100%;
      background-color: grey;
      height: 100%;
      opacity: 0.3;
       background: radial-gradient(circle at center, transparent 75%, grey 25.5%);
      background-size: 100% 100%;
      background-position: 50% 50%;
    }
    .camera-container{
        height: calc(100% - 44px);
        position:relative;

        .camera-download{
            top: 90%;
            left: calc(50% - 60px);
            width: 60;
            background: #ED1C24;
            padding: 5px;
            padding-left: 25px;
            height: 30px;
            width: 120px;
            border-radius: 25px;
            font-family: 'SF Pro Text';
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 20px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #FFFEFE;
             position: absolute;

            a{
              width:100%;
              text-decoration: none;
              color: unset;
              display: flex;
              justify-content: space-around;
            }

        }
    }
    .camera-button {
        background: #FFFFFF;
        color: #EC676D;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height:44px;
    }
    .camera-button > span {
        cursor: pointer;
    }
  .camera-box {
      display: flex;
      width:100%;
      height: 100%;
      video{
        width: 100vw;
        height: 100%;
        object-fit: cover;
      }
    .camera-shutter {
      opacity: 0;
      width: 100%;
      height: 90%;
      background-color: #fff;
      position: absolute;

      &.flash {
        opacity: 1;
      }
    }
  }

  .camera-shoot {
    margin: 1rem 0;

    button {
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;

      img {
        height: 35px;
        object-fit: cover;
      }
    }
  }

  .camera-loading {
    overflow: hidden;
    height: 100%;
    position: absolute;
    width: 100%;
    min-height: 150px;
    margin: 3rem 0 0 -1.2rem;

    ul {
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: 999999;
      margin: 0;
    }

    .loader-circle {
      display: block;
      height: 14px;
      margin: 0 auto;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      transform: translateX(-50%);
      position: absolute;
      width: 100%;
      padding: 0;

      li {
        display: block;
        float: left;
        width: 10px;
        height: 10px;
        line-height: 10px;
        padding: 0;
        position: relative;
        margin: 0 0 0 4px;
        background: #999;
        animation: preload 1s infinite;
        top: -50%;
        border-radius: 100%;

        &:nth-child(2) {
          animation-delay: .2s;
        }

        &:nth-child(3) {
          animation-delay: .4s;
        }
      }
    }
  }

  @keyframes preload {
    0% {
      opacity: 1
    }
    50% {
      opacity: .4
    }
    100% {
      opacity: 1
    }
  }
}
</style>
