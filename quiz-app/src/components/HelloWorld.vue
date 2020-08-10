<template>
  <div>
    <div v-if="!isStarted" class="card">
      <h3>To start the test please click the button below</h3>
      <button class="myButton" @click="start">START !</button>
    </div>
    <p v-if="errorr" style="color:red">{{errorr}}</p>
    <template v-if="!isFinal">
      <div v-if="isStarted" class="card">
        <p style="font-weight:bold">{{index + 1}}) {{questions[index].question}}</p>
        <template v-for="a in questions[index].incorrect_answers">
          <p :key="a.id">
            <input
            type="radio"
            :name="questions[index].question"
            v-model="answer"
            :value="a"
            required
          />
          <label :for="a">{{a}}</label>
          </p>
        </template>

        <div class="bottom">
          <button v-if="!isFinal" class="nextButton" @click="next(index)">Next Question</button>
        </div>
      </div>
    </template>
    <div v-if="isFinal" class="card">
        <p class="large">Your score was: {{score}}</p>
        <table>
          <tr>
            <th>The question</th>
            <th>Correct Answer</th>
            <th>Your Answer</th>
          </tr>
          <tr v-for="item in answers" :key="item.id" :class="item.greenOrred">
            <th>{{item.question}}</th>
            <th>{{item.correctAnswer}}</th>
            <th>{{item.yourAnswer}}</th>
          </tr>
        </table>
        <button class="myButton" style="margin-top:20px" @click="restart">RESTART</button>
       
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import { _ } from "vue-underscore";
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      answer: null,
      index: 0,
      isStarted: false,
      questions: [],
      answers: [],
      isFinal: false,
      score: 0,
      errorr:null,
    };
  },
  methods: {
    start() {
      if(this.questions[this.index]){
         this.isStarted = true;
        this.answersShuffle();
      }else{
        this.errorr = "There was an error with the servers please try again"
        setTimeout(() => this.errorr = null, 2500)
      }
    },
    
    restart() {
      this.index = 0;
      this.score = 0;
      this.isStarted = false
      this.answers = [];
      this.isFinal = false;
      this.getQuestions()
    },

    getQuestions() {
      axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple" 
      )
      .then((response) => (this.questions = response.data.results)).catch(error => console.log(error));
    },

    next(index) {
      const correctAnswer = this.questions[index].correct_answer
      if (this.answer === correctAnswer){
        this.score++
        this.answers.push({index: index, question: this.questions[index].question, yourAnswer: this.answer, correctAnswer: correctAnswer, greenOrred: 'green' })
      }else {
        this.answers.push({index: index, question: this.questions[index].question, yourAnswer: this.answer, correctAnswer: correctAnswer , greenOrred: 'red'})
      }

      this.answer = null
      
      if (index == this.questions.length - 1) {
        this.isFinal = true;
      } else {
        this.index++;
      }
    },
    answersShuffle() {
      this.questions.forEach((element) => {
        element.incorrect_answers.push(element.correct_answer);
      });
      this.questions.forEach((element) => {
        element.incorrect_answers = _.shuffle(element.incorrect_answers);
      });
    },

  },
  created() {
    this.getQuestions();
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin: 10px auto 0 auto;
  width: 700px;
  background-color: #eee;
  padding: 2em;
  border-radius: 15px;
  border: 1px solid black;
}

.myButton {
  width: 100%;
  padding: 1em;
  background-color: #b1cbbb;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 1em;
  border-radius: 10px;
}

.bottom {
  display: flex;
}
.nextButton {
  width: 50%;
  margin:0 auto;
  padding:7px;
  border-radius: 5px;
  background-color:#24a0ed;
  color:white;
  font-size: 1.5em;
}

.green {
  color: green;
}

.red{
  color:red;
}

.large {
  font-size: 2em;
}


table, td, th {  
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border: 1px solid #ddd;
  text-align: left;

}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 15px;
}
</style>
