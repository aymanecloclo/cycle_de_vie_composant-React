import React from 'react';

class LifeCycleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: Initialisation de l'état");
  }

  componentDidMount() {
    console.log("componentDidMount: Le composant a été monté");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Le composant a été mis à jour");
    if (prevState.count !== this.state.count) {
      console.log(`Compteur mis à jour : ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Nettoyage avant suppression du composant");
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("render: Rendu du composant");
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Cycle de Vie d'un Composant React
        </h1>
        <p className="text-lg text-gray-800 mb-6">
          Compteur: <span className="font-semibold">{this.state.count}</span>
        </p>
        <button
          onClick={this.incrementCount}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          Incrémenter
        </button>
      </div>
    );
  }
}

export default LifeCycleExample; // Assurez-vous que c'est bien une exportation par défaut
