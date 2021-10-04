<template>
  <div>
    <div class="container-fluid bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card cad-stats">
              <div class="caed-header card-header-warning card-header-icon">
                <div
                  class="card-icon"
                  style="margin-left: 15px; width: 70px; height: 70px"
                >
                  <i class="material-icons"></i>
                </div>
                <p class="card-category text-center">Used Space</p>
                <h4 class="card-title text-center">49/50<span> GB</span></h4>
              </div>
              <div class="card-footer">
                <div class="stats">
                  <a href="">Get More Space...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
*,
:after,
:before {
  box-sizing: border-box;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.card {
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 50%);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  border: 0;
  margin-bottom: 30px;
  margin-top: 30px;
  border-radius: 6px;
  color: #333;
  background: #fff;
  width: 100%;
}

.card [class*="card-header-"] .card-icon,
.card [class*="card-header-"] .card-text {
  border-radius: 3px;
  background-color: #999;
  padding: 15px;
  margin-top: -20px;
  margin-right: 15px;
  float: left;
}

.card .card-header-warning .card-icon,
.card .card-header-warning .card-text,
.card .card-header-warning:not(.card-header-icon):not(.card-header-text) {
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%),
    0 7px 10px -5px rgb(255 152 0 / 40%);
}

.card.bg-warning,
.card .card-header-warning .card-icon,
.card .card-header-warning .card-text,
.card .card-header-warning:not(.card-header-icon):not(.card-header-text),
.card.card-rotate.bg-warning .back,
.card.card-rotate.bg-warning .front {
  background: linear-gradient(60deg, #ffa726, #fb8c00);
}

.card-stats .card-header.card-header-icon i {
  font-size: 36px;
  line-height: 56px;
  width: 56px;
  height: 56px;
  text-align: center;
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
}

.card-category {
  color: #999;
  font-size: 14px;
  margin: 0;
  padding-top: 10px;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.card-footer {
  padding: 0;
  padding-top: 10px;
  margin: 0 15px 10px;
  border-radius: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
}

a {
  color: #9c27b0;
  text-decoration: none;
  background-color: transparent;
}
</style>
