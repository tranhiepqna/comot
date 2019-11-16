import React, { Fragment } from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../css/ShopCart.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCount } from "../../store";

const ButtonPage = props => {
  const { count } = props;
  const add = () => {
    props.addCount();
  };
  return (
    <Fragment>
      <div className="float">
        <button type="button" className="btn btn-circle my-float" onClick={add}>
          <i className="fas fa-shopping-cart"></i>
        </button>
        <span className="badge count">{count}</span>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ count }) => ({ count });
const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonPage);
