<style>
  .loading-container {
    left: 50%;
    margin: -30px;
    position: absolute;
    text-align: center;
    top: 50%;
  }

  .lds-ring {
    display: inline-block;
    height: 80px;
    position: relative;
    width: 80px;
  }

  .lds-ring div {
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border: 8px solid #fff;
    border-color: #fff transparent transparent;
    border-radius: 50%;
    box-sizing: border-box;
    display: block;
    height: 64px;
    margin: 8px;
    position: absolute;
    width: 64px;
  }

  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }

  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }

  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="loading-container">
  <div class="lds-ring">
    <div />
    <div />
    <div />
    <div />
  </div>
</div>
