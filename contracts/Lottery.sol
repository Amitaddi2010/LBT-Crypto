pragma solidity >=0.5.0 < 0.9.0;
import "./ERC20_LBT.sol";
    contract lottery
    {
        address public manager;
        address payable[] public participants;
        Token public token; 
        event win(address);
        constructor(Token _token)
        {     token = _token;
              manager = msg.sender;
        }
        receive() external payable
        {
            require(msg.value==1 ether);
            participants.push(payable(msg.sender));
        }
        function CheckBalance() public view returns(uint)
        {

         require(msg.sender==manager);
        return address(this).balance;
        }
        function random() public view returns(uint)
        {
        return uint(keccak256(abi.encodePacked(block.difficulty,block.timestamp,participants.length)));
    
        }
        function selectWinner() public
        {
            require(msg.sender==manager);
            require(participants.length>=3);
            uint r = random();
            address payable winner;
            uint index = r % participants.length;
            winner = participants[index];
            winner.transfer(CheckBalance());
            emit win(winner);
            participants=new address payable[](0);

        }

    }
