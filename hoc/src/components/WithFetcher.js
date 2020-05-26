import React from "react";
import Loader from 'react-loader-spinner'

const WithFetcher = props => WrappedComponent => {

    class WithFetcher extends React.Component {

        constructor() {
            super();
            this.state = {
                results: [],
                loaded: false,
                error: false
            };
        }

        async fetchData() {
            try {
                const data = await fetch(props.apiServiceURL);
                const json = await data.json();

                if (json) {
                    this.setState({
                        results: json,
                        loaded: true
                    });
                }
            }
            catch (error) {
                this.setState({
                    loaded: false,
                    error: error.message
                });
            }
        }

        async  componentDidMount() {
            this.fetchData();
        }

        getWrappedComponent = () => {
            const { results } = this.state;

            let wrapped = results && results.length > 0 ?
                <WrappedComponent
                    results={results}
                    {...this.props}
                />
                :
                "No data to listed..."

            return (
                wrapped
            );
        }

        showLoader() {
            return (
                <Loader type="Grid" height={100} width={100} />
            )
        }

        render() {
            const { loaded, error } = this.state;
            if (!loaded || error) {
                return !loaded ? this.showLoader() : <div>{error}</div>
            }

            let content = this.getWrappedComponent();

            return (
                <div>{content}</div>
            );
        }
    }

    return WithFetcher;
};

export default WithFetcher;