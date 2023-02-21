// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract DigitalId {
    struct Id{
        address owner;
        string fullName;
        uint256 birthDate;
        string location;
        uint256 poscode;
        string gender;
        uint256 phoneNo;
        string image;
    }

    mapping(address => bool) public recorded;
    mapping(uint256 => Id) public ids;

    uint256 public numberOfIds = 0;

    function createId(address _owner, string memory _fullName, uint256 _birthDate, string memory _location, uint256 _poscode, string memory _gender, uint256 _phoneNo, string memory _image) public returns(uint256) {
        Id storage id = ids[numberOfIds];

        id.owner = _owner;
        id.fullName = _fullName;
        id.birthDate = _birthDate;
        id.location = _location;
        id.poscode = _poscode;
        id.gender = _gender;
        id.phoneNo = _phoneNo;
        id.image = _image;

        numberOfIds++;

        return numberOfIds - 1;
    }

    function getId() public view returns(Id[] memory) {
        Id[] memory allIds = new Id[](numberOfIds);
        for (uint i = 0; i < numberOfIds; i++) {
            Id storage item = ids[i];

            allIds[i] = item;
        }

        return allIds;
    }
}