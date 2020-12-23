import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 * {
  margin: 0 ;
  padding: 0 ;
  box-sizing:border-box;
  outline:none;
}
html{
    scrollbar-color: #84b700 white;
    scrollbar-width: thin;
    overflow-x:hidden;
    font-family: 'Open Sans', sans-serif;
    @media (max-width: 768px) {
        font-size:87.5%;
  }
}
body{
  overflow-x:hidden;
  font-family: 'Open Sans', sans-serif;
  scrollbar-color: #84b700 white;
  scrollbar-width: thin; 
  max-width:100%;
  -webkit-font-smoothing: antialiased !important; 
  @media (max-width: 768px) {
        font-size:87.5%;
      }
}


.container{
  max-width:1200px !important;
  width:100%;
  margin: auto;
  position:relative;
  @media (max-width: 768px) {
    padding: 0 .3rem;
    max-width:100% !important;
  }
}
body::-webkit-scrollbar {
  color:#fff; 
  width: 10px; 
}
body::-webkit-scrollbar-track {
  background: #fff;
  scrollbar-width: thin; 
}
body::-webkit-scrollbar-thumb {
  background-color: #84b700;    /* color of the scroll thumb */
  scrollbar-width: thin;
   /* creates padding around scroll thumb */
}
textarea,
select,
input[type="text"],
input[type="number"],
input[type="button"],
input[type="submit"],
input[type="email"],
input[type="tel"],
input[type="password"]{
     -webkit-appearance: none;
    
}
::-webkit-input-placeholder {
  color: #90B52A;
  font-size: 13px;
}
::-moz-placeholder {
  color: #90B52A;
  font-size: 13px;
}
:-ms-input-placeholder {
  color: #90B52A;
  font-size: 13px;
}
input::placeholder {
  color: #90B52A;
  font-size: 13px;
}
button, input,textarea{
  outline:none !important;
}
a{
  text-decoration:none !important;
  color:#fff;
}
ul {
  list-style:none;
}

.container{
  max-width:1200px;
  padding:0 1.5rem;
}
.little-modal{
  img{
    max-height:300px;
    @media(max-width:576px){
      max-width:300px;
      margin:auto;
    }
  }
  .modal-content{
    border:none;
    background-color:transparent;
    @media(max-width:576px){
   height:100%;
    }
  }
}
.modal-content{
    max-width:620px;
    margin:auto;
    border-radius:27px;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important;
    img:hover{
    cursor: pointer !important;
    
  }
    @media(max-width:576px){
    width:100%;
    height:100vh;
    border-radius:0;
    }
}
.modal-open{
  padding-right:0 !important;
}
.modal-dialog{
  @media(max-width:576px){
 margin:0;
    }
}

.fade.modal.show{
  display:flex !important;
  align-items:center !important;
  justify-content:center !important; 
}
.header-wrapper {
    background-image: url('/images/texture_01@2x.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: right;
    padding:3rem 2.5rem 2rem 2.5rem;
    border-radius:27px;
    position:relative;
    width:100%;
    h1,p{
      text-align:center;
    }
   .form-heading{
     max-width:350px;
     display:block;
     margin:1rem auto;
     @media(max-width:576px){
      max-width:250px;
      padding:0;
      
    }
   }
    p{
      color:#90B52A;
    }
    .close-button{
      max-width:40px;
      text-align:right;
      &:hover{
        cursor: pointer;
      }
    }
  }
 

  .form{
  padding:2rem 2rem;
  text-align:center;
 
  @media(max-width:576px){
    padding:1rem 1rem;
    margin-top:2rem;
    }
  input,
  select
   {
    width: 100%;
    border: 1px solid #90b52a;
    margin-bottom: 2rem;
    padding: 0.75rem 1.2rem;
    border-radius: 12px;
    font-size: 14px;
    color: #46742c;
    max-width:420px;
    
  }
  .input-wrapper {
    position: relative;
    max-width:420px;
    margin:auto;
  }
  .input-title {
    font-size: 12px;
    position: absolute;
    left: 25px;
    top: -8px;
    color: #46742c;
    background-color: #fff;
    padding: 0 0.4rem;
    margin-bottom: 0;
  }
  .checkbox-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    p {
      color: #46742c;
      font-size: 12px;
      margin-bottom: 0;
      margin-left: 1rem;
    }
    input {
      padding: 0;
      width: unset;
      margin-bottom: 0;
    }
  }
  .submit-button {
    border: none;
    background-color: #90b52a;
    padding: 0.75rem 0;
    max-width: 320px;
    width: 100%;
    border-radius: 12px;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    margin-bottom:2rem;
  }
  }
  .form-content{
    max-width:300px !important;
    background-color:transparent;
    border:none;
    img{
        max-width:300px !important;
      }
  }
  
 
`;

export default GlobalStyle;
