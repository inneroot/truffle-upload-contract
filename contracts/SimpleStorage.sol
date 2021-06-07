pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  string value;

  function set(string memory x) public {
    value = x;
  }

  function get() public view returns (string memory){
    return value;
  }
}