import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
  FormFeedback,
  Form,
  Alert,
  Spinner,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import withRouter from "../../../Components/Common/withRouter";
import LanguageDropdown from "../../../Components/Common/LanguageDropdown";
import AuthSlider from "../authCarousel";
import { loginUser, resetLoginFlag } from "../../../slices/thunks";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import Select from "react-select";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import "aos/dist/aos.css";
import AOS from "aos";

const Login = (props: any) => {
  const dispatch: any = useDispatch();
  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const [loadingButton, setLoading] = useState(false);
  const [appYerVersion, setAppYerVersion] = useState("2024");
  const selectLayoutState = (state: any) => state;
  const loginpageData = createSelector(selectLayoutState, (state) => ({
    user: state.Account.user,
    error: state.Login.error,
    loading: state.Login.loading,
    errorMsg: state.Login.errorMsg,
  }));
  // Inside your component
  const { user, error, loading, errorMsg } = useSelector(loginpageData);

  const [loadingFinsh, setloadingFinsh] = useState(true);
  const sortbyname = [
    {
      options: [
        { label: "2024", value: "2024" },
        { label: "2023", value: "2023" },
      ],
    },
  ];
  const validation: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required(props.t("The E-Mail field is required"))
        .email(),
      password: Yup.string().required(
        props.t("The Password field is required")
      ),
    }),
    onSubmit: async (values) => {
      try {
        const data = {
          email: values.email,
          password: values.password,
        };
        dispatch(loginUser(data, props.router.navigate));
        setLoading(true);
      } catch (error) {
        console.error("Login failed:", error);
      } finally {
      }
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setloadingFinsh(loading);
      setTimeout(() => {
        setLoading(false);
      }, 900);
    }, 100);

    console.log(loading);
  }, [dispatch, errorMsg, loading, loadingButton, props.layoutType]);

  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => {
        dispatch(resetLoginFlag());
      }, 3000);
    }
  }, [errorMsg]);

  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out" });
  }, []);

  const AppYarVersiyon = (year: string) => {
    setAppYerVersion(year);
    sessionStorage.setItem("AppYear", year);
  };

  const handleButtonClick = (values1: any) => {
    setLoading(true);
    props.router.navigate("/dashboard");
  };

  const renderDropdown = () => {
    return (
      <div data-aos="fade-up" className="mb-3 position-relative">
        <Label for="versionDropdown">{props.t("Choose Barsis Version:")}</Label>

        <Select
          value={appYerVersion}
          onChange={(sortBy: any) => {
            setAppYerVersion(sortBy);
          }}
          options={sortbyname}
          id="choices-single-default"
          placeholder={appYerVersion}
          className="js-example-basic-single mb-0 "
          name="state"
        />

        <div className="mt-4">
          <Button
            disabled={loadingButton && true}
            color={loadingButton ? "tranparent" : "primary"}
            className="w-100 login-button"
            type="submit"
            onClick={handleButtonClick}
          >
            {loadingButton && (
              <Spinner size="sm" className="me-2 primary-900">
                Loading...
              </Spinner>
            )}
            {loadingButton ? "" : props.t("GO ON")}
          </Button>
        </div>
      </div>
    );
  };
  document.title = "Barsis | Enter Barsis World Now!";

  return (
    <React.Fragment>
      <div className="auth-page-wrapper d-flex">
        <div className="auth-page-content overflow-hidden">
          <Container>
            <Row>
              {/* Slider Area */}
              <Col lg={7} className="login-page">
                <Card className="overflow-hidden login-slider mb-0">
                  <div className="live-preview">
                    <AuthSlider />
                  </div>
                </Card>
              </Col>

              {/* Form Area */}
              <Col lg={5} className="login-bg">
                <div className="login-language">
                  <LanguageDropdown />
                </div>

                <div className="overflow-hidden form-section">
                  <Row className="g-0 login-form-section">
                    <Col lg={12}>
                      <div className="p-lg-5 p-4 form-section-login">
                        <div>
                          <h2 data-aos="fade-up" className="login-baslik">
                            {props.t("Welcome Back !")}
                          </h2>

                          <p className="text-paragraph" data-aos="fade-up">
                            {props.t("Please enter your details.")}
                          </p>
                        </div>
                        {loadingFinsh ? (
                          <div className="mt-4">
                            <Form
                              data-aos="fade-up"
                              onSubmit={(e) => {
                                e.preventDefault();
                                validation.handleSubmit();
                                return false;
                              }}
                              action="#"
                            >
                              <div className="mb-3 position-relative">
                                <div className="form-icon">
                                  <Input
                                    type="text"
                                    className="form-control form-control-icon login-input-text"
                                    id="email"
                                    placeholder={props.t("E-Mail")}
                                    name="email"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.email || ""}
                                    invalid={
                                      validation.touched.email &&
                                      validation.errors.email
                                        ? true
                                        : false
                                    }
                                  />
                                  <i className="ri-user-line"></i>
                                  {validation.touched.email &&
                                  validation.errors.email ? (
                                    <FormFeedback
                                      className="align-middle"
                                      type="invalid"
                                    >
                                      {validation.errors.email}
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </div>

                              <div className="mb-3">
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                  <div className="form-icon">
                                    <Input
                                      type={passwordShow ? "text" : "password"}
                                      className="form-control form-control-icon pe-5 password-input login-input-text"
                                      defaultValue="123123123"
                                      placeholder={props.t("Password")}
                                      id="password-input"
                                      name="password"
                                      value={validation.values.password || ""}
                                      onChange={validation.handleChange}
                                      onBlur={validation.handleBlur}
                                      invalid={
                                        validation.touched.password &&
                                        validation.errors.password
                                          ? true
                                          : false
                                      }
                                    />
                                    <i className="ri-lock-password-line align-middle"></i>
                                    {validation.touched.password &&
                                    validation.errors.password ? (
                                      <FormFeedback type="invalid">
                                        {validation.errors.password}
                                      </FormFeedback>
                                    ) : null}
                                  </div>

                                  <button
                                    className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                    type="button"
                                    id="password-addon"
                                    onClick={() =>
                                      setPasswordShow(!passwordShow)
                                    }
                                  >
                                    <i className="ri-eye-fill align-middle"></i>
                                  </button>
                                </div>
                              </div>

                              <div className="form-check">
                                <Input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="auth-remember-check"
                                />
                                <Label
                                  className="form-check-label"
                                  htmlFor="auth-remember-check"
                                >
                                  {props.t("Remember me")}
                                </Label>
                              </div>

                              <div className="mt-4">
                                <Button
                                  disabled={loadingButton && true}
                                  color={
                                    loadingButton ? "tranparent" : "primary"
                                  }
                                  className="w-100 login-button"
                                  type="submit"
                                >
                                  {loadingButton && (
                                    <Spinner
                                      size="sm"
                                      className="me-2 primary-900"
                                    >
                                      {props.t("Loading...")}
                                    </Spinner>
                                  )}
                                  {loadingButton ? "" : props.t("Login")}
                                </Button>

                                {error && error ? (
                                  <p className="color-red"> {error} </p>
                                ) : null}
                              </div>
                            </Form>
                          </div>
                        ) : (
                          renderDropdown()
                        )}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

Login.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};
export default withRouter(withTranslation()(Login));
