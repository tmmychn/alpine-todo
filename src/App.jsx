import {defineComponent} from 'vue';
import Header from './components/Header';
import TodoComponent from './components/Todo'
import './main.css';

export default defineComponent({
  render() {
    return (
      <div className="app bg-light">
        <div className="bg-img light-img" />
        <div className="container">
            <Header />
            <TodoComponent />
        </div>
    </div>
    );
  },
});
