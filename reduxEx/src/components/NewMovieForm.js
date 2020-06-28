import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Image, Message } from 'semantic-ui-react'
import InlineError from './InlineError';

class NewMovieForm extends Component {
    state = {
        title: '',
        cover: '',
        errors: {}
    };

    static propTypes = {
        onNewMovieSubmit: PropTypes.func.isRequired
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {
        const errors = this.validate();
        this.setState({
            errors
        });

        if (Object.keys(errors).length === 0) {
            this.props.onNewMovieSubmit(this.state);
        }
    };

    validate = () => {
        const errors = {};
        if (!this.state.title) errors.title = "Can't be blank."
        if (!this.state.cover) errors.cover = "Can't be blank."
        return errors;
    };

    render() {
        const { errors } = this.state;
        return (
            <div>
                <h2>New Movie</h2>
                <Form onSubmit={this.onSubmit} >
                    <Form.Field>
                        <label>Title</label>
                        {errors && errors.title && <InlineError message={errors && errors.title} />}
                        <input
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            placeholder='Title' />
                    </Form.Field>
                    <Form.Field>
                        <label>Cover Url</label>
                        {errors && errors.cover && <InlineError message={errors && errors.cover} />}
                        <input
                            id="cover"
                            name="cover"
                            value={this.state.cover}
                            onChange={this.handleChange}
                            placeholder='Cover Url' />
                    </Form.Field>
                    <Image src={this.state.cover} size='small' />
                    <div className="clearfix"></div>
                    <Button type='submit'>Submit</Button>

                    {
                        this.props.newMovie && this.props.newMovie.error && this.props.newMovie.error.response
                        &&
                        (
                            <Message negative>
                                <Message.Header>We're Sorry</Message.Header>
                                <p>A problem occured while recording.</p>
                            </Message>
                        )
                    }
                </Form>
            </div>
        );
    }
}

export default NewMovieForm;