<template>
	<div>
        <div class="imageUploadSection">
            <label for="imageInputOriginal">
                <div id="imagePreview" class="imageUploadSection__imagePreview newCvakacka__error">
                    <img id="imagePreviewImage" src="~assets/images/placeholder.png">
                </div>
            </label>

            <label for="imageInputOriginal">
                <p class="imageUploadSection__button">{{buttonText}}</p>
            </label>
            <input style="display:none;" id="imageInputOriginal" type="file" @change="previewImage" accept="image/*">
        </div>
	</div>

</template>

<script>
    export default {
        props: ["buttonText","user_id"],

        data: function () {
            return {

            }
        },

        methods: {
            previewImage: function(event){
                var imagePreviewObject = event.target.files[0];
                if(imagePreviewObject == undefined){
                    return
                }
                var imagePreviewUrl = window.URL.createObjectURL(imagePreviewObject);
                document.getElementById("imagePreviewImage").style.display = "none";
                document.getElementById("imagePreview").style.background = "url('"+imagePreviewUrl+"')";


                // Upload image
                const formData = new FormData();
                formData.append("user_image", event.target.files[0]);
                formData.append("user_id", this.user_id);
                const config = {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                };

                this.$axios.post('https://xxx.com/image_upload.php', formData, config).then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
            },
            
            fetchImage(){
                this.$axios.$get('https://xxx.com/get_user_image.php?user_id='+this.$route.query.id).then((response) => {
                    if(response != ""){
                        document.getElementById("imagePreviewImage").style.display = "none";
                        document.getElementById("imagePreview").style.background = "url('https://xxx.com/"+response+"')";
                    }
                }, (error) => {
                    console.log(error);
                });
            }
        },

        mounted: function(){
            this.fetchImage();
        },
    }

</script>

<style lang="scss" scoped>
    .imageUploadSection{

        margin-bottom: 20px;

        &__imagePreview{
            display: flex;
            width: 190px;
            height: 190px;
            border-radius: 10%;
            background-color: #FBFFC5!important;
            border: 1px solid black;
            cursor: pointer;


            img{
                width: 35%;
                margin: auto;
                opacity: 0.6;
            }
        }

        &__button{
            width: 150px;
            border-radius: 10px;
            background-color: #FBFFC5;
            cursor: pointer;
            display: inline-block;
            border: 0px;
            padding: 10px 20px;
            font-weight: bold;
            margin: 20px 0px;
            color: black;
        }
    }
</style>