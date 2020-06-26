import React from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliary/Auxiliary";

// const withErrorHandler = (WrappedComponent, Axios) => {
//     return class extends React.Component {
//         state = {
//             error: null,
//         };

//         componentDidMount() {
//             this.reqInterceptor = Axios.interceptors.request.use(
//                 (request) => {
//                     this.setState({ error: null });
//                     return request;
//                 },
//                 (error) => Promise.reject(error)
//             );
//             this.resInterceptor = Axios.interceptors.response.use(
//                 (response) => response,
//                 (error) => {
//                     this.setState({ error: error });
//                     return Promise.reject(error);
//                 }
//             );
//         }

//         componentWillUnmount() {
//             Axios.interceptors.request.eject(this.reqInterceptor);
//             Axios.interceptors.response.eject(this.resInterceptor);
//         }

//         errorConfirmedHandler = () => {
//             this.setState({ error: null });
//         };

//         render() {
//             return (
//                 <Aux>
//                     <Modal
//                         show={this.state.error}
//                         modalClosed={this.errorConfirmedHandler}
//                     >
//                         {this.state.error ? this.state.error.message : null}
//                     </Modal>
//                     <WrappedComponent {...this.props} />
//                 </Aux>
//             );
//         }
//     };
// };

const withErrorHandler = (WrappedComponent, Axios) => {
    return (props) => {
        const [state, setState] = React.useState({ error: null });

        const errorHandler = (error) => {
            setState({ error: error });
        };

        React.useEffect(() => {
            const reqInterceptor = Axios.interceptors.request.use(
                (request) => {
                    errorHandler(null);
                    return request;
                },
                (error) => Promise.reject(error)
            );
            const resInterceptor = Axios.interceptors.response.use(
                (response) => response,
                (error) => {
                    errorHandler(error);
                    return Promise.reject(error);
                }
            );
            return () => {
                Axios.interceptors.request.eject(reqInterceptor);
                Axios.interceptors.response.eject(resInterceptor);
            };
        }, []);

        return (
            <Aux>
                <Modal
                    show={state.error}
                    modalClosed={() => errorHandler(null)}
                >
                    {state.error ? state.error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Aux>
        );
    };
};

export default withErrorHandler;
