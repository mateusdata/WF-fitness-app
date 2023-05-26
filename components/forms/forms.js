import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [sexo, setSexo] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleSalvar = () => {
    // Lógica para salvar os dados
    console.log('Dados salvos:', { nome, sobrenome, email, sexo, whatsapp });
  };

  const handleSelecionarSexo = (opcao) => {
    setSexo(opcao);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <View style={styles.radioContainer}>
        <Text style={styles.radioLabel}>Sexo:</Text>
        <TouchableOpacity
          style={[styles.radioOption, sexo === 'Masculino' && styles.radioOptionSelected]}
          onPress={() => handleSelecionarSexo('Masculino')}
        >
          <Text style={[styles.radioText, sexo === 'Masculino' && styles.radioTextSelected]}>Masculino</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioOption, sexo === 'Feminino' && styles.radioOptionSelected]}
          onPress={() => handleSelecionarSexo('Feminino')}
        >
          <Text style={[styles.radioText, sexo === 'Feminino' && styles.radioTextSelected]}>Feminino</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="WhatsApp"
        value={whatsapp}
        onChangeText={setWhatsapp}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  radioOption: {
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  radioOptionSelected: {
    backgroundColor: '#4287f5',
  },
  radioText: {
    fontSize: 16,
  },
  radioTextSelected: {
    color: 'white',
  },
  button: {
    backgroundColor: '#4287f5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Formulario;

