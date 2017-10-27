export default class extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const button = this.button.children;
    for (let i = 0; i < button.length; i++) {
      let a = button[i];
      a.onclick = () => a.classList.toggle("active");
    }
  }

  render() {
    return (
      <div ref={a => this.button = a}
      onClick={this.handleClick}>
      {this.props.children}
      </div>
    )
  }
}
