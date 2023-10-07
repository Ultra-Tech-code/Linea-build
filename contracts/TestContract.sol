//SPDX-License-Identifier:MIT

pragma solidity ^0.8.19;

contract TestContract {
    string greetings;

    /**
     * @notice  . A function to set greetings name
     * @param   _name  . A string
    */
    function setGreetings(string memory _name) public {
        require(bytes(_name).length > 0, "Enter Valid Name");
        greetings = string(abi.encodePacked("Hello ", _name));
    }
    
    /**
     * @notice  . A function to return greetings value
    */
    function getGreetings() public view returns(string memory){
        return greetings;
    }   
}