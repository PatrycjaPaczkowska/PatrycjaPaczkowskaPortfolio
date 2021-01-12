import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";

const Menu = props => {
  return (
    <div className={props.class}>
      <a href="#about">about</a>
      <a href="#tech">technologies</a>
      <a href="#projects">projects</a>
      <a href="#contact">contact</a>
    </div>
  );
};

const Button = props => {
  return (
    <button className={props.class} onClick={props.click}>
      {props.text}
    </button>
  );
};

class Nav extends React.Component {
  state = {
    click: false
  };

  hideMenu = () => {
    const list = document.querySelector(".nav__mobile--list");
    list.style.top = "-100%";

    this.setState({
      click: !this.state.click,
    })
    
  };

  componentDidMount = () => {
    const listOfMenu = document.querySelectorAll(".nav__mobile--list a");

    listOfMenu.forEach(link => {
      link.addEventListener("click", this.hideMenu);
    });
  };

  handleClick = () => {
    const list = document.querySelector(".nav__mobile--list");

    if (this.state.click) {
      list.style.top = "-100%";
    } else {
      list.style.top = "9vh";
    }

    this.setState({
      click: !this.state.click
    });
  };

  render() {
    const style = {
      fontSize: 40
    };

    let button = this.state.click ? (
      <Button
        click={this.handleClick}
        class="nav__mobile--openMenu"
        text={<CancelIcon style={style} />}
      />
    ) : (
      <Button
        click={this.handleClick}
        class="nav__mobile--closedMenu"
        text="MENU"
      />
    );

    return (
      <nav className="nav">
        <div className="nav__mobile">
          {button}
          <Menu class="nav__mobile--list" />
        </div>

        <div className="nav__desktop">
          <Menu class="nav__desktop--list" />
        </div>
      </nav>
    );
  }
}

export default Nav;
