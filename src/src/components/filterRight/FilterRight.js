import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import './FilterRight.css'

function FilterRight() {
  const [isVisible, setIsVisible] = useState(false);


  return (
    <>
      <Button
        onClick={() => setIsVisible(!isVisible)}
        aria-controls="example-collapse-text"
        aria-expanded={isVisible}
      >
        <FontAwesomeIcon icon={faCaretDown} className={`text-light ${isVisible ? 'rotate-270' : 'rotate-90'}`} />
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={isVisible} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default FilterRight;
