import React, {Component} from 'react';
import {Container, Row, Col, Form, Button } from 'react-bootstrap';
import { formDataService} from '../services'
import 'bootstrap/dist/css/bootstrap.min.css';

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: '',
            alamat: '',
            hp: '',
            hobi: '',
            jenis_kelamin: '',
            list_hobi: [],
        };

        this.onChangeJenkel = this.onChangeJenkel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    };
    
    onChangeJenkel = (event) => {
        this.setState({jenis_kelamin:event.target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        let formData = {
            nama: this.state.nama,
            alamat: this.state.alamat,
            hp: this.state.hp,
            hobi: this.state.hobi,
            jenis_kelamin: this.state.jenis_kelamin
        }
        formDataService.postData(formData)
        .then(response => {
              console.log("response", response)
            })
        .catch(error => {
            console.log("error", error)
        })
        console.log('form', formData)
    };


    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12">
                        <h2>Vivere Form</h2>
                        <h5>Harap isi form di bawah ini</h5>
                        <Form>
                            <Form.Group as={Row} controlId="Nama">
                                <Form.Label column sm="2">Nama</Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="Masukan Nama" value={this.state.nama} onChange={e =>  this.setState({ nama : e.target.value})} required/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="Alamat">
                                <Form.Label column sm="2">Alamat</Form.Label>
                                <Col sm="10">
                                    <Form.Control as="textarea" rows="3" placeholder="Masukan Alamat" value={this.state.alamat} onChange={e =>  this.setState({ alamat : e.target.value})} required/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="Hp">
                                <Form.Label column sm="2">Hp</Form.Label>
                                <Col sm="10">
                                    <Form.Control type="number" placeholder="Masukan No. HP" value={this.state.hp} onChange={e =>  this.setState({ hp : e.target.value})} required/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="Hp">
                                <Form.Label column sm="2">Hobi</Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="Masukan Hobi" value={this.state.hobi} onChange={e =>  this.setState({ hobi : e.target.value})} required/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="JenisKelamin">
                                <Form.Label column sm="2">Jenis Kelamin</Form.Label>
                                <Col sm="10">
                                <Form.Control as="select" onChange={this.onChangeJenkel}  value={this.state.jenis_kelamin}>
                                    <option value="pria">Pria</option>
                                    <option value="wanita">Wanita</option>
                                </Form.Control>
                                </Col>
                            </Form.Group>
                            <Button variant="primary" className="btn-block" onClick={(event) => this.onSubmit(event)}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FormInput;