import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import {Modal} from '../Modal';
import {Input} from '../Input';

interface Food {
  id: number;
  description: string;
  name: string;
  price: number;
  available: boolean;
  image: string;
}

interface ModalAddFoodProps{
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: Food) => Promise<void>;
}

export function ModalAddFood(props: ModalAddFoodProps){
  const formRef = createRef();
  const { isOpen,setIsOpen, handleAddFood } = props;


  async function handleSubmit(data: any) {
    handleAddFood(data);
    setIsOpen();
  };


}

class ModalAddFooda extends Component {
  

  render() {
    const { , setIsOpen } = this.props;

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={this.formRef} onSubmit={this.handleSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }
};

export default ModalAddFood;
