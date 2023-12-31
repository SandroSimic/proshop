import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setKeyword('')
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex" autocomplete="off" >
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button className="p-2 mx-2" type="submit" variant="outline-light">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
