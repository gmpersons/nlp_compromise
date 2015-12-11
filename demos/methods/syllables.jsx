let {Row, Col, Input} = ReactBootstrap;

let Syllables = React.createClass({
  getInitialState: function () {
    return {
      word: 'hamburger',
      result: []
    };
  },
  componentDidMount: function () {
    this.update();
  },
  update: function (el) {
    let word = 'hamburger';
    if (el && el.target) {
      word = el.target.value || '';
    }
    let t = nlp.Text(word);
    this.state.result = t.syllables();
    this.state.word = word;
    this.setState(this.state);
  },
  render: function () {
    let cmp = this;
    let state = this.state;
    let css = {
      part: {
        padding: 15,
        fontSize: 30
      },
      title: {
        fontSize: 20
      },
      code: {
        color: 'grey'
      }
    };
    let code = 'nlp.Text(\'\').syllables()';
    let result = state.result.map(function(a, i) {
      return <span key={i} style={css.part}>{a + ','}</span>;
    });
    return (
      <Row>
        <Row>
          <Col md={2} xs={2} style={css.title}>
            {'Syllables'}
          </Col>
          <Col md={10} xs={10} style={css.code}>
            {code}
          </Col>
        </Row>
        <Row>
          <Col md={1} xs={1}></Col>
          <Col md={10} xs={10}>
            <Input type="text" value={this.state.word} bsSize="large" placeholder="Syllables" addonAfter={'Syllables'} onChange={this.update} />
          </Col>
        </Row>
        <Row>
          <Col md={10} xs={10}>
            {result}
          </Col>
        </Row>
      </Row>
      );
  }
});

window.Syllables = Syllables;