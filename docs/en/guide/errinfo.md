# Event code and meaning

## 0x0F0001 The robot body is not powered on 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot is powered off

### Reason
 When the controller executes the command, it detects that the robot is powered off. 

### Action
 Confirm whether the robot is powered on; if the robot is powered off, please power on the robot first.

## 0x0F0002 Robot is disabled 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot is disabled

### Reason
 The controller detects the robot is disabled, when the controller is running programs.

### Action
 Confirm whether the robot is enabled; if the robot is disabled, please enable the robot first.

## 0x0F0003 The operation cannot be performed in the mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 This operation cannot be performed in the current mode Currently in  mode,  commands are not allowed

### Reason
 There are multiple modes inside the controller, and specific operations are allowed to run in specific modes. Mode switching is done automatically internally. The problem is caused by the wrong chosen operation mode.

### Action
 Exit the current mode first, then perform the operation, such as enabling the robot before operation.

## 0x0F0004 Inverse Kinematic calculation failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Inverse Kinematic calculation failed

### Reason
 Inverse Kinematic calculation failed, the reason are as follows: 
(1) The given Cartesian spatial position is out of robot’s reach; 
(2) The given Cartesian spatial position is unsolvable in the solution space determined by the given reference angle.

### Action
 (1) Enter the coordinate editing interface in the manual interface, and enter the position information for verification;
(2) Manual JOG, check whether the robot target point or target path is reachable. If it is reachable, please change the orientation for inverse kinematics calculation.

## 0x0F0005 The settings value is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The settings value is too large

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x0F0006 The robot joint reaches the positive hard limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The robot joint reaches the positive hard limit and cannot move

### Reason
 When JOG the robot, the robot has reached the limit, but the command still moves towards the limit direction.

### Action
 Check whether the current position of the robot has reached the limit, and the robot cannot exceed the limit.

## 0x0F0007 The robot joint reaches the negative hard limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The robot joint reaches the negative hard limit and cannot move

### Reason
 When JOG the robot, the robot has reached the limit, but the command still moves towards the limit direction.

### Action
 Check whether the current position of the robot has reached the limit, and the robot cannot exceed the limit.

## 0x0F0008 The robot joint reaches the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The robot joint reaches the positive soft limit and cannot move

### Reason
 When JOG the robot, the robot has reached the limit, but the command still moves towards the limit direction.

### Action
 Check whether the current position of the robot has reached the limit, and the robot cannot exceed the limit.

## 0x0F0009 The robot joint reaches the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The robot joint reaches the negative soft limit and cannot move

### Reason
 When JOG the robot, the robot has reached the limit, but the command still moves towards the limit direction.

### Action
 Check whether the current position of the robot has reached the limit, and the robot cannot exceed the limit.

## 0x0F000A Cartesian target position exceeds positive maximum position limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Cartesian target position exceeds positive maximum position limit

### Reason
 This error pops out when a given position exceeds the maximum limit of the axis during Cartesian space movement.

### Action
 Please check if the given Cartesian space target position exceeds the robot’s reach.

## 0x0F000B Cartesian target position exceeds negative maximum position limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Cartesian target position exceeds negative maximum position limit

### Reason
 This error pops out when a given position exceeds the maximum limit of the axis during Cartesian space movement.

### Action
 Please check if the given Cartesian space target position exceeds the robot’s reach.

## 0x0F000E Manual operation is not possible during joint return to zero.  
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 No manual operation during Home

### Reason
 The error usually pop-outs when manual operation the robot during the robot moves to the zero position. 

### Action
 Check if the robot is currently returning to zero, and if so, wait for the robot to complete the process of returning to zero and then continue the operation. 

## 0x0F000F Cannot find the joint mentioned in the command 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Cannot find the joint mentioned in the command

### Reason
 The error is caused by a given axis / joint cannot be found when a single joint moves in a Cartesian space or a single joint moves in a joint space.

### Action
 Please check whether the joint given in the command is correct; if the instruction is correct, please export the log and contact the JAKA technical service personnel.

## 0x0F0010 Invalid speed of the move command 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid speed of the move command

### Reason
 Internal reservation

### Action
 Internal reservation

## 0x0F0011 Move command target position exceeds the limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Move command target position exceeds the limit

### Reason
 MoveJ or MoveL target position exceeds the limit.    

### Action
 Manual JOG, check whether the target position is reachable and whether the joint limit will be exceeded.

## 0x0F0012 Cannot perform HOME within MoveJ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Cannot perform HOME within MoveJ

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x0F0013 Homing... 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Homing...

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x0F0014 Failed to exit protective mode 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to exit protective mode

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x0F0015 Robot is powered off 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot is powered off

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x0F0016 The robot joint reaches soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The robot joint reaches soft limit

### Reason
 The robot joint reaches soft limit and cannot perform the command.

### Action
 Check whether the current robot joint has reached the joint limit. If it has arrived, it cannot continue to move towards the limit direction, but can only move towards the opposite direction. Please JOG the joint exceeding the limit back into the joint limit range on the teaching page, or modify the limit on the setting page.

## 0x0F0017 The target position of the move command is unreachable 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The target position of the move command is unreachable

### Reason
 The target position of the move command is unreachable

### Action
 The target position is out of working range or at a singularity. Manual operation to check whether the joint can be moved to the target point, if possible, consider changing the orientation of the robot to reach the target point from other paths or orientations.

## 0x0F0018 Reach the singularity and perform protective stop 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Reach the singularity and perform protective stop

### Reason
 The robot is about to reach the singularity and cannot continue to move in Cartesian space. The error is caused by inverse Kinematic calculation error, and the inverse calculation is in a different solution space from the previous cycle.

### Action
 Check whether the current robot path and orientation are reachable. If not, replace the initial orientation or path to reach the target position. If you confirm that there is no problem with the command path, please collect relevant data and contact JAKA technical service personnel.

## 0x0F0019 CAN device initialization failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 CAN device initialization failed

### Reason
 CAN device initialization failed.

### Action
 In the off-line emulation environment, no CAN device leads to reporting an error. In the actual machine environment, please restart the robot. Please contact JAKA technical service personnel if the error cannot be resolved.

## 0x0F001A One-click upgrade timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 One-click upgrade timeout

### Reason
 One-click upgrade takes too long

### Action
 Please check the network condition and equipment condition before operation.

## 0x0F001B One-click upgrade exception 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 One-click upgrade exception

### Reason
 One-click upgrade failed

### Action
 Please check the source and validity of the one-click upgrade package.

## 0x0F0020 Failed to move to target position by MoveL 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to move to target position by MoveL

### Reason
 Failed to move to target position by MoveL. Cartesian movement (MoveL or MoveJ) is through singularity, especially when the initial point or termination point is a singularity.

### Action
 The MoveL path point or the target point cannot reach or pass through the singularity. Manual operation to check whether the joint can be moved to the target point, if possible, consider changing the orientation of the robot to reach the target point from other paths or orientations.
Note: Because the program pointer will be ahead of the actual action pointer, this error may be triggered in advance, that is, it will be reported when the corresponding command is parsed but not yet executed. When dealing with this error, check whether subsequent commands in the program are reachable based on the current position.

## 0x0F0021 Unsupported robot model 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unsupported robot model

### Reason
 Unsupported robot model. Generally speaking, the latest controller will support all existing robot models, but connecting new models of robots to the old controller will cause this problem. When this error occurs, the robot's DH parameters, dynamics parameters and various restrictions may be wrong. So use caution.

### Action
 Check the robot ID on the APP information page and contact JAKA for the supported software version.

## 0x0F0022 Invalid robot ID 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid robot ID

### Reason
 Invalid robot ID. The controller supports specific robot models, and specific robot models have specific coding rules. The robot ID is got by the servo. If the ID does not meet the supported models and coding rules, an error will be reported.

### Action
 Check the robot ID on the APP, check the actual robot ID on the robot and check whether they are matched. Please contact JAKA technical personnel if they are matched.

## 0x0F0023 Invalid payload identification trajectory 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid payload identification trajectory

### Reason
 Internal system error

### Action
 Re-payload identification

## 0x0F0024 Decelerated percentage cannot be set in decelerated mode​ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Decelerated percentage cannot be set in decelerated mode​

### Reason
 Decelerated percentage cannot be set in decelerated mode​.

### Action
 Please check whether the robot is in decelerated mode, if so, please exit the decelerated mode, then set the decelerated percentage; if not, please confirm the software version and contact the JAKA technical personnel.

## 0x0F0025 The definition of payload identification trajectory does not meet standard 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The definition of payload identification trajectory does not meet standard

### Reason
 The definition of payload identification trajectory does not meet standard. Robot payload identification needs to meet certain constraints to ensure the accuracy of identification results. When the user input does not meet the requirements, the error will pop-out.

### Action
 Please follow the payload identification requirements pop-out by the APP to re-perform payload identification.

## 0x0F0026 Please disable before power off 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Please disable before power off

### Reason
 Please disable before power off

### Action
 Please disable before power off.

## 0x0F0027 Cannot disable the robot during program running 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Cannot disable the robot during program running

### Reason
 Cannot disable the robot during program running.

### Action
 Please stop the program before disabling the robot.

## 0x0F0028 Payload settings deviation 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Payload settings deviation. Please check it.

### Reason
 Payload settings deviation. Please check it. Robot will self-test the payload after enable the robot. If the deviation between the actual output torque and the feedforward torque of the robot exceeds a certain range, the error pop-outs and the robot is disabled.

### Action
 (1) Please check whether the payload and centroid settings are correct;
(2) Please check whether the robot model and ID are correct.

## 0x0F0029 MoveC command added failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 MoveC command added failure

### Reason
 Three-point of MoveC collinear or singularity 

### Action
 (1) Please check whether the starting point, middle point and end point of the MoveC coincide;
(2) Please check whether the starting point, middle point and end point of the MoveC are singularity;

## 0x0F0030 Joint speed limit is set to 0 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint speed limit is set to 0

### Reason
 Joint speed limit is 0

### Action
 Check whether the "joint speed limit" value in the APP safety setting interface has been set to 0 ° / s

## 0x0F0031 3-Position enable limit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 3-Position enable limit

### Reason
 Configure and turn on the three-position enable function in the safety settings.

### Action
 The three-position enable function has constraints on robot control. Please check the three-position switch status or select to turn off the three-position enable function according to the safety situation.

## 0x0F0032 Unable to track motion types except MoveL and MoveC 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unable to track motion types except MoveL and MoveC

### Reason
 Conveyor belt tracking can only track Cartesian spatial motion types, while movement types other than MoveL and MoveC are nested in the conveyor belt tracking command. 

### Action
 Please check whether the non-linear motion and other motion types of MoveC are nested in the conveyor belt  tracking command.

## 0x0F0038 MoveJ command added failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 MoveJ command added failure

### Reason
 MoveJ settings error

### Action
 Please check whether the current robot joint position and the target joint position are correct.

## 0x0F0039  
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 TCP calibration teaching point repeat

### Reason
 TCP calibration teaching point repeat

### Action
 Coincidence of two or more teaching points

## 0x0F003A The robot is not allowed to disable during movement 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The robot is not allowed to disable during movement

### Reason
 The robot is not allowed to disable during movement

### Action
 Please stop operating the robot before disabling the robot

## 0x0F003B The robot is powered on, no need to re-power on 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The robot is powered on, no need to re-power on

### Reason
 The robot is powered on, no need to re-power on

### Action
 The robot is powered on, no need to re-power on

## 0x0F003C The robot is enabled, no need to re-enable 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The robot is enabled, no need to re-enable

### Reason
 The robot is enabled, no need to re-enable

### Action
 The robot is enabled, no need to re-enable

## 0x0F003D The TCP coordinate system is calibrated when the teach-in points are on the same line 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The TCP coordinate system is calibrated when the teach-in points are on the same line

### Reason
 Teach-in points on the same straight line will result in the inability to calculate the pose of the TCP.

### Action
 Please reset the appropriate teaching point.

## 0x0F003E The calibration error of the TCP coordinate system exceeds a preset threshold 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The calibration error of the TCP coordinate system exceeds a preset threshold

### Reason
 The calibration error of the TCP coordinate system exceeds a preset threshold

### Action
 Please reset the appropriate teaching point.

## 0x0F003F The calibration coordinates of the TCP coordinate system are beyond the working space 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The calibration coordinates of the TCP coordinate system are beyond the working space

### Reason
 The calibration coordinates of the TCP coordinate system are beyond the working space

### Action
 Please reset the appropriate teaching point.

## 0x000030 The speed of joint 1 exceeds the limit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The speed of joint 1 exceeds the limit

### Reason
 The speed of joint 1 exceeds the limit. The speed of joint exceeds the limit.

### Action
 (1) Please confirm whether the speed limit of the robot has been modified and increased, and if so, contact the JAKA technician personnel;
(2) If it has not been modified but pop-out an error, please reduce the speed or acceleration limit; if it still pop-out, please export the corresponding diagnostic information and contact the JAKA technical personnel.

## 0x010030 The speed of joint 2 exceeds the limit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The speed of joint 2 exceeds the limit

### Reason
 The speed of joint 2 exceeds the limit The speed of joint exceeds the limit.

### Action
 (1) Please confirm whether the speed limit of the robot has been modified and increased, and if so, contact the JAKA technician personnel;
(2) If it has not been modified but pop-out an error, please reduce the speed or acceleration limit; if it still pop-out, please export the corresponding diagnostic information and contact the JAKA technical personnel.

## 0x020030 The speed of joint 3 exceeds the limit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The speed of joint 3 exceeds the limit

### Reason
 The speed of joint 3 exceeds the limit The speed of joint exceeds the limit.

### Action
 (1) Please confirm whether the speed limit of the robot has been modified and increased, and if so, contact the JAKA technician personnel;
(2) If it has not been modified but pop-out an error, please reduce the speed or acceleration limit; if it still pop-out, please export the corresponding diagnostic information and contact the JAKA technical personnel.

## 0x030030 The speed of joint 4 exceeds the limit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The speed of joint 4 exceeds the limit

### Reason
 The speed of joint 4 exceeds the limit The speed of joint exceeds the limit.

### Action
 (1) Please confirm whether the speed limit of the robot has been modified and increased, and if so, contact the JAKA technician personnel;
(2) If it has not been modified but pop-out an error, please reduce the speed or acceleration limit; if it still pop-out, please export the corresponding diagnostic information and contact the JAKA technical personnel.

## 0x040030 The speed of joint 5 exceeds the limit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The speed of joint 5 exceeds the limit

### Reason
 The speed of joint 5 exceeds the limit The speed of joint exceeds the limit.

### Action
 (1) Please confirm whether the speed limit of the robot has been modified and increased, and if so, contact the JAKA technician personnel;
(2) If it has not been modified but pop-out an error, please reduce the speed or acceleration limit; if it still pop-out, please export the corresponding diagnostic information and contact the JAKA technical personnel.

## 0x050030 The speed of joint 6 exceeds the limit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The speed of joint 6 exceeds the limit

### Reason
 The speed of joint 6 exceeds the limit The speed of joint exceeds the limit.

### Action
 (1) Please confirm whether the speed limit of the robot has been modified and increased, and if so, contact the JAKA technician personnel;
(2) If it has not been modified but pop-out an error, please reduce the speed or acceleration limit; if it still pop-out, please export the corresponding diagnostic information and contact the JAKA technical personnel.

## 0x000031 Joint 1 reaches the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 reaches the positive soft limit

### Reason
 Trigger robot limits during robot movement

### Action
 Please check if the corresponding joint angle value of the robot has reached the limit. If so, please modify the movement path.

## 0x010031 Joint 2 reaches the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 reaches the positive soft limit

### Reason
 Trigger robot limits during robot movement

### Action
 Please check if the corresponding joint angle value of the robot has reached the limit. If so, please modify the movement path.

## 0x020031 Joint 3 reaches the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 reaches the positive soft limit

### Reason
 Trigger robot limits during robot movement

### Action
 Please check if the corresponding joint angle value of the robot has reached the limit. If so, please modify the movement path.

## 0x030031 Joint 4 reaches the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 reaches the positive soft limit

### Reason
 Trigger robot limits during robot movement

### Action
 Please check if the corresponding joint angle value of the robot has reached the limit. If so, please modify the movement path.

## 0x040031 Joint 5 reaches the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 reaches the positive soft limit

### Reason
 Trigger robot limits during robot movement

### Action
 Please check if the corresponding joint angle value of the robot has reached the limit. If so, please modify the movement path.

## 0x050031 Joint 6 reaches the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 reaches the positive soft limit

### Reason
 Trigger robot limits during robot movement

### Action
 Please check if the corresponding joint angle value of the robot has reached the limit. If so, please modify the movement path.

## 0x000032 Joint 1 reaches the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 reaches the negative soft limit

### Reason
 Trigger robot limits during robot movement

### Action
 Please check if the corresponding joint angle value of the robot has reached the limit. If so, please modify the movement path.

## 0x010032 Joint 2 reaches the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 reaches the negative soft limit

### Reason
 Trigger robot limits during robot movement

### Action
 Please check if the corresponding joint angle value of the robot has reached the limit. If so, please modify the movement path.

## 0x020032 Joint 3 reaches the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 reaches the negative soft limit

### Reason
 Trigger robot limits during robot movement

### Action
 Please check if the corresponding joint angle value of the robot has reached the limit. If so, please modify the movement path.

## 0x030032 Joint 4 reaches the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 reaches the negative soft limit

### Reason
 Trigger robot limits during robot movement

### Action
 Please check if the corresponding joint angle value of the robot has reached the limit. If so, please modify the movement path.

## 0x040032 Joint 5 reaches the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 reaches the negative soft limit

### Reason
 Trigger robot limits during robot movement

### Action
 Please check if the corresponding joint angle value of the robot has reached the limit. If so, please modify the movement path.

## 0x050032 Joint 6 reaches the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 reaches the negative soft limit

### Reason
 Trigger robot limits during robot movement

### Action
 Please check if the corresponding joint angle value of the robot has reached the limit. If so, please modify the movement path.

## 0x000033 Joint 1 is about to hit the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 is about to hit the positive soft limit

### Reason
 The robot is near the positive soft limits. The joint 1 position limit will be triggered if the robot continues to run.

### Action
 Please check if the target joint position reaches the joint 1 position limit. If so, please modify the movement path.

## 0x010033 Joint 2 is about to hit the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 is about to hit the positive soft limit

### Reason
 The robot is near the positive soft limits. The joint 2 position limit will be triggered if the robot continues to run.

### Action
 Please check if the target joint position reaches the joint 2 position limit. If so, please modify the movement path.

## 0x020033 Joint 3 is about to hit the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 is about to hit the positive soft limit

### Reason
 The robot is near the positive soft limits. The joint 3 position limit will be triggered if the robot continues to run.

### Action
 Please check if the target joint position reaches the joint 3 position limit. If so, please modify the movement path.

## 0x030033 Joint 4 is about to hit the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 is about to hit the positive soft limit

### Reason
 The robot is near the positive soft limits. The joint 4 position limit will be triggered if the robot continues to run.

### Action
 Please check if the target joint position reaches the joint 4 position limit. If so, please modify the movement path.

## 0x040033 Joint 5 is about to hit the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 is about to hit the positive soft limit

### Reason
 The robot is near the positive soft limits. The joint 5 position limit will be triggered if the robot continues to run.

### Action
 Please check if the target joint position reaches the joint 5 position limit. If so, please modify the movement path.

## 0x050033 Joint 6 is about to hit the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 is about to hit the positive soft limit

### Reason
 The robot is near the positive soft limits. The joint 6 position limit will be triggered if the robot continues to run.

### Action
 Please check if the target joint position reaches the joint 6 position limit. If so, please modify the movement path.

## 0x000034 Joint 1 is about to hit the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 is about to hit the negative soft limit

### Reason
 The robot is near the positive soft limits. The joint 1 position limit will be triggered if the robot continues to run.

### Action
 Please check if the target joint position reaches the joint 1 position limit. If so, please modify the robot move path.

## 0x010034 Joint 2 is about to hit the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 is about to hit the negative soft limit

### Reason
 The robot is near the positive soft limits. The joint 2 position limit will be triggered if the robot continues to run.

### Action
 Please check if the target joint position reaches the joint 2 position limit. If so, please modify the robot move path.

## 0x020034 Joint 3 is about to hit the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 is about to hit the negative soft limit

### Reason
 The robot is near the positive soft limits. The joint 3 position limit will be triggered if the robot continues to run.

### Action
 Please check if the target joint position reaches the joint 3 position limit. If so, please modify the robot move path.

## 0x030034 Joint 4 is about to hit the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 is about to hit the negative soft limit

### Reason
 The robot is near the positive soft limits. The joint 4 position limit will be triggered if the robot continues to run.

### Action
 Please check if the target joint position reaches the joint 4 position limit. If so, please modify the robot move path.

## 0x040034 Joint 5 is about to hit the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 is about to hit the negative soft limit

### Reason
 The robot is near the positive soft limits. The joint 5 position limit will be triggered if the robot continues to run.

### Action
 Please check if the target joint position reaches the joint 5 position limit. If so, please modify the robot move path.

## 0x050034 Joint 6 is about to hit the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 is about to hit the negative soft limit

### Reason
 The robot is near the positive soft limits. The joint 6 position limit will be triggered if the robot continues to run.

### Action
 Please check if the target joint position reaches the joint 6 position limit. If so, please modify the robot move path.

## 0x0F0033 Reach the singularity 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Reach the singularity

### Reason
 The robot is about to reach the singularity and cannot continue to move in Cartesian space. Abnormal inverse Kinematics during movement When there is external tracking or compensation, such as compliance control or conveyor belt tracking, the error may also be caused by an abnormal external input.

### Action
 (1) Check whether the current robot path and orientation are reachable, if not, change the initial orientation or path to reach the target position or change the orientation of the target point;
(2) If you are currently in force control compliance control, please check whether there is an abnormal external force to eliminate the influence;
(3) If you are currently in the conveyor belt tracking state, please check the conveyor belt speed and whether the encoder feedback is normal. Large fluctuations will cause this problem.

## 0x0F0034 Collision detected 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Collision detected

### Reason
 Collision detected System detects the collision.

### Action
 (1) Check whether there is barrier around the robot and whether the collision happened;
(2) Check whether the ID and model of the robot are consistent with the actual;
(3) Check whether the robot payload and installation angle settings are correct.

## 0x0F0035 Orientation limit exceeded 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Orientation limit exceeded

### Reason
 Detecting orientation limit exceeded. The end of the robot exceeds the tool limit.

### Action
 Check whether the current robot motion trajectory is within the tool limit settings, or try to modify the range of tool limit.

## 0x0F0036 End of tool exceeds the limit of maximum position deviation 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 End of tool exceeds the limit of maximum position deviation

### Reason
 The deviation between the actual position of the robot tool end and the command position exceeds the set deviation limit value

### Action
 

## 0x0F0037 Linear velocity of tool end exceeds the limit of maximum velocity 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Linear velocity of tool end exceeds the limit of maximum velocity

### Reason
 The linear velocity of the end of the robot exceeds the set maximum linear velocity limit value of the end during MoveJ.

### Action
 Please check whether the TCP velocity is correct on “Safety Settings”---“Collision Protection” interface. If correct, please reduce the velocity and acceleration of the MoveJ.

## 0x000035 JOG target position exceeds positive soft limit of joint 1 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 JOG target position exceeds positive soft limit of joint 1

### Reason
 The target point of the movement exceeds the limit value set by the robot joint during JOG the robot.

### Action
 (1) Please check whether the joint limit in the robot safety settings has been modified. 
(2) Please check whether the target point is correct. If not, please modify the target point position.

## 0x010035 JOG target position exceeds positive soft limit of joint 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 JOG target position exceeds positive soft limit of joint 2

### Reason
 The target point of the movement exceeds the limit value set by the robot joint during JOG the robot.

### Action
 (1) Please check whether the joint limit in the robot safety settings has been modified. 
(2) Please check whether the target point is correct. If not, please modify the target point position.

## 0x020035 JOG target position exceeds positive soft limit of joint 3 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 JOG target position exceeds positive soft limit of joint 3

### Reason
 The target point of the movement exceeds the limit value set by the robot joint during JOG the robot.

### Action
 (1) Please check whether the joint limit in the robot safety settings has been modified. 
(2) Please check whether the target point is correct. If not, please modify the target point position.

## 0x030035 JOG target position exceeds positive soft limit of joint 4 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 JOG target position exceeds positive soft limit of joint 4

### Reason
 The target point of the movement exceeds the limit value set by the robot joint during JOG the robot.

### Action
 (1) Please check whether the joint limit in the robot safety settings has been modified. 
(2) Please check whether the target point is correct. If not, please modify the target point position.

## 0x040035 JOG target position exceeds positive soft limit of joint 5 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 JOG target position exceeds positive soft limit of joint 5

### Reason
 The target point of the movement exceeds the limit value set by the robot joint during JOG the robot.

### Action
 (1) Please check whether the joint limit in the robot safety settings has been modified. 
(2) Please check whether the target point is correct. If not, please modify the target point position.

## 0x050035 JOG target position exceeds positive soft limit of joint 6 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 JOG target position exceeds positive soft limit of joint 6

### Reason
 The target point of the movement exceeds the limit value set by the robot joint during JOG the robot.

### Action
 (1) Please check whether the joint limit in the robot safety settings has been modified. 
(2) Please check whether the target point is correct. If not, please modify the target point position.

## 0x000036 JOG target position exceeds negative soft limit of joint 1 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 JOG target position exceeds negative soft limit of joint 1

### Reason
 The target point of the movement exceeds the limit value set by the robot joint during JOG the robot.

### Action
 (1) Please check whether the joint limit in the robot safety settings has been modified. 
(2) Please check whether the target point is correct. If not, please modify the target point position.

## 0x010036 JOG target position exceeds negative soft limit of joint 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 JOG target position exceeds negative soft limit of joint 2

### Reason
 The target point of the movement exceeds the limit value set by the robot joint during JOG the robot.

### Action
 (1) Please check whether the joint limit in the robot safety settings has been modified. 
(2) Please check whether the target point is correct. If not, please modify the target point position.

## 0x020036 JOG target position exceeds negative soft limit of joint 3 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 JOG target position exceeds negative soft limit of joint 3

### Reason
 The target point of the movement exceeds the limit value set by the robot joint during JOG the robot.

### Action
 (1) Please check whether the joint limit in the robot safety settings has been modified. 
(2) Please check whether the target point is correct. If not, please modify the target point position.

## 0x030036 JOG target position exceeds negative soft limit of joint 4 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 JOG target position exceeds negative soft limit of joint 4

### Reason
 The target point of the movement exceeds the limit value set by the robot joint during JOG the robot.

### Action
 (1) Please check whether the joint limit in the robot safety settings has been modified. 
(2) Please check whether the target point is correct. If not, please modify the target point position.

## 0x040036 JOG target position exceeds negative soft limit of joint 5 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 JOG target position exceeds negative soft limit of joint 5

### Reason
 The target point of the movement exceeds the limit value set by the robot joint during JOG the robot.

### Action
 (1) Please check whether the joint limit in the robot safety settings has been modified. 
(2) Please check whether the target point is correct. If not, please modify the target point position.

## 0x050036 JOG target position exceeds negative soft limit of joint 6 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 JOG target position exceeds negative soft limit of joint 6

### Reason
 The target point of the movement exceeds the limit value set by the robot joint during JOG the robot.

### Action
 (1) Please check whether the joint limit in the robot safety settings has been modified.
(2) Please check whether the target point is correct. If not, please modify the target point position.

## 0x000037 Excessive acceleration of joint 1 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Excessive acceleration of joint 1

### Reason
 When manually controlled (JOG) robots move in Cartesian space, it causes excessive acceleration of joint 1.

### Action
 1) Please move the robot joints away from the error position before attempting Cartesian space JOG.

## 0x010037 Excessive acceleration of joint 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Excessive acceleration of joint 2

### Reason
 When manually controlled (JOG) robots move in Cartesian space, it causes excessive acceleration of joint 2.

### Action
 1) Please move the robot joints away from the error position before attempting Cartesian space JOG.

## 0x020037 Excessive acceleration of joint 3 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Excessive acceleration of joint 3

### Reason
 When manually controlled (JOG) robots move in Cartesian space, it causes excessive acceleration of joint 3.

### Action
 1) Please move the robot joints away from the error position before attempting Cartesian space JOG.

## 0x030037 Excessive acceleration of joint 4 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Excessive acceleration of joint 4

### Reason
 When manually controlled (JOG) robots move in Cartesian space, it causes excessive acceleration of joint 4.

### Action
 1) Please move the robot joints away from the error position before attempting Cartesian space JOG.

## 0x040037 Excessive acceleration of joint 5 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Excessive acceleration of joint 5

### Reason
 When manually controlled (JOG) robots move in Cartesian space, it causes excessive acceleration of joint 5.

### Action
 1) Please move the robot joints away from the error position before attempting Cartesian space JOG.

## 0x050037 Excessive acceleration of joint 5 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Excessive acceleration of joint 5

### Reason
 When manually controlled (JOG) robots move in Cartesian space, it causes excessive acceleration of joint 6.

### Action
 1) Please move the robot joints away from the error position before attempting Cartesian space JOG.

## 0x0F0049 Unable to enter drag mode in sim mode 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unable to enter drag mode in sim mode

### Reason
 It is not possible to enter the dragging mode in sim mode

### Action
 Check the robot running mode, exit the simulation and enter drag mode

## 0x0F0040 Cannot enter drag-and-drop mode when the robot reaches soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Cannot enter drag-and-drop mode when the robot reaches soft limit

### Reason
 Cannot enter drag-and-drop mode when the robot reaches soft limit.

### Action
 Check whether the current robot joint has reached the joint limit. If it has arrived, it cannot continue to move towards the limit direction, but can only move towards the opposite direction. Please JOG the joint exceeding the limit back into the joint limit range on the teaching page, or modify the limit on the setting page.

## 0x0F0041 Drag exceeds the soft limit and exit the drag-and-drop mode 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Drag exceeds the soft limit and exit the drag-and-drop mode

### Reason
 Drag exceeds the soft limit and exit the drag-and-drop mode. Drag exceeds the limit.

### Action
 Check whether the current robot joint has reached the joint limit. If it has arrived, it cannot continue to move towards the limit direction, but can only move towards the opposite direction. Drag the robot back into the joint limit range, or exit the drag mode, modify the soft limit on the setting page, and increase the soft limit range of the joint, but the soft limit setting range cannot exceed the hard limit.

## 0x0F0042 Force control parameter setting failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Flexible parameters settings failure

### Reason
 Unable to set flexible parameters with force control on

### Action
 Please check whether force control is on. Please check whether the flexible parameter setting is used in the program to ensure that the force control is turned off before it is executed.

## 0x000042 Joint 1 will reach the soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 will reach the soft limit

### Reason
 Joint 1 will reach the soft limit

### Action
 Check whether the current robot joint has reached the joint limit. If it has arrived, it cannot continue to move towards the limit direction, but can only move towards the opposite direction. Drag the robot back into the joint limit range, or modify the soft limit on the setting page, and increase the soft limit range of the joint, but the soft limit setting range cannot exceed the hard limit.

## 0x010042 Joint 2 will reach the soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 will reach the soft limit

### Reason
 Joint 2 will reach the soft limit

### Action
 Check whether the current robot joint has reached the joint limit. If it has arrived, it cannot continue to move towards the limit direction, but can only move towards the opposite direction. Drag the robot back into the joint limit range, or modify the soft limit on the setting page, and increase the soft limit range of the joint, but the soft limit setting range cannot exceed the hard limit.

## 0x020042 Joint 3 will reach the soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 will reach the soft limit

### Reason
 Joint 3 will reach the soft limit

### Action
 Check whether the current robot joint has reached the joint limit. If it has arrived, it cannot continue to move towards the limit direction, but can only move towards the opposite direction. Drag the robot back into the joint limit range, or modify the soft limit on the setting page, and increase the soft limit range of the joint, but the soft limit setting range cannot exceed the hard limit.

## 0x030042 Joint 4 will reach the soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 will reach the soft limit

### Reason
 Joint 4 will reach the soft limit

### Action
 Check whether the current robot joint has reached the joint limit. If it has arrived, it cannot continue to move towards the limit direction, but can only move towards the opposite direction. Drag the robot back into the joint limit range, or modify the soft limit on the setting page, and increase the soft limit range of the joint, but the soft limit setting range cannot exceed the hard limit.

## 0x040042 Joint 4 will reach the soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 will reach the soft limit

### Reason
 Joint 4 will reach the soft limit

### Action
 Check whether the current robot joint has reached the joint limit. If it has arrived, it cannot continue to move towards the limit direction, but can only move towards the opposite direction. Drag the robot back into the joint limit range, or modify the soft limit on the setting page, and increase the soft limit range of the joint, but the soft limit setting range cannot exceed the hard limit.

## 0x050042 Joint 6 will reach the soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 will reach the soft limit

### Reason
 Joint 6 will reach the soft limit

### Action
 Check whether the current robot joint has reached the joint limit. If it has arrived, it cannot continue to move towards the limit direction, but can only move towards the opposite direction. Drag the robot back into the joint limit range, or modify the soft limit on the setting page, and increase the soft limit range of the joint, but the soft limit setting range cannot exceed the hard limit.

## 0x0F0043 Robot is disabled and cannot drag 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot is disabled and cannot drag

### Reason
 Robot is disabled and cannot drag. The drag-and-drop command is triggered when the robot is disabled

### Action
 Please check whether the robot is powered on and enabled, or whether press the drag-and-drop button by mistake.

## 0x0F0044 Robot is moving and cannot drag 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot is moving and cannot drag

### Reason
 Robot is moving and cannot drag. Drag-and-drop mode requires the robot to be in manual mode and in stationary state.

### Action
 If the robot is running a program, stop the current program first and then enter the drag-and-drop mode. If the robot is moving manually, stop and try again.

## 0x0F0045 The joint torque exceeds the limit and cannot enter the drag-and-drop mode 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The joint torque exceeds the limit and cannot enter the drag-and-drop mode

### Reason
 The joint torque exceeds the limit and cannot enter the drag-and-drop mode. Drag too fast or collision detection too sensitive.

### Action
 Reduce drag speed or increase the collision level in the setting interface.

## 0x0F0046 The drag-and-drop button is disabled and cannot enter drag-and-drop mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The drag-and-drop button is disabled and cannot enter drag-and-drop mode

### Reason
 The robot drag-and-drop button (FREE) function is disabled, and the drag-and-drop button (FREE) cannot be used for drag-and-drop operations.

### Action
 Please check whether the drag and drop function is disabled in the “Hardware & Communication” ---- “Auxiliary Hardware Settings”. If it is disabled, please enable the function.

## 0x0F0047 Program pause/resume button disabled 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Program pause/resume button disabled

### Reason
 The robot program pause/resume function is disabled, and the program pause/resume button cannot be used.

### Action
 Please check whether the program pause/resume function is disabled in the “Hardware & Communication” ---- “Auxiliary Hardware Settings”. If it is disabled, please enable the function.

## 0x0F0048 POINT button is disabled and cannot record the points 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 POINT button is disabled and cannot record the points

### Reason
 The robot teaching function is disabled, and the POINT button cannot be used for teaching.

### Action
 Please check whether the point recording function is disabled in the “Hardware & Communication” ---- “Auxiliary Hardware Settings”. If it is disabled, please enable the function.

## 0x0F0050 Torque sensor not turned on 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Torque sensor not turned on.

### Reason
 Torque sensor not turned on. The torque sensor is not turned on when the admittance control or flexible control is turned on.

### Action
 Please check whether force control is on.

## 0x0F0051 The torque sensor mode cannot be switched in force-controlled drag-and-drop mode. 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The torque sensor mode cannot be switched in force-controlled drag-and-drop mode.

### Reason
 After turning on the force control drag, the torque sensor cannot be turned off directly.

### Action
 If the sensor needs to be turn off, please exit the force control drag first, and then turn off it.

## 0x0F0052 Torque sensor failure during force-controlled dragging 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Torque sensor failure during force-controlled dragging

### Reason
 Torque sensor failure during force-controlled dragging. Communication between controller and external torque sensor disconnected.

### Action
 Please check whether the torque sensor communication status is normal, including hardware cable connection and software configuration.

## 0x0F0054 Unable to perform single-step debugging while the program is running 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Unable to perform single-step debugging while the program is running

### Reason
 Unable to perform single-step debugging while the program is running.

### Action
 Stop running the program first, and then perform single-step debugging.

## 0x0F0055 Collision sensitivity cannot be set during dragging 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Collision sensitivity cannot be set during dragging

### Reason
 Collision sensitivity cannot be set during dragging.

### Action
 Exit drag-and-drop mode first, and then perform sensitivity.

## 0x0F0056 Expansion IO module not running 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Expansion IO module not running and unable to access.

### Reason
 Expansion IO module not running and unable to access.

### Action
 Check whether the expansion IO module is running in the IO monitoring interface.

## 0x0F0057 Unable to set dynamics feedforward 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The robot cannot enable or turn off dynamics feedforward when moving.

### Reason
 The robot cannot enable or turn off dynamics feedforward when moving. This error will only pop-up when using the secondary development interface.

### Action
 Stop the movement of the robot first, and then set the dynamics feedforward of the robot.

## 0x0F0058 No feature license detected 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 No feature license detected

### Reason
 No feature license detected. Enabling some functions requires software authorization. If the software is not authorized during the use of the function, the error will pops up.

### Action
 Contact JAKA staff to purchase a license to use the function.

## 0x0F0059 Protective stop reset failed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Protective stop reset failed

### Reason
 Protective stop reset failed. The protective stop function input is still triggered when the protective stop reset operation is performed.

### Action
 Please check whether the function IO triggers the protective stop, if so, please exit the protective stop mode first and then perform the protective stop reset operation.

## 0x0F0060 Decelerated percentage cannot be set in protective stop mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Decelerated percentage cannot be set in protective stop mode

### Reason
 Decelerated percentage cannot be set in protective stop mode.

### Action
 Exit the protective stop mode first, and then set the decelerated percentage of the robot.

## 0x0F0061 User coordinate system calibration failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 User coordinate system calibration failed

### Reason
 The selected calibration point is not suitable, resulting in the failure of user coordinate system calibration.

### Action
 Please reset the appropriate teaching point.

## 0x000061 Joint 1 detects collision and the robot stops move 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 1 detects collision and the robot stops move 

### Reason
 Joint 1 detects collision and the robot stops move

### Action
 (1)  Check the site environment to see if a collision has happened. If yes, please optimize the program; 
(2) If not, please check the settings of payload and mounting angles; 
(3) Manually move the error-reporting joint to check whether there is internal jamming of the corresponding joint.

## 0x010061 Joint 2 detects collision and the robot stops move 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 2 detects collision and the robot stops move

### Reason
 Joint 2 detects collision and the robot stops move

### Action
 (1)  Check the site environment to see if a collision has happened. If yes, please optimize the program; 
(2) If not, please check the settings of payload and mounting angles; 
(3) Manually move the error-reporting joint to check whether there is internal jamming of the corresponding joint.

## 0x020061 Joint 3 detects collision and the robot stops move 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 3 detects collision and the robot stops move

### Reason
 Joint 3 detects collision and the robot stops move

### Action
 (1)  Check the site environment to see if a collision has happened. If yes, please optimize the program; 
(2) If not, please check the settings of payload and mounting angles; 
(3) Manually move the error-reporting joint to check whether there is internal jamming of the corresponding joint.

## 0x030061 Joint 4 detects collision and the robot stops move 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 4 detects collision and the robot stops move

### Reason
 Joint 4 detects collision and the robot stops move

### Action
 (1)  Check the site environment to see if a collision has happened. If yes, please optimize the program; 
(2) If not, please check the settings of payload and mounting angles; 
(3) Manually move the error-reporting joint to check whether there is internal jamming of the corresponding joint.

## 0x040061 Joint 5 detects collision and the robot stops move 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 5 detects collision and the robot stops move

### Reason
 Joint 5 detects collision and the robot stops move

### Action
 (1)  Check the site environment to see if a collision has happened. If yes, please optimize the program; 
(2) If not, please check the settings of payload and mounting angles; 
(3) Manually move the error-reporting joint to check whether there is internal jamming of the corresponding joint.

## 0x050061 Joint 6 detects collision and the robot stops move 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 6 detects collision and the robot stops move

### Reason
 Joint 6 detects collision and the robot stops move

### Action
 (1)  Check the site environment to see if a collision has happened. If yes, please optimize the program; 
(2) If not, please check the settings of payload and mounting angles; 
(3) Manually move the error-reporting joint to check whether there is internal jamming of the corresponding joint.

## 0x0F0062 TIO RS485 channel torque sensor mode not enabled  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 TIO RS485 channel torque sensor mode not enabled

### Reason
  TIO RS485 channel torque sensor mode not enabled. Pin multiplexing configuration exception is detected when TIO+ torque sensor is enabled. 

### Action
 When sensor type VI is selected in the torque sensor settings, enabling the torque sensor at this time will detect if the TIO has a channel that is properly set to torque sensor mode. If the above information is not set correctly, please check the relevant configuration.

## 0x0F0063 Supports up to one TIO RS485 channel enabled as torque sensor mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Supports up to one TIO RS485 channel enabled as torque sensor mode

### Reason
 Supports up to one TIO RS485 channel enabled as torque sensor mode. Due to CAN channel bandwidth limitations, only up to 1 of the two TIO+RS485 channels can be used as a torque sensor. 

### Action
 To modify the channel configuration for the torque sensor, change the mode of the RS485 channel that is currently set to the torque sensor mode before proceeding.

## 0x0F0064 Communication parameter modification failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Modification of communication parameters failed, the torque sensor using this channel is running. 

### Reason
 Modification of TIO RS485 communication parameters failed, the torque sensor using this channel is running. 

### Action
 It is forbidden to modify the communication parameters of the torque sensor while it is in operation. Please stop the operation first, and then perform the communication parameter modification operation. 

## 0x0F0065 Invalid semaphore definition 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Invalid semaphore definition

### Reason
 Invalid semaphore definition. The status of the end gripper is searched through the semaphore, and the definition of the semaphore needs to meet certain requirements, including name, function code, address, etc. This error pops up when the definition requirement is not met. 

### Action
 Please check whether the current TIO RS485 channel ID is correct, whether the specified channel model is Modbus RTU, and whether the function codes are supported (only 01, 02, 03, 04 are supported).

## 0x0F0066 Semaphore exceeds the maximum 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Semaphore exceeds the maximum（8）

### Reason
 Supports up to 8 semaphores, limited by bandwidth. 

### Action
 Please remove unnecessary semaphore definitions.

## 0x0F0067 Specified semaphore does not exist 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Specified semaphore does not exist

### Reason
 Specified semaphore does not exist. The semaphore that does not exist is referenced in the program. 

### Action
 Check the program calling the semaphore and the semaphore definition for references to undefined semaphores. 

## 0x0F0068 Failed to send TIO RS485 command  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Failed to send TIO RS485 command. The command queue is full. 

### Reason
 Failed to send TIO RS485 command. High frequency semaphore calling or command sending. 

### Action
 The TIO+ related query and setup commands are buffered due to the limited CAN communication bandwidth. If the refresh rate is higher than this bandwidth, this error will be popped up. Reduce the command calling frequency of the program. 

## 0x0F0069 TIO RS485 command reception timeout   
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 TIO RS485 command reception timeout

### Reason
 TIO RS485 command reception timeout. Waiting for feedback timeout after controller sends RS485 command. 

### Action
 Please check whether the TIO + related communication settings are correct

## 0x0F0070 Robot DH parameter retrieving exception 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot DH parameter retrieving exception

### Reason
 Retrieving servo DH parameter CRC error during power on. 

### Action
 Please power on again, if it cannot be solved or appears frequently, please upgrade the servo. 

## 0x0F0071 Robot dynamics parameter retrieving exception 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot dynamics parameter retrieving exception

### Reason
 Retrieving servo dynamics parameter CRC error during power on. 

### Action
 Please power on again, if it cannot be solved or appears frequently, please upgrade the servo.

## 0x0F0072 Servo parameter reading exception, enable failure 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Retrieving DH or dynamics parameters from the servo and cannot enable the robot.

### Reason
 Retrieving DH or dynamics parameters from the servo and cannot enable the robot. If enabling the robot immediately after powering on it, the DH parameters cannot be read and the error will pop up. 

### Action
  If the error still pops up, contact the JAKA technician. 

## 0x0F0073 Reaching the robot momentum limit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Reaching the robot momentum limit

### Reason
 Reaching the robot momentum limit. The robot momentum limit can be set on the safety settings page, and the error will pop up when reach the limit. 

### Action
 This error is a warning and does not need to be handled. When the robot's momentum is greater than the user's set threshold, the robot will automatically decelerate.

## 0x0F0074 Reaching the robot TCP speed limit   
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Reaching the robot TCP speed limit

### Reason
 Reaching the robot TCP speed limit. The robot TCP speed limit can be set on the safety settings page, and the error will pop up when reach the limit. 

### Action
 This error is a warning and does not need to be handled. You can check if the TCP speed limit is set in the collision protection page. 

## 0x0F0075 About to exceed the safety plane 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 About to exceed the safety plane

### Reason
 About to exceed the safety plane, the robot can only work within the set safety plane. 

### Action
 Please confirm whether the safety plane settings is in line with the actual situation; during investigation, the you can turn off the safety plane or the make robot move towards the inner side of safety plane. 

## 0x0F0076 Invalid servo DH parameter version No.  
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid servo DH parameter version No.

### Reason
 Robot kinematics parameter version incompatible with controller

### Action
 Upgrade the servo or downgrade the controller

## 0x0F0077 Invalid servo dynamics parameter version No. 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid servo dynamics parameter version No.

### Reason
 Robot dynamics parameter version incompatible with controller

### Action
 Upgrade the servo or downgrade the controller

## 0x0F0078 Too frequent servo enable operation 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Too frequent servo enable operation

### Reason
 Continuous click on the enable button on the APP homepage

### Action
 After pressing the enable button on the APP homepage, observe whether the annular light at the end of the robot turns from blue to green after 1 second, accompanied by the clack of releasing the brake. 

## 0x0F0079 Unable to switch emulation / real machine mode, please power off  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Unable to switch emulation / real machine mode, please power off

### Reason
 When the robot is in the power-on and enabled state, use APP to switch the robot emulation / real machine mode, and the error will pop out. 

### Action
 Please switch the emulation / real machine mode after power off and disable the robot. 

## 0x0F007A Unable to set the IP of two network ports in the same network segment 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Unable to set the IP of two network ports in the same network segment

### Reason
 The IP address is set to the 10.5.5.X network segment, which conflicts with the controller's own IP address network segment. 

### Action
 The IP address cannot be 10.5.5.X network segment. Modified to the IP address of the bottom network port of the standard control cabinet and the LAN2 port of MinCab, which is static IP address. Network configuration reference setting format: IP: 192.168.10.120 Submask: 255.255.255.0 Default gateway: 192.168.10.1

## 0x0F007B About to exceed the safety orientation limit   
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 About to exceed the safety orientation limit  

### Reason
 Approaching the robot singularity or the maximum working radius of the robot

### Action
 When controlling the robot movement, avoid the singularity orientations and keep the robot moving within its maximum working radius. 

## 0x0F007C Unable to switch emulation/real machine mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Unable to switch emulation/real machine mode

### Reason
 Virtual machine does not support this feature

### Action
 Virtual machine does not support this feature

## 0x0F0080 The robot model cannot be switched when the robot is powered on 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The robot model cannot be switched when the robot is powered on

### Reason
 When the robot is powered on, use APP to switch the robot emulation / real machine mode to change the robot model, which will cause the error.

### Action
 Please switch the robot model after power off and disable the robot.

## 0x0F0081 Resetting the password is not allowed during robot movement 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Resetting the password is not allowed during robot movement

### Reason
 When the robot is in the running state of the program, and modify the user permission password, which will pop out the error.

### Action
 Modify the user permission password after stop the robot. 

## 0x0F0082 Please check whether the password reset button works.  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Please check whether the password reset button works.

### Reason
 The password reset button doesn’t work. 

### Action
 Please check whether the password reset button works or contact with JAKA technicians. 

## 0x0F0083 Joint deceleration failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint deceleration failed

### Reason
 Unable to automatically reduce the current moving joint speed below the speed limit. 

### Action
 Please increase the limit speed in the safety settings or reduce the command speed. 

## 0x0F0084 Circular conveyor belts P1, P2, P3 three point collinearity 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Circular conveyor belts P1, P2, P3 three point collinearity

### Reason
 

### Action
 

## 0x0F0085 The tracking direction of the linear conveyor belt is zero 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The tracking direction of the linear conveyor belt is zero

### Reason
  

### Action
  

## 0x0F0086 Get identification result failed. 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Get identification result failed.

### Reason
 Identification file may lost, please try again

### Action
 

## 0x0F0087 Failed to find optimal results  
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to find optimal results 

### Reason
 Failed to find optimal results when planning with time optimal planner

### Action
 Try with a lower command velocity or change the type of planner

## 0x0F0100 Robot power over limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot power over limit

### Reason
 The setting power is less than the power required by the robot movement. 

### Action
 JAKA payload 3KG model reference value is 1000, payload 5KG\ 7KG reference value is 1500, payload 12KG reference value is 2000, payload 18KG reference value is 2000. 

## 0x0F0101 Robot momentum over limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot momentum over limit

### Reason
 The setting momentum is less than the momentum required by the robot movement.

### Action
 JAKA payload 3KG model reference value is 5, payload 5KG\ 7KG reference value is 10, payload 12KG reference value is 30, payload 18KG reference value is 50.

## 0x0F0102 The base sensor detects the collision 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The base sensor detects the collision

### Reason
 When the robot is in the enable state, the base sensor signal increases abnormally, exceeds the set threshold, and pop out the error.

### Action
 (1) Check whether the robot collides with the peripherals. 
(2) Check if the robot is being pulled by cables during movement.
(3) Reduce the acceleration of the robot appropriately.
(4) Check whether the robot’s payload is consistent with the actual payload.
(5) Try to increase the collision level of the robot.

## 0x0F0103 End force exceeds the limit, collision detected in joint 1 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 End force exceeds the limit, collision detected in joint 1

### Reason
 When the joint is running the program, the joint current suddenly increases beyond the set threshold, the error pops up.

### Action
 (1) Check whether the robot collides with the peripherals. 
(2) Check if the robot is being pulled by cables during movement.
(3) Reduce the acceleration of the robot appropriately.
(4) Check whether the robot’s payload is consistent with the actual payload.
(5) Try to increase the collision level of the robot.

## 0x0F0104 End force exceeds the limit, collision detected in joint 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 End force exceeds the limit, collision detected in joint 2

### Reason
 When the joint is running the program, the joint current suddenly increases beyond the set threshold, the error pops up.

### Action
 (1) Check whether the robot collides with the peripherals. 
(2) Check if the robot is being pulled by cables during movement.
(3) Reduce the acceleration of the robot appropriately.
(4) Check whether the robot’s payload is consistent with the actual payload.
(5) Try to increase the collision level of the robot.

## 0x0F0105 End force exceeds the limit, collision detected in joint 3 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 End force exceeds the limit, collision detected in joint 3

### Reason
 When the joint is running the program, the joint current suddenly increases beyond the set threshold, the error pops up.

### Action
 (1) Check whether the robot collides with the peripherals. 
(2) Check if the robot is being pulled by cables during movement.
(3) Reduce the acceleration of the robot appropriately.
(4) Check whether the robot’s payload is consistent with the actual payload.
(5) Try to increase the collision level of the robot.

## 0x0F0106 End force exceeds the limit, collision detected in joint 4 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 End force exceeds the limit, collision detected in joint 4

### Reason
 When the joint is running the program, the joint current suddenly increases beyond the set threshold, the error pops up.

### Action
 (1) Check whether the robot collides with the peripherals. 
(2) Check if the robot is being pulled by cables during movement.
(3) Reduce the acceleration of the robot appropriately.
(4) Check whether the robot’s payload is consistent with the actual payload.
(5) Try to increase the collision level of the robot.

## 0x0F0107 End force exceeds the limit, collision detected in joint 5 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 End force exceeds the limit, collision detected in joint 5

### Reason
 When the joint is running the program, the joint current suddenly increases beyond the set threshold, the error pops up.

### Action
 (1) Check whether the robot collides with the peripherals. 
(2) Check if the robot is being pulled by cables during movement.
(3) Reduce the acceleration of the robot appropriately.
(4) Check whether the robot’s payload is consistent with the actual payload.
(5) Try to increase the collision level of the robot.

## 0x0F0108 End force exceeds the limit, collision detected in joint 6 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 End force exceeds the limit, collision detected in joint 6

### Reason
 When the joint is running the program, the joint current suddenly increases beyond the set threshold, the error pops up.

### Action
 (1) Check whether the robot collides with the peripherals.  
(2) Check if the robot is being pulled by cables during movement. 
(3) Reduce the acceleration of the robot appropriately. 
(4) Check whether the robot’s payload is consistent with the actual payload. 
(5) Try to increase the collision level of the robot. 

## 0x0F0109 The points of safety plane error  
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Points of safety plane cannot be collinear or coincide. 

### Reason
 To set safety plane requiring three points and one safety point. These three points are Cartesian coordinates. When the three points coincide or are collinear, or the safety point is on the safety plane, the error pops up. 

### Action
 Check if three points coincide or are collinear, or the safety point is on the safety plane 

## 0x0F0110 Unable to set dynamics parameters 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 To set the dynamics parameters, the robot should be powered off and disabled. 

### Reason
 Robot is enabled or powered off

### Action
 Check the robot’s status, power on the robot or disable the robot. 

## 0x0F0111 Dynamics parameter settings interruption 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unexpected interruption of parameter setting during setting of dynamics parameters. 

### Reason
 CAN communication error between the robot and the control cabinet during the setting of dynamics parameters. 

### Action
 (1) Re-power on the robot after disabling and powering off the robot.
(2) Check the connection between robot connection cable and control cabinet.  

## 0x0F0112 Dynamics parameter settings timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Parameter settings timeout during setting of dynamics parameters. 

### Reason
 CAN communication error between the robot and the control cabinet during the setting of dynamics parameters.

### Action
 (1) Re-power on the robot after disabling and powering off the robot.
(2) Check the connection between robot connection cable and control cabinet.  

## 0x0F0113 Unsupported control cabinet types 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The control cabinet is no longer supported in this version

### Reason
 Controller software after v1.7.1 will no longer support 

### Action
 Update to the corresponding version, such as v1.5, if you want to use it. 

## 0x0F0114 Unable to identify in the disabled state 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Unable to identify in the disabled state

### Reason
 Unable to identify in the disabled state

### Action
 Please enable the robot before identification

## 0x0F0115 Failed to obtain the bottom network port IP address 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to obtain the bottom network port IP address

### Reason
 Failed to obtain the bottom network port IP address

### Action
 Please check the connection status of the bottom network port

## 0x0F0140 Exceed soft limit of force sensor 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Exceed soft limit of force sensor

### Reason
 Exceed soft limit of force sensor

### Action
 1. Please confirm whether the end of the robot has collided with something

## 0x0F0141 Exceed measurement range of force sensor  
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Exceed measurement range of force sensor 

### Reason
 Exceed measurement range of force sensor 

### Action
 1. Please confirm whether the end of the robot has collided with something

## 0x0F0116 The number of AddOn has exceeded the limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 the number of currently installed AddOn has reached the upper limit of < 10 >

### Reason
 the number of currently installed AddOn has reached the upper limit of < 10 >

### Action
 please delete some AddOn before continuing the installation

## 0x0F0117 The AddOn service does not exist 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 the service corresponding file in the AddOn configuration file does not exist

### Reason
 the service corresponding file in the AddOn configuration file does not exist

### Action
 Check whether the service file in the AddOn installation package exists

## 0x0F0118 AddOn Port View Idle Port Number Failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 AddOn Port View Idle Port Number Failed

### Reason
 AddOn Port View Idle Port Number Failed

### Action
 Please save the diagnostic log in a timely manner and contact technical personnel for handling

## 0x0F0119 AddOn port number allocation failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 AddOn port number allocation failed

### Reason
 AddOn port number allocation failed

### Action
 1. Please try restarting after restarting the control cabinet

## 0x0F011A Failed to perform operation on running AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unable to perform current operation on running AddOn

### Reason
 Unable to perform current operation on running AddOn

### Action
 Unable to perform current operation on running AddOn

## 0x0F011B Failed to perform AddOn operation on stopped 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unable to perform current operation on a stopped AddOn

### Reason
 Unable to perform current operation on a stopped AddOn

### Action
 Unable to perform current operation on a stopped AddOn

## 0x0F011C Unknown AddOn operation 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The controller has an unsupported AddOn instruction

### Reason
 The controller has an unsupported AddOn instruction

### Action
 Upgrade the AddOn Manager corresponding to the version of the controller

## 0x0F011D duplicate port occupation 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 There is a duplicate port occupation for AddOn in the system

### Reason
 There is a duplicate port occupation for AddOn in the system

### Action
 Can attempting to restart the controller solve the problem
2. Please save the diagnostic log in a timely manner and contact technical personnel for handling

## 0x0F011E AddOn unknown error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 AddOn unknown error

### Reason
 AddOn unknown error

### Action
 Please save the diagnostic log in a timely manner and contact technical personnel for handling

## 0x0F011F Failed to operate built-in AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unable to perform current operation on system AddOn

### Reason
 Unable to perform current operation on system AddOn

### Action
 Unable to perform current operation on system AddOn

## 0x0F0120 The operation on exception AddOn failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unable to operate AddOn that is not recognized by the current version

### Reason
 1. AddOn version is too low
2.AddOn package format error

### Action
 Please check the AddOn installation package for errors and reinstall it

## 0x0F0121 Invalid configuration file in AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid config.ini file in AddOn

### Reason
 Invalid config.ini file in AddOn

### Action
 Please contact the AddOn developer to check that the AddOn installation package is correct and reinstall it

## 0x0F0122 Invalid configuration file in AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 AddOn is missing necessary configuration items

### Reason
 1.AddOn convention 2.0/3.0 necessary configuration items [convention, description, version, type, languagetype, service, serviceenabled]
2.AddOn convention 1.0 necessary configuration items [binname,description,version,enabled,type]

### Action
 Please contact the AddOn developer to check if Addon is missing the corresponding configuration item

## 0x0F0123 Invalid configuration file in AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 AddOn Port Error

### Reason
 Current error not used

### Action
 Current error not used

## 0x0F0124 Invalid configuration file in AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid Language in AddOn configuration file

### Reason
 1.AddOn convention 3.0 supports language [Python 2, Python, node red]
2.AddOn convention 2.0 supports language [python 2, python]
3.AddOn convention 1.0 supports language [python]

### Action
 Please check if the convention in the AddOn installation package supports the corresponding languageType

## 0x0F0125 Invalid configuration file in AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 type error in AddOn configuration file

### Reason
 1. AddOn convention 2.0/3.0 supports type [1. Custom instructions, 2. Custom services, 3. Custom UI]

### Action
 Please contact the AddOn developer to check if the AddOn installation package supports the corresponding type

## 0x0F0126 Invalid configuration file in AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Serviceenabled error in AddOn configuration file

### Reason
 Serviceenabled should be 0 or 1

### Action
 Please contact the AddOn developer to check if the AddOn installation package configuration serviceenabled meets the requirements

## 0x0F0127 Invalid configuration file in AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Service error in AddOn configuration file

### Reason
 1. Missing service configuration item in configuration
2. The service in the configuration is not empty and cannot exceed 50

### Action
 1. Check if the service configuration in the configuration file exists
2. Check the length of service bytes in the configuration

## 0x0F0128 Invalid configuration file or AddOn directory name in AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid configuration file in AddOn

### Reason
 1. Name in the Addon configuration file cannot be empty and cannot exceed 40 bytes
2. The directory name where AddOn is located cannot exceed 40 bytes

### Action
 Please contact the AddOn developer to modify the name in the AddOn configuration or modify the directory name where AddOn is located

## 0x0F0129 Invalid configuration file in AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid description in configuration file in AddOn

### Reason
 The description in the configuration file in AddOn should not exceed 40 bytes

### Action
 Please contact the AddOn developer to modify the Description in the AddOn configuration

## 0x0F012A Invalid configuration file in AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The URL format in the configuration file in AddOn is incorrect

### Reason
 The URL format in the configuration file in AddOn is incorrect

### Action
 Please contact the AddOn developer to modify the URL in the AddOn configuration

## 0x0F012B Invalid configuration file in AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid convention in the configuration file in AddOn

### Reason
 The current version of the controller does not support the corresponding convention version AddOn

### Action
 1. Please contact the AddOn developer to check if the configuration convention is correct

## 0x0F012C AddOn installation package error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 AddOn installation package is corrupt or unrecognized

### Reason
 AddOn installation package is corrupt or unrecognized

### Action
 Check that the AddOn installation package is correct and reinstall it

## 0x0F012D AddOn installation package error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 AddOn installation package error

### Reason
 System configuration error or code error

### Action
 1. Please contact technical personnel to replace the controller version
2. Please contact technical personnel to replace the system image

## 0x0F012E AddOn installation package error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 AddOn package decompression failed

### Reason
 Currently, only AddOn. tar.gz format compressed packages are supported

### Action
 1. Check if the package format is correct
2. Check if the package is damaged

## 0x0F012F AddOn installation package error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Another installation task is running

### Reason
 Another installation task is running

### Action
 1. Please wait for the installation to complete
2. Restart the control cabinet and try again

## 0x0F0130 There are currently no installation tasks 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 There are currently no installation tasks

### Reason
 There are currently no installation tasks

### Action
 There are currently no installation tasks

## 0x0F0131 AddOn installation package error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 AddOn installation package compression error

### Reason
 The system is busy internally and cannot read the corresponding file

### Action
 1. Please try again after a period of time
2. Contact technical personnel for handling

## 0x0F0132 AddOn installation package error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 AddOn compression failed

### Reason
 There are too many files in the AddOn package or the AddOn file is too large

### Action
 1. Please wait for a while and try again
2. Replace with another controller version to export

## 0x0F0133 AddOn installation package error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Missing files in AddOn installation package

### Reason
 1. Confirm the existence of the config.ini file
2. Confirm if other necessary documents exist
3. Determine if the file directory structure can be recognized

### Action
 Please contact the AddOn developer to confirm that the installation package is correct and try again

## 0x0F0134 Share program success 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Share program success

### Reason
 

### Action
 From: 
To : 

## 0x0F0135 The program failed to be shared. 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The program failed to be shared.

### Reason
 From: 
To : 
Possible reasons:
    1、Incorrect file path for the shared program or incomplete program files.
    2、The shared program files already exist in the target controller.
    3、The controller cannot access the IP address of the target controller.

### Action
 1、Verify that there are no program files with the same name on the target controller.
2、Ensure that the current controller can access the target controller properly (the host where the app is located can access the target controller).
3、Check if the shared program files have complete content (whether the files corresponding to the folders and subdirectories exist).



## 0x0F1001 Enable timeout, please power on again 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Enable timeout, please power on again

### Reason
 If the electromagnet does not actuate during the joint is enabling, the error will pop up.

### Action
 (1) Re-power on and enable the robot after disabling the robot.
(2) Check if the robot joint electromagnet works, or contact with the JAKA technicians.

## 0x0F1002 Servo version No. retrieval timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Servo version No. retrieval timeout

### Reason
 CAN communication error between the robot and the control cabinet

### Action
 (1) Re-power on and enable the robot after disabling and powering off the Enabled robot. 
(2) Check the connection between robot connection cable and control cabinet.

## 0x001002 Joint 1 CAN communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 CAN communication error

### Reason
 Joint 1 CAN bus error causes data acquisition failure or timeout

### Action
 (1) Disable and power off the robot, remove the lid of error joint, and check the CAN cable.
(2) Contact with the JAKA technicians.

## 0x011002 Joint 2 CAN communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 CAN communication error

### Reason
 Joint 2 CAN bus error causes data acquisition failure or timeout

### Action
 (1) Disable and power off the robot, remove the lid of error joint, and check the CAN cable.
(2) Contact with the JAKA technicians.

## 0x021002 Joint 3 CAN communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 CAN communication error

### Reason
 Joint 3 CAN bus error causes data acquisition failure or timeout

### Action
 (1) Disable and power off the robot, remove the lid of error joint, and check the CAN cable.
(2) Contact with the JAKA technicians.

## 0x031002 Joint 4 CAN communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 CAN communication error

### Reason
 Joint 4 CAN bus error causes data acquisition failure or timeout

### Action
 (1) Disable and power off the robot, remove the lid of error joint, and check the CAN cable.
(2) Contact with the JAKA technicians.

## 0x041002 Joint 5 CAN communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 CAN communication error

### Reason
 Joint 5 CAN bus error causes data acquisition failure or timeout

### Action
 (1) Disable and power off the robot, remove the lid of error joint, and check the CAN cable.
(2) Contact with the JAKA technicians.

## 0x051002 Joint 6 CAN communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 CAN communication error

### Reason
 Joint 6 CAN bus error causes data acquisition failure or timeout

### Action
 (1) Disable and power off the robot, remove the lid of error joint, and check the CAN cable.
(2) Contact with the JAKA technicians.

## 0x001003 Joint 1 drive error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 drive error

### Reason
 The controller does not receive signal from drive board in joint 1 after the robot powers on.

### Action
 Check if the APP monitoring page shows the voltage, current and temperature of the joint 1. If not, contact with the JAKA technicians.

## 0x011003 Joint 2 drive error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 drive error

### Reason
 The controller does not receive signal from drive board in joint 2 after the robot powers on.

### Action
 Check if the APP monitoring page shows the voltage, current and temperature of the joint 2. If not, contact with the JAKA technicians.

## 0x021003 Joint 3 drive error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 drive error

### Reason
 The controller does not receive signal from drive board in joint 3 after the robot powers on.

### Action
 Check if the APP monitoring page shows the voltage, current and temperature of the joint 3. If not, contact with the JAKA technicians.

## 0x031003 Joint 4 drive error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 drive error

### Reason
 The controller does not receive signal from drive board in joint 4 after the robot powers on.

### Action
 Check if the APP monitoring page shows the voltage, current and temperature of the joint 4. If not, contact with the JAKA technicians.

## 0x041003 Joint 5 drive error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 drive error

### Reason
 The controller does not receive signal from drive board in joint 5 after the robot powers on.

### Action
 Check if the APP monitoring page shows the voltage, current and temperature of the joint 5. If not, contact with the JAKA technicians.

## 0x051003 Joint 6 drive error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 drive error

### Reason
 The controller does not receive signal from drive board in joint 6 after the robot powers on.

### Action
 Check if the APP monitoring page shows the voltage, current and temperature of the joint 6. If not, contact with the JAKA technicians.

## 0x001004 Joint 1 following error too high 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 following error too high

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x011004 Joint 2 following error too high 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 following error too high

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x021004 Joint 3 following error too high 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 following error too high

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x031004 Joint 4 following error too high 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 following error too high

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x041004 Joint 5 following error too high 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 following error too high

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x051004 Joint 6 following error too high 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 following error too high

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x0F2000 Programming file syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Programming file syntax error

### Reason
 Parameters are abnormal or undefined in the program, which makes the controller unable to process.

### Action
 (1) Check the initial value of the variable used in the program.
(2) Check interaction data of communication connection variable.

## 0x0F2001 No programming file opened 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 No programming file opened

### Reason
 No programming is loading and running.

### Action
 (1) Set default loading program for boot up;
(2) Open the corresponding program in the programming interface and click “Run”.

## 0x0F2002 Programming file open failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Programming file open failure

### Reason
 The default loaded program on boot is lost

### Action
 (1) Re-select the boot default loading program in the settings page.
(2) Reopen the program in the programming page.

## 0x0F2003 Programming file close failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Programming file close failure

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x0F2010 Parsing error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Parsing error

### Reason
 Unmatched keywords like if, while, end, break, continue, etc.
The file with the error is: 
The error line number is: 

### Action
 Check the script files, especially the manually written script subroutines, for unmatched keywords.

## 0x0F2011 PyCall () failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 PyCall () failure

### Reason
 Python script syntax error.
The file with the error is: 
The error line number is: 

### Action
 Check the calling Python script program.

## 0x0F2012 Parsing and assertion failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Parsing and assertion failure

### Reason
 Movement parameter settings unreasonable.
The file with the error is: 
The error line number is: 

### Action
 Check movement parameter settings.

## 0x0F2013 Parsing fails and the radius of the arc is zero. 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Parsing fails and the radius of the arc is zero.

### Reason
 MoveC point settings error, robot movement trajectory planning failed.
The file with the error is: 
The error line number is: 

### Action
 Check the point of MoveC, and reconfigure these points.

## 0x0F2014 Parsing failure, syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Parsing failure, syntax error

### Reason
 Data format exception in assignment command.
The file with the error is: 
The error line number is: 

### Action
 Please check whether the data format of the variable assignment instructions in the program has exceptions.

## 0x0F2015 Network connection failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Network connection failure

### Reason
 Create SOCKET failure.
The file with the error is: 
The error line number is: 

### Action
 Check the error script command according to the error information.

## 0x0F2016 Failed to connect to the server 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to connect to the server

### Reason
 The server disconnects when the SOCKET communicates.
The file with the error is: 
The error line number is: 

### Action
 (1) Check if the server of SOCKET communication is closed. 
(2) Try connect the network with the server of SOCKET communication.
(3) Check the network connection between the control cabinet and the server of SOCKET communication.
(4) Please check whether the firewall on the SOCKET communication server is turned off.

## 0x0F2017 Communication failed. Server not connected. 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Communication failed. Server not connected.

### Reason
 The camera was not connected when the read visual parameter command is executed.
The file with the error is: 
The error line number is: 

### Action
 (1) Check if the server of SOCKET communication is closed. 
(2) Try connect the network with the server of SOCKET communication.
(3) Check the network connection between the control cabinet and the server of SOCKET communication.
(4) Please check whether the firewall on the SOCKET communication server is turned off.

## 0x0F2018 TCP/IP data receiving failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 TCP/IP data receiving failure

### Reason
 The controller failed to receive data from the camera.
The file with the error is: 
The error line number is: 

### Action
 (1) Disconnect the camera;
(2) Check the connection between the controller and the camera.

## 0x0F2019 TCP/IP data sending failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 TCP/IP data sending failure

### Reason
 The controller failed to send data to the camera.
The file with the error is: 
The error line number is: 

### Action
 (1) Check if the server of SOCKET communication is closed.
(2) Try connect the network with the server of SOCKET communication.
(3) Check the network connection between the control cabinet and the server of SOCKET communication.
(4) Please check whether the firewall on the SOCKET communication server is turned off.

## 0x0F201A Failed to load 2D visual configuration 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to load 2D visual configuration

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x0F201B Internal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Internal error

### Reason
 Script parser internal error.
The file with the error is: 
The error line number is: 

### Action
 Check the following situations according to the error log information:
(1) sscanf command parameter exception;
(2) Write operations on read-only variables.

## 0x0F201C Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x0F201D Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x0F201E Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Code parameter error.
The file with the error is: 
The error line number is: 

### Action
 Please check if the code parameters are correct before operation.

## 0x0F201F Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Unrecognized move command
The file with the error is: 
The error line number is: 

### Action
 Check the move command in the script program, especially the manually written script programs.

## 0x0F2020 Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Move command parameter error
The file with the error is: 
The error line number is: 

### Action
 Check the move command according to the error information.

## 0x0F2021 The method should not be called 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The method should not be called

### Reason
 Unsupported code commands are used in the MoveC.
The file with the error is: 
The error line number is: 

### Action
 Please check whether the function IO is always on, usually the external function button can be disconnected after 1 second of being on.

## 0x0F2022 Unknown operation 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unknown operation

### Reason
 An unsupported operator was used in the script program.
The file with the error is: 
The error line number is: 

### Action
 Check whether symbols other than the following operators are used according to the error information:  +,  -,  /,  *,  **,  and,  mod, or,  xor, ]

## 0x0F2023 Data format error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Data format error

### Reason
 The defined variable data format is incorrect.
The file with the error is: 
The error line number is: 

### Action
 Please check and modify the defined variable data format.

## 0x0F2024 Undefined parameter 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Undefined parameter

### Reason
 (1) The socket is inconsistent when defining socket communication and sending socket;
(2) Data is not assigned in the specified format.
The file with the error is: 
The error line number is: 

### Action
 (1) Check the communication command in the program. Make sure that the ports used are opened.

## 0x0F2025 Failed to open the file 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to open the file

### Reason
 (1) File format error;
(2) The file name is too long.
The file with the error is: 
The error line number is: 

### Action
 (1) Check whether the file format is correct. If not, please set it to the correct file format.
(2) Check whether the file name is too long, if it is too long, please set it to a reasonable range.

## 0x0F2026 Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 The ini parameter in the program is not defined in the ini file.
The file with the error is: 
The error line number is: 

### Action
 Check whether the ini parameter name in the program is correct.

## 0x0F2027 Out of memory 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Out of memory

### Reason
 Out of memory, an error occurred while storing strings.
The file with the error is: 
The error line number is: 

### Action
 (1) Reboot the control cabinet to run the program.
(2) If the error occurs frequently, contact the JAKA technicians.

## 0x0F2028 Return value type error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Return value type error

### Reason
 The return value type of the function does not match.
The file with the error is: 
The error line number is: 

### Action
 Check the variable definition type and the return value type to ensure that the return value is correct before operating.

## 0x0F2029 Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Excessive subroutine
The file with the error is: 
The error line number is: 

### Action
 Check if there are too many subroutines call in the program (it is recommended that the number of nested layers is less than 10).

## 0x0F202a Unable to add the parameter 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unable to add the parameter

### Reason
 Parameter assignment exception.
The file with the error is: 
The error line number is: 

### Action
 Check the following according to the error information:
(1) whether the parameter name is correct;
(2) Whether the parameter type is correct.

## 0x0F202B User-defined error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 User-defined error

### Reason
 User-defined variable error.
The file with the error is: 
The error line number is: 

### Action
 Please check the variable parameters according to the error.

## 0x0F202C Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Expect to read an integer number (such as an array index), but the script actually gives a non-integer parameter.
The file with the error is: 
The error line number is: 

### Action
 The stepping parameter in the string related instruction is set incorrectly. Please set a reasonable stepping. (Stepping can only be set to integer)

## 0x0F202D Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Unknown characters in keywords.
The file with the error is: 
The error line number is: 

### Action
 Check the keywords in the program according to the error information.

## 0x0F202E Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Unknown operator
The file with the error is: 
The error line number is: 

### Action
 Check program syntax: Expression within () does not support separate &, |,!, =
Must be: &&， ||， !=， ==

## 0x0F202F Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Incomplete expression.
The file with the error is: 
The error line number is: 

### Action
 Check if the expression corresponding to the error line is correct.

## 0x0F2030 Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x0F2031 Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x0F2032 Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x0F2033 The command is too long 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The command is too long

### Reason
 The script commands and parameters are too long.
The file with the error is: 
The error line number is: 

### Action
 Single-line script commands and parameters, the total length does not exceed 255 bytes (the latest version does not exceed 512 bytes).

## 0x0F2034 Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Error saving system variables.
The file with the error is: 
The error line number is: 

### Action
 (1) Check system variable file jaka_user.var;
(2) Check that the variable indexes in the system variable file are stored in order.

## 0x0F2035 Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Undefined command parameter.
The file with the error is: 
The error line number is: 

### Action
 Check if the parameters of the erroneous script command are correct.

## 0x0F2036 File is not open 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 File is not open

### Reason
 Failed to open the file or folder.
The file with the error is: 
The error line number is: 

### Action
 (1) Whether the folder or file name path is correct;
(2) Whether the folder or file is opened with the correct permissions;
(3) Whether the file is corrupted.

## 0x0F2037 Duplicate definition 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Duplicate definition

### Reason
 Script interpreter keyword mapping error.
The file with the error is: 
The error line number is: 

### Action
 Internal system error. Record error logs and programs and contact JAKA.

## 0x0F2038 Program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Program syntax error

### Reason
 Script interpreter keyword mapping error.
The file with the error is: 
The error line number is: 

### Action
 Internal system error. Record error logs and programs and contact JAKA.

## 0x0F2039 Repeatedly open the file 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Repeatedly open the file

### Reason
 Failed to open the file
The file with the error is: 
The error line number is: 

### Action
 (1) Whether the folder or file name path is correct;
(2) Whether the folder or file is opened with the correct permissions;
(3) Whether the file is corrupted.

## 0x0F203A Unmatched 'end' keyword 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 There is an unmatched 'end' keyword in the script program.

### Reason
 There is an unmatched 'end' keyword in the script program.
The file with the error is: 
The error line number is: 

### Action
 Check the 'end' keyword in the script program

## 0x0F203B Failed to create thread 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Too many threads created.

### Reason
 Allow up to 5 threads to run simultaneously.
The file with the error is: 
The error line number is: 

### Action
 Create a new thread after the thread is finished or destroyed.

## 0x0F203C Failed to create thread 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to create thread

### Reason
 Threads already running do not allow duplicate threads to be created.
The file with the error is: 
The error line number is: 

### Action
 Create a new thread after the thread is finished or destroyed.

## 0x0F203D Unmatched keywords 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unmatched elif

### Reason
 The “elif” is detected but there is no matching “if”.
The file with the error is: 
The error line number is: 

### Action
 Check the “if” command in the script program.

## 0x0F203E Unmatched keywords 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unmatched else

### Reason
 The “else” is detected but there is no matching “if”.
The file with the error is: 
The error line number is: 

### Action
 Check the “if” command in the script program.

## 0x0F203F Unmatched keywords 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unmatched break

### Reason
 The “break” is detected but there is no matching “while”.
The file with the error is: 
The error line number is: 

### Action
 Check the “while” command in the script program.

## 0x0F2040 Unmatched keywords 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unmatched continue

### Reason
 The “continue” is detected but there is no matching “while‘’.
The file with the error is: 
The error line number is: 

### Action
 Check the “while” command in the script program.

## 0x0F2041 Unmatched keywords 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unmatched return

### Reason
 The “return” is detected but there is no matching “sub”.
The file with the error is: 
The error line number is: 

### Action
 Check the “sub” command in the script program.

## 0x0F2042 TIO semaphore retrieval failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 TIO semaphore retrieval failure

### Reason
 Undefined semaphore

### Action
 Please define before accessing or checking the spelling.

## 0x0F2043 Failed to add system variable 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to add system variable

### Reason
 Variable index out of range.

### Action
 Make sure the variable index ranges from 1 to 5601.

## 0x0F2050 Invalid SOCKET ID 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid SOCKET ID

### Reason
 Abandoned

### Action
 

## 0x0F2051 Inverse Kinematic failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Inverse Kinematic failure

### Reason
 The program uses the command related to inverse kinematic calculation and the calculation fails. It is related to the given reference joint angle and the end orientation of the solution.
The file with the error is: 
The error line number is: 

### Action
 Manual operation to check whether the joint can be moved to the target point, if possible, consider changing the orientation of the robot to reach the target point from other paths or orientations or change the orientation of the target point.

## 0x0F2052 Forward Kinematic failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Forward Kinematic failure

### Reason
 The program uses the command related to inverse kinematic calculation and the calculation fails. It is related to the parameter setting of joint angle value.
The file with the error is: 
The error line number is: 

### Action
 Manual operation to check whether the joint can be moved to the target point, if possible, consider changing the orientation of the robot to reach the target point from other paths or orientations or change the orientation of the target point.

## 0x0F2053 TCP/IP communication receives error data 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 TCP/IP communication receives error data

### Reason
 Abandoned

### Action
 Please check whether the controller is the debugging version, or contact the technical service personnel.

## 0x0F2054 Invalid array variable 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid array variable

### Reason
 The array variable is undefined or the variable is not the array type.
The file with the error is: 
The error line number is: 

### Action
 Please check if the array variable corresponding to the error line of the script program is used correctly.

## 0x0F2055 Invalid array element index 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid array element index

### Reason
 Array index value is out of range.
The file with the error is: 
The error line number is: 

### Action
 Please check if the array index corresponding to the error line of the script program is correct.

## 0x0F2056 Invalid positional interpolation coefficient 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid positional interpolation coefficient

### Reason
 The interpolation coefficient of the positional interpolation command is invalid.
The file with the error is: 
The error line number is: 

### Action
 Check the parameter of the positional interpolation command.

## 0x0F2057 The control block does not match the terminator 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The control block does not match the terminator

### Reason
 The control blocks (if, while) lack the terminator that matches them.
The file with the error is: 
The error line number is: 

### Action
 Checks if and while blocks in a custom script subroutine have terminators.

## 0x0F2058 Unsupported escape characters 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unsupported escape characters

### Reason
 An unsupported escape character was used in the script program. Currently only supports: \,\,\,\"\',\\,
The file with the error is: 
The error line number is: 

### Action
 The escape characters available include \\ (backslash symbol), \’ (single quotation), \” (double quotation), \n (line feed), \t (horizontal tab character), and \r (carriage return).

## 0x0F2059 Invalid access parameters of array 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid access parameters of array

### Reason
 Invalid step used when slicing to access arrays.
The file with the error is: 
The error line number is: 

### Action
 Check the script program according to the error information. When slicing the array, the step should be an integer greater than 0.

## 0x0F2060 Unsupported array nesting 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unsupported array nesting

### Reason
 Array elements are not supported within array variables.
The file with the error is: 
The error line number is: 

### Action
 Check the script program according to the error information. Array elements are not supported within array variables.

## 0x0F2061 String arrays are not supported 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 String arrays are not supported

### Reason
 String elements are not supported within array variables.
The file with the error is: 
The error line number is: 

### Action
 Check the script program according to the error information. String elements are not supported within array variables.

## 0x0F2062 SOCKET resources are over-allocated and not released 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 SOCKET resources are over-allocated and not released

### Reason
 Excessive SOCKETS were created and not closed.
The file with the error is: 
The error line number is: 

### Action
 (1) Please make sure that after using the SOCKET command, it will be closed in time when it is not in use;
(2) Avoid opening the SOCKET in the loop statement. If you open it, you need to close it before the next creation;
(3) If it is not closed, it is allowed to create up to 256 SOCKETS.

## 0x0F2063 Receiving SOCKET data is invalid 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Receiving SOCKET data is invalid

### Reason
 The SOCKET receives variable commands and the received data format is incorrect.
The file with the error is: 
The error line number is: 

### Action
 When SOCKET is used in the script program to receive variable and array commands, ensure that the data format sent by the server conforms to the return data format defined in the script programming commands.

## 0x0F2064 Mismatched array length received by the SOCKET 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mismatched array length received by the SOCKET

### Reason
 The array length of the SOCKRT received data does not match the array length sent by the server.
The file with the error is: 
The error line number is: 

### Action
 When SOCKET is used in the script program to receive array commands, ensure the array length returned by the server is correct.

## 0x0F2065 Mismatched data types received by the SOCKET 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mismatched data types received by the SOCKET

### Reason
 The data types of the SOCKRT received data does not match the data types sent by the server.
The file with the error is: 
The error line number is: 

### Action
 When SOCKET is used in the script program to receive variable and array commands, ensure the data types returned by the server is correct.

## 0x0F2066 The collision sensitivity level setting function is not enabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The collision sensitivity level setting function is not enabled

### Reason
 The collision sensitivity level setting function is not enabled. Error file is:  Error line number is: 

### Action
 

## 0x0F2067 Cannot compare different types of data 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Different types of variables cannot be compared by "<" > "" <=" ">="

### Reason
 Different types of variables cannot be compared by "<" > "" <=" ">="
Error file is: 
Error line number is: 

### Action
 Please check the type of the corresponding script variable based on the error message.

## 0x0F3001 Failed to connect to specified visual device 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to connect to specified visual device

### Reason
 The controller cannot connect the visual device

### Action
 Check the visual hardware wiring, check whether the visual power supply DC24V positive and negative wiring harness is correct. If it still cannot be connected, please contact the JAKA technicians.

## 0x0F3002 No visual device 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 No visual device

### Reason
 The controller cannot detect the visual device.

### Action
 Check the visual hardware wiring, check whether the visual power supply DC24V positive and negative wiring harness is correct. If it still cannot be connected, please contact the JAKA technicians.

## 0x0F4001 Servo status reading failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Servo status reading failure

### Reason
 

### Action
 

## 0x0F4002 Firmware upgrade failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Firmware upgrade failure

### Reason
 Robot firmware upgrade failure

### Action
 Check whether the firmware file name suffix is .tar.gz, and there is no redundant content. Please do not power off during the upgrade.

## 0x0F4003 The hardware does not support this function 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The hardware does not support this function

### Reason
 The robot or control cabinet cannot support the currently used functions.

### Action
 Please take photos of the error function and the controller version information, and contact the JAKA technicians.

## 0x0F4004 Robot self-diagnosis error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Potential risks for robot joints 

### Reason
 Joint internal parameter self-test error. This message is a warning message and has no effect on program.

### Action
 Contact with the JAKA technicians to perform routine check on the joints.

## 0x102230 Joint 1 busbar overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 busbar overcurrent

### Reason
 Motor feedback current exceeds threshold

### Action
 Please take photos of the error function and the controller version information, save the log of the error and contact the JAKA technicians.

## 0x112230 Joint 2 busbar overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 busbar overcurrent

### Reason
 Motor feedback current exceeds threshold

### Action
 Please take photos of the error function and the controller version information, save the log of the error and contact the JAKA technicians.

## 0x122230 Joint 3 busbar overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 busbar overcurrent

### Reason
 Motor feedback current exceeds threshold

### Action
 Please take photos of the error function and the controller version information, save the log of the error and contact the JAKA technicians.

## 0x132230 Joint 4 busbar overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 busbar overcurrent

### Reason
 Motor feedback current exceeds threshold

### Action
 Please take photos of the error function and the controller version information, save the log of the error and contact the JAKA technicians.

## 0x142230 Joint 5 busbar overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 busbar overcurrent

### Reason
 Motor feedback current exceeds threshold

### Action
 Please take photos of the error function and the controller version information, save the log of the error and contact the JAKA technicians.

## 0x152230 Joint 6 busbar overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 busbar overcurrent

### Reason
 Motor feedback current exceeds threshold

### Action
 Please take photos of the error function and the controller version information, save the log of the error and contact the JAKA technicians.

## 0x102320 Joint 1 output overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 output overcurrent

### Reason
 The current of the motor UVW is detected to exceed the overcurrent threshold of the hardware drive board.

### Action
 (1) Reduce the robot’s payload;
(2) Reduce the robot’s velocity or acceleration;
(3) Robot joint drive board or reducer do not work, please contact the JAKA technicians;
(4) Communication error: replace the robot connection cable or control cabinet, or contact the JAKA technicians;

## 0x112320 Joint 2 output overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 output overcurrent

### Reason
 The current of the motor UVW is detected to exceed the overcurrent threshold of the hardware drive board.

### Action
 (1) Reduce the robot’s payload;
(2) Reduce the robot’s velocity or acceleration;
(3) Robot joint drive board or reducer do not work, please contact the JAKA technicians;
(4) Communication error: replace the robot connection cable or control cabinet, or contact the JAKA technicians;

## 0x122320 Joint 3 output overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 output overcurrent

### Reason
 The current of the motor UVW is detected to exceed the overcurrent threshold of the hardware drive board.

### Action
 (1) Reduce the robot’s payload;
(2) Reduce the robot’s velocity or acceleration;
(3) Robot joint drive board or reducer do not work, please contact the JAKA technicians;
(4) Communication error: replace the robot connection cable or control cabinet, or contact the JAKA technicians;

## 0x132320 Joint 4 output overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 output overcurrent

### Reason
 The current of the motor UVW is detected to exceed the overcurrent threshold of the hardware drive board.

### Action
 (1) Reduce the robot’s payload;
(2) Reduce the robot’s velocity or acceleration;
(3) Robot joint drive board or reducer do not work, please contact the JAKA technicians;
(4) Communication error: replace the robot connection cable or control cabinet, or contact the JAKA technicians;

## 0x142320 Joint 5 output overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 output overcurrent

### Reason
 The current of the motor UVW is detected to exceed the overcurrent threshold of the hardware drive board.

### Action
 (1) Reduce the robot’s payload;
(2) Reduce the robot’s velocity or acceleration;
(3) Robot joint drive board or reducer do not work, please contact the JAKA technicians;
(4) Communication error: replace the robot connection cable or control cabinet, or contact the JAKA technicians;

## 0x152320 Joint 6 output overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 output overcurrent

### Reason
 The current of the motor UVW is detected to exceed the overcurrent threshold of the hardware drive board.

### Action
 (1) Reduce the robot’s payload;
(2) Reduce the robot’s velocity or acceleration;
(3) Robot joint drive board or reducer do not work, please contact the JAKA technicians;
(4) Communication error: replace the robot connection cable or control cabinet, or contact the JAKA technicians;

## 0x102321 Joint 1 self-training overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 self-training overcurrent

### Reason
 Output large current during joint enable, but motor rotation is not detected

### Action
 (1) Disable the robot, release the joint electromagnet and check whether the error joint can be moved.
(2) Power off the robot, remove the lid, check the wiring or contact the technicians.

## 0x112321 Joint 2 self-training overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 self-training overcurrent

### Reason
 Output large current during joint enable, but motor rotation is not detected

### Action
 (1) Disable the robot, release the joint electromagnet and check whether the error joint can be moved.
(2) Power off the robot, remove the lid, check the wiring or contact the technicians.

## 0x122321 Joint 3 self-training overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 self-training overcurrent

### Reason
 Output large current during joint enable, but motor rotation is not detected

### Action
 (1) Disable the robot, release the joint electromagnet and check whether the error joint can be moved.
(2) Power off the robot, remove the lid, check the wiring or contact the technicians.

## 0x132321 Joint 4 self-training overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 self-training overcurrent

### Reason
 Output large current during joint enable, but motor rotation is not detected

### Action
 (1) Disable the robot, release the joint electromagnet and check whether the error joint can be moved.
(2) Power off the robot, remove the lid, check the wiring or contact the technicians.

## 0x142321 Joint 5 self-training overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 self-training overcurrent

### Reason
 Output large current during joint enable, but motor rotation is not detected

### Action
 (1) Disable the robot, release the joint electromagnet and check whether the error joint can be moved.
(2) Power off the robot, remove the lid, check the wiring or contact the technicians.

## 0x152321 Joint 6 self-training overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 self-training overcurrent

### Reason
 Output large current during joint enable, but motor rotation is not detected

### Action
 (1) Disable the robot, release the joint electromagnet and check whether the error joint can be moved.
(2) Power off the robot, remove the lid, check the wiring or contact the technicians.

## 0x108480 Joint 1 forward velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 forward velocity tracking error

### Reason
 The actual speed is in the same direction as the set speed, and the speed error exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.

## 0x118480 Joint 2 forward velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 forward velocity tracking error

### Reason
 The actual speed is in the same direction as the set speed, and the speed error exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.

## 0x128480 Joint 3 forward velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 forward velocity tracking error

### Reason
 The actual speed is in the same direction as the set speed, and the speed error exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.

## 0x138480 Joint 4 forward velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 forward velocity tracking error

### Reason
 The actual speed is in the same direction as the set speed, and the speed error exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.

## 0x148480 Joint 5 forward velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 forward velocity tracking error

### Reason
 The actual speed is in the same direction as the set speed, and the speed error exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.

## 0x158480 Joint 6 forward velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 forward velocity tracking error

### Reason
 The actual speed is in the same direction as the set speed, and the speed error exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.

## 0x108481 Joint 1 negative velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 negative velocity tracking error

### Reason
 The actual speed is in the opposite direction as the set speed, and the speed error exceeds the set threshold

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.

## 0x118481 Joint 2 negative velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 negative velocity tracking error

### Reason
 The actual speed is in the opposite direction as the set speed, and the speed error exceeds the set threshold

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.

## 0x128481 Joint 3 negative velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 negative velocity tracking error

### Reason
 The actual speed is in the opposite direction as the set speed, and the speed error exceeds the set threshold

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.

## 0x138481 Joint 4 negative velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 negative velocity tracking error

### Reason
 The actual speed is in the opposite direction as the set speed, and the speed error exceeds the set threshold

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.

## 0x148481 Joint 5 negative velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 negative velocity tracking error

### Reason
 The actual speed is in the opposite direction as the set speed, and the speed error exceeds the set threshold

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.

## 0x158481 Joint 6 negative velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 negative velocity tracking error

### Reason
 The actual speed is in the opposite direction as the set speed, and the speed error exceeds the set threshold

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.

## 0x108482 The speed of joint 1 exceeds the limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The speed of joint 1 exceeds the limit

### Reason
 The actual speed of the joint exceeds the rated speed of the joint

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x118482 The speed of joint 2 exceeds the limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The speed of joint 2 exceeds the limit

### Reason
 The actual speed of the joint exceeds the rated speed of the joint

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x128482 The speed of joint 3 exceeds the limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The speed of joint 3 exceeds the limit

### Reason
 The actual speed of the joint exceeds the rated speed of the joint

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x138482 The speed of joint 4 exceeds the limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The speed of joint 4 exceeds the limit

### Reason
 The actual speed of the joint exceeds the rated speed of the joint

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x148482 The speed of joint 5 exceeds the limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The speed of joint 5 exceeds the limit

### Reason
 The actual speed of the joint exceeds the rated speed of the joint

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x158482 The speed of joint 6 exceeds the limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The speed of joint 6 exceeds the limit

### Reason
 The actual speed of the joint exceeds the rated speed of the joint

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x108483 Joint 1 speed tracking error too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 speed tracking error too large

### Reason
 The actual speed is in the opposite direction as the set speed, and the speed error exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x118483 Joint 2 speed tracking error too high 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 speed tracking error too high

### Reason
 The actual speed is in the opposite direction as the set speed, and the speed error exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x128483 Joint 3 speed tracking error too high 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 speed tracking error too high

### Reason
 The actual speed is in the opposite direction as the set speed, and the speed error exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x138483 Joint 4 speed tracking error too high 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 speed tracking error too high

### Reason
 The actual speed is in the opposite direction as the set speed, and the speed error exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x148483 Joint 5 speed tracking error too high 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 speed tracking error too high

### Reason
 The actual speed is in the opposite direction as the set speed, and the speed error exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x158483 Joint 6 speed tracking error too high 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 speed tracking error too high

### Reason
 The actual speed is in the opposite direction as the set speed, and the speed error exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x108484 The acceleration of joint 1 exceeds the limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The acceleration of joint 1 exceeds the limit

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x118484 The acceleration of joint 2 exceeds the limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The acceleration of joint 2 exceeds the limit

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x128484 The acceleration of joint 3 exceeds the limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The acceleration of joint 3 exceeds the limit

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x138484 The acceleration of joint 4 exceeds the limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The acceleration of joint 4 exceeds the limit

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x148484 The acceleration of joint 5 exceeds the limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The acceleration of joint 5 exceeds the limit

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x158484 The acceleration of joint 6 exceeds the limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The acceleration of joint 6 exceeds the limit

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x108485 Joint 1 speed control error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 speed control error

### Reason
 Deviation of the actual speed of the joint from the speed in command exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x118485 Joint 2 speed control error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 speed control error

### Reason
 Deviation of the actual speed of the joint from the speed in command exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x128485 Joint 3 speed control error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 speed control error

### Reason
 Deviation of the actual speed of the joint from the speed in command exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x138485 Joint 4 speed control error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 speed control error

### Reason
 Deviation of the actual speed of the joint from the speed in command exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x148485 Joint 5 speed control error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 speed control error

### Reason
 Deviation of the actual speed of the joint from the speed in command exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x158485 Joint 6 speed control error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 speed control error

### Reason
 Deviation of the actual speed of the joint from the speed in command exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x107380 Joint 1 encoder connection timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 encoder connection timeout

### Reason
 Absolute encoder retrieving error

### Action
 (1) Contact technicians to check the parameters of the error joint;
(2) Contact technicians to replace cables of the encoder and then check if the error is solved;
(3) Contact technicians to check the encoder status light.

## 0x117380 Joint 2 encoder connection timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder connection timeout

### Reason
 Absolute encoder retrieving error

### Action
 (1) Contact technicians to check the parameters of the error joint;
(2) Contact technicians to replace cables of the encoder and then check if the error is solved;
(3) Contact technicians to check the encoder status light.

## 0x127380 Joint 3 encoder connection timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 encoder connection timeout

### Reason
 Absolute encoder retrieving error

### Action
 (1) Contact technicians to check the parameters of the error joint;
(2) Contact technicians to replace cables of the encoder and then check if the error is solved;
(3) Contact technicians to check the encoder status light.

## 0x137380 Joint 4 encoder connection timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 encoder connection timeout

### Reason
 Absolute encoder retrieving error

### Action
 (1) Contact technicians to check the parameters of the error joint;
(2) Contact technicians to replace cables of the encoder and then check if the error is solved;
(3) Contact technicians to check the encoder status light.

## 0x147380 Joint 5 encoder connection timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 encoder connection timeout

### Reason
 Absolute encoder retrieving error

### Action
 (1) Contact technicians to check the parameters of the error joint;
(2) Contact technicians to replace cables of the encoder and then check if the error is solved;
(3) Contact technicians to check the encoder status light.

## 0x157380 Joint 6 encoder connection timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 encoder connection timeout

### Reason
 Absolute encoder retrieving error

### Action
 (1) Contact technicians to check the parameters of the error joint;
(2) Contact technicians to replace cables of the encoder and then check if the error is solved;
(3) Contact technicians to check the encoder status light.

## 0x107381 Joint 1 encoder battery under-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 encoder battery under-voltage

### Reason
 Encoder battery under-voltage

### Action
 (1) Confirm the production parameters: Contact technicians to check whether the production parameters of the error joint are correct;
(2) Check the cable: remove the error joint lid, check whether the encoder cable is loose, contact the technician to replace it;
(3) Encoder failure, replace the joint encoder or replace the joint.

## 0x117381 Joint 2 encoder battery under-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder battery under-voltage

### Reason
 Encoder battery under-voltage

### Action
 (1) Confirm the production parameters: Contact technicians to check whether the production parameters of the error joint are correct;
(2) Check the cable: remove the error joint lid, check whether the encoder cable is loose, contact the technician to replace it;
(3) Encoder failure, replace the joint encoder or replace the joint.

## 0x127381 Joint 3 encoder battery under-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 encoder battery under-voltage

### Reason
 Encoder battery under-voltage

### Action
 (1) Confirm the production parameters: Contact technicians to check whether the production parameters of the error joint are correct;
(2) Check the cable: remove the error joint lid, check whether the encoder cable is loose, contact the technician to replace it;
(3) Encoder failure, replace the joint encoder or replace the joint.

## 0x137381 Joint 4 encoder battery under-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 encoder battery under-voltage

### Reason
 Encoder battery under-voltage

### Action
 (1) Confirm the production parameters: Contact technicians to check whether the production parameters of the error joint are correct;
(2) Check the cable: remove the error joint lid, check whether the encoder cable is loose, contact the technician to replace it;
(3) Encoder failure, replace the joint encoder or replace the joint.

## 0x147381 Joint 5 encoder battery under-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 encoder battery under-voltage

### Reason
 Encoder battery under-voltage

### Action
 (1) Confirm the production parameters: Contact technicians to check whether the production parameters of the error joint are correct;
(2) Check the cable: remove the error joint lid, check whether the encoder cable is loose, contact the technician to replace it;
(3) Encoder failure, replace the joint encoder or replace the joint.

## 0x157381 Joint 6 encoder battery under-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 encoder battery under-voltage

### Reason
 Encoder battery under-voltage

### Action
 (1) Confirm the production parameters: Contact technicians to check whether the production parameters of the error joint are correct;
(2) Check the cable: remove the error joint lid, check whether the encoder cable is loose, contact the technician to replace it;
(3) Encoder failure, replace the joint encoder or replace the joint.

## 0x107382 Joint 1 encoder battery disconnection 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 encoder battery disconnection

### Reason
 Encoder power supply error

### Action
 (1) If the error only pops up during the power on and power off process of the robot, it does not affect the use of the robot and does not require handling;
(2) If the error keeps popping out and affects the use of the robot, which means the encoder is broken, please contact the technicians.

## 0x117382 Joint 2 encoder battery disconnection 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder battery disconnection

### Reason
 Encoder power supply error

### Action
 (1) If the error only pops up during the power on and power off process of the robot, it does not affect the use of the robot and does not require handling;
(2) If the error keeps popping out and affects the use of the robot, which means the encoder is broken, please contact the technicians.

## 0x127382 Joint 3 encoder battery disconnection 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 encoder battery disconnection

### Reason
 Encoder power supply error

### Action
 (1) If the error only pops up during the power on and power off process of the robot, it does not affect the use of the robot and does not require handling;
(2) If the error keeps popping out and affects the use of the robot, which means the encoder is broken, please contact the technicians.

## 0x137382 Joint 4 encoder battery disconnection 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 encoder battery disconnection

### Reason
 Encoder power supply error

### Action
 (1) If the error only pops up during the power on and power off process of the robot, it does not affect the use of the robot and does not require handling;
(2) If the error keeps popping out and affects the use of the robot, which means the encoder is broken, please contact the technicians.

## 0x147382 Joint 5 encoder battery disconnection 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 encoder battery disconnection

### Reason
 Encoder power supply error

### Action
 (1) If the error only pops up during the power on and power off process of the robot, it does not affect the use of the robot and does not require handling;
(2) If the error keeps popping out and affects the use of the robot, which means the encoder is broken, please contact the technicians.

## 0x157382 Joint 6 encoder battery disconnection 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 encoder battery disconnection

### Reason
 Encoder power supply error

### Action
 (1) If the error only pops up during the power on and power off process of the robot, it does not affect the use of the robot and does not require handling;
(2) If the error keeps popping out and affects the use of the robot, which means the encoder is broken, please contact the technicians.

## 0x107383 Joint 1 encoder storage angle error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 encoder storage angle error

### Reason
 Error in joint motor position calibration

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to re-calibrate the Z value of the joint.

## 0x117383 Joint 2 encoder storage angle error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder storage angle error

### Reason
 Error in joint motor position calibration

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to re-calibrate the Z value of the joint.

## 0x127383 Joint 3 encoder storage angle error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 encoder storage angle error

### Reason
 Error in joint motor position calibration

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to re-calibrate the Z value of the joint.

## 0x137383 Joint 4 encoder storage angle error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 encoder storage angle error

### Reason
 Error in joint motor position calibration

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to re-calibrate the Z value of the joint.

## 0x147383 Joint 5 encoder storage angle error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 encoder storage angle error

### Reason
 Error in joint motor position calibration

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to re-calibrate the Z value of the joint.

## 0x157383 Joint 6 encoder storage angle error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 encoder storage angle error

### Reason
 Error in joint motor position calibration

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to re-calibrate the Z value of the joint.

## 0x107384 Joint 1 encoder count error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 encoder count error

### Reason
 Relative encoder count error

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to check the encoder installation or see if the code disk is dirty.

## 0x117384 Joint 2 encoder count error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder count error

### Reason
 Relative encoder count error

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to check the encoder installation or see if the code disk is dirty.

## 0x127384 Joint 3 encoder count error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 encoder count error

### Reason
 Relative encoder count error

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to check the encoder installation or see if the code disk is dirty.

## 0x137384 Joint 4 encoder count error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 encoder count error

### Reason
 Relative encoder count error

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to check the encoder installation or see if the code disk is dirty.

## 0x147384 Joint 5 encoder count error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 encoder count error

### Reason
 Relative encoder count error

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to check the encoder installation or see if the code disk is dirty.

## 0x157384 Joint 6 encoder count error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 encoder count error

### Reason
 Relative encoder count error

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to check the encoder installation or see if the code disk is dirty.

## 0x107385 Joint 1 two encoders verifying error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 two encoders verifying error

### Reason
 The position recorded by joint two encoders deviates, which exceed the threshold.

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Check whether there are serious collision or mechanical failure and contact the technicians.
(3) Contact the technicians to check the encoder installation or see if the code disk is dirty.

## 0x117385 Joint 2 two encoders verifying error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 two encoders verifying error

### Reason
 The position recorded by joint two encoders deviates, which exceed the threshold.

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Check whether there are serious collision or mechanical failure and contact the technicians.
(3) Contact the technicians to check the encoder installation or see if the code disk is dirty.

## 0x127385 Joint 3 two encoders verifying error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 two encoders verifying error

### Reason
 The position recorded by joint two encoders deviates, which exceed the threshold.

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Check whether there are serious collision or mechanical failure and contact the technicians.
(3) Contact the technicians to check the encoder installation or see if the code disk is dirty.

## 0x137385 Joint 4 two encoders verifying error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 two encoders verifying error

### Reason
 The position recorded by joint two encoders deviates, which exceed the threshold.

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Check whether there are serious collision or mechanical failure and contact the technicians.
(3) Contact the technicians to check the encoder installation or see if the code disk is dirty.

## 0x147385 Joint 5 two encoders verifying error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 two encoders verifying error

### Reason
 The position recorded by joint two encoders deviates, which exceed the threshold.

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Check whether there are serious collision or mechanical failure and contact the technicians.
(3) Contact the technicians to check the encoder installation or see if the code disk is dirty.

## 0x157385 Joint 6 two encoders verifying error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 two encoders verifying error

### Reason
 The position recorded by joint two encoders deviates, which exceed the threshold.

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Check whether there are serious collision or mechanical failure and contact the technicians.
(3) Contact the technicians to check the encoder installation or see if the code disk is dirty.

## 0x107387 Joint 1 Z-line capture failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 Z-line capture failure

### Reason
 Relative encoder Z-line capture failure

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to check and repair the relative encoder of the error joint.

## 0x117387 Joint 2 Z-line capture failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 Z-line capture failure

### Reason
 Relative encoder Z-line capture failure

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to check and repair the relative encoder of the error joint.

## 0x127387 Joint 3 Z-line capture failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 Z-line capture failure

### Reason
 Relative encoder Z-line capture failure

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to check and repair the relative encoder of the error joint.

## 0x137387 Joint 4 Z-line capture failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 Z-line capture failure

### Reason
 Relative encoder Z-line capture failure

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to check and repair the relative encoder of the error joint.

## 0x147387 Joint 5 Z-line capture failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 Z-line capture failure

### Reason
 Relative encoder Z-line capture failure

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to check and repair the relative encoder of the error joint.

## 0x157387 Joint 6 Z-line capture failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 Z-line capture failure

### Reason
 Relative encoder Z-line capture failure

### Action
 (1) Contact the technicians to check whether the production parameters of the error joint are correct.
(2) Contact the technicians to check and repair the relative encoder of the error joint.

## 0x108611 Joint 1 position deviation too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 position deviation too large

### Reason
 The deviation between the actual position feedback and the command position exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x118611 Joint 2 position deviation too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 position deviation too large

### Reason
 The deviation between the actual position feedback and the command position exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x128611 Joint 3 position deviation too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 position deviation too large

### Reason
 The deviation between the actual position feedback and the command position exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x138611 Joint 4 position deviation too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 position deviation too large

### Reason
 The deviation between the actual position feedback and the command position exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x148611 Joint 5 position deviation too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 position deviation too large

### Reason
 The deviation between the actual position feedback and the command position exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x158611 Joint 6 position deviation too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 position deviation too large

### Reason
 The deviation between the actual position feedback and the command position exceeds the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x108612 Joint 1 position command increments too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 position command increments too large

### Reason
 Position command increments is too large and exceed the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x118612 Joint 2 position command increments too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 position command increments too large

### Reason
 Position command increments is too large and exceed the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x128612 Joint 3 position command increments too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 position command increments too large

### Reason
 Position command increments is too large and exceed the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x138612 Joint 4 position command increments too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 position command increments too large

### Reason
 Position command increments is too large and exceed the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x148612 Joint 5 position command increments too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 position command increments too large

### Reason
 Position command increments is too large and exceed the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x158612 Joint 6 position command increments too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 position command increments too large

### Reason
 Position command increments is too large and exceed the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x108613 Joint 1 acceleration too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 acceleration too large

### Reason
 Position command acceleration is too large and exceed the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x118613 Joint 2 acceleration too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 acceleration too large

### Reason
 Position command acceleration is too large and exceed the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x128613 Joint 3 acceleration too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 acceleration too large

### Reason
 Position command acceleration is too large and exceed the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x138613 Joint 4 acceleration too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 acceleration too large

### Reason
 Position command acceleration is too large and exceed the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x148613 Joint 5 acceleration too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 acceleration too large

### Reason
 Position command acceleration is too large and exceed the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x158613 Joint 6 acceleration too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 acceleration too large

### Reason
 Position command acceleration is too large and exceed the threshold.

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Check if there are collision and the set payload is correct.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x108614 Joint 1 position command error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 position command error

### Reason
 Error in the position command from the controller

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Contact with the JAKA technicians to check the robot bus communication.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x118614 Joint 2 position command error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 position command error

### Reason
 Error in the position command from the controller

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Contact with the JAKA technicians to check the robot bus communication.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x128614 Joint 3 position command error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 position command error

### Reason
 Error in the position command from the controller

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Contact with the JAKA technicians to check the robot bus communication.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x138614 Joint 4 position command error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 position command error

### Reason
 Error in the position command from the controller

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Contact with the JAKA technicians to check the robot bus communication.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x148614 Joint 5 position command error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 position command error

### Reason
 Error in the position command from the controller

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Contact with the JAKA technicians to check the robot bus communication.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x158614 Joint 6 position command error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 position command error

### Reason
 Error in the position command from the controller

### Action
 (1) Please check if the program acceleration is set too high.
(2) Check the set transfer parameter of movement parts.
(3) Contact with the JAKA technicians to check the robot bus communication.
(4) If it is in servo mode, check whether the sending command is continuous or abnormal, and whether the inverse kinematics is continuous or abnormal.

## 0x108615 Joint 1 CAN communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 CAN communication error

### Reason
 Robot bus communication error

### Action
 Contact with the JAKA technicians to check the robot bus communication.

## 0x118615 Joint 2 CAN communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 CAN communication error

### Reason
 Robot bus communication error

### Action
 Contact with the JAKA technicians to check the robot bus communication.

## 0x128615 Joint 3 CAN communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 CAN communication error

### Reason
 Robot bus communication error

### Action
 Contact with the JAKA technicians to check the robot bus communication.

## 0x138615 Joint 4 CAN communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 CAN communication error

### Reason
 Robot bus communication error

### Action
 Contact with the JAKA technicians to check the robot bus communication.

## 0x148615 Joint 5 CAN communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 CAN communication error

### Reason
 Robot bus communication error

### Action
 Contact with the JAKA technicians to check the robot bus communication.

## 0x158615 Joint 6 CAN communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 CAN communication error

### Reason
 Robot bus communication error

### Action
 Contact with the JAKA technicians to check the robot bus communication.

## 0x103220 Joint 1 servo under-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 servo under-voltage

### Reason
 The busbar exceeds the under-voltage threshold of the hardware drive board.

### Action
 (1) Check whether the robot payload or acceleration is too large, please try to reduce them to operate.
(2) Check the robot connection cable.
(3) Contact the technicians to check the drive board.
(4) Contact with the JAKA technicians to check the communication and control cabinet power supply.

## 0x113220 Joint 2 servo under-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 servo under-voltage

### Reason
 The busbar exceeds the under-voltage threshold of the hardware drive board.

### Action
 (1) Check whether the robot payload or acceleration is too large, please try to reduce them to operate.
(2) Check the robot connection cable.
(3) Contact the technicians to check the drive board.
(4) Contact with the JAKA technicians to check the communication and control cabinet power supply.

## 0x123220 Joint 3 servo under-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 servo under-voltage

### Reason
 The busbar exceeds the under-voltage threshold of the hardware drive board.

### Action
 (1) Check whether the robot payload or acceleration is too large, please try to reduce them to operate.
(2) Check the robot connection cable.
(3) Contact the technicians to check the drive board.
(4) Contact with the JAKA technicians to check the communication and control cabinet power supply.

## 0x133220 Joint 4 servo under-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 servo under-voltage

### Reason
 The busbar exceeds the under-voltage threshold of the hardware drive board.

### Action
 (1) Check whether the robot payload or acceleration is too large, please try to reduce them to operate.
(2) Check the robot connection cable.
(3) Contact the technicians to check the drive board.
(4) Contact with the JAKA technicians to check the communication and control cabinet power supply.

## 0x143220 Joint 5 servo under-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 servo under-voltage

### Reason
 The busbar exceeds the under-voltage threshold of the hardware drive board.

### Action
 (1) Check whether the robot payload or acceleration is too large, please try to reduce them to operate.
(2) Check the robot connection cable.
(3) Contact the technicians to check the drive board.
(4) Contact with the JAKA technicians to check the communication and control cabinet power supply.

## 0x153220 Joint 6 servo under-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 servo under-voltage

### Reason
 The busbar exceeds the under-voltage threshold of the hardware drive board.

### Action
 (1) Check whether the robot payload or acceleration is too large, please try to reduce them to operate.
(2) Check the robot connection cable.
(3) Contact the technicians to check the drive board.
(4) Contact with the JAKA technicians to check the communication and control cabinet power supply.

## 0x103210 Joint 1 servo over-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 servo over-voltage

### Reason
 The busbar exceeds the over-voltage threshold of the hardware drive board.

### Action
 (1) Check whether the robot payload or acceleration is too large, please try to reduce them to operate.
(2) Check the bleeder plate of the control cabinet.
(3) Contact the technicians to check the drive board.

## 0x113210 Joint 2 servo over-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 servo over-voltage

### Reason
 The busbar exceeds the over-voltage threshold of the hardware drive board.

### Action
 (1) Check whether the robot payload or acceleration is too large, please try to reduce them to operate.
(2) Check the bleeder plate of the control cabinet.
(3) Contact the technicians to check the drive board.

## 0x123210 Joint 3 servo over-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 servo over-voltage

### Reason
 The busbar exceeds the over-voltage threshold of the hardware drive board.

### Action
 (1) Check whether the robot payload or acceleration is too large, please try to reduce them to operate.
(2) Check the bleeder plate of the control cabinet.
(3) Contact the technicians to check the drive board.

## 0x133210 Joint 4 servo over-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 servo over-voltage

### Reason
 The busbar exceeds the over-voltage threshold of the hardware drive board.

### Action
 (1) Check whether the robot payload or acceleration is too large, please try to reduce them to operate.
(2) Check the bleeder plate of the control cabinet.
(3) Contact the technicians to check the drive board.

## 0x143210 Joint 5 servo over-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 servo over-voltage

### Reason
 The busbar exceeds the over-voltage threshold of the hardware drive board.

### Action
 (1) Check whether the robot payload or acceleration is too large, please try to reduce them to operate.
(2) Check the bleeder plate of the control cabinet.
(3) Contact the technicians to check the drive board.

## 0x153210 Joint 6 servo over-voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 servo over-voltage

### Reason
 The busbar exceeds the over-voltage threshold of the hardware drive board.

### Action
 (1) Check whether the robot payload or acceleration is too large, please try to reduce them to operate.
(2) Check the bleeder plate of the control cabinet.
(3) Contact the technicians to check the drive board.

## 0x104310 Joint 1 servo over-temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 servo over-temperature

### Reason
 The temperature of the drive board exceeds the over-temperature threshold of the drive board.

### Action
 (1) Check whether the robot's ambient temperature exceeds the robot's operating temperature range.
(2) Check whether the external surface temperature of the joint is greater than 50 °C, if it is greater than 50 °C, please reduce the work intensity.
(3) Contact the technicians to check the drive board and reducer of the joint.

## 0x114310 Joint 2 servo over-temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 servo over-temperature

### Reason
 The temperature of the drive board exceeds the over-temperature threshold of the drive board.

### Action
 (1) Check whether the robot's ambient temperature exceeds the robot's operating temperature range.
(2) Check whether the external surface temperature of the joint is greater than 50 °C, if it is greater than 50 °C, please reduce the work intensity.
(3) Contact the technicians to check the drive board and reducer of the joint.

## 0x124310 Joint 3 servo over-temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 servo over-temperature

### Reason
 The temperature of the drive board exceeds the over-temperature threshold of the drive board.

### Action
 (1) Check whether the robot's ambient temperature exceeds the robot's operating temperature range.
(2) Check whether the external surface temperature of the joint is greater than 50 °C, if it is greater than 50 °C, please reduce the work intensity.
(3) Contact the technicians to check the drive board and reducer of the joint.

## 0x134310 Joint 4 servo over-temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 servo over-temperature

### Reason
 The temperature of the drive board exceeds the over-temperature threshold of the drive board.

### Action
 (1) Check whether the robot's ambient temperature exceeds the robot's operating temperature range.
(2) Check whether the external surface temperature of the joint is greater than 50 °C, if it is greater than 50 °C, please reduce the work intensity.
(3) Contact the technicians to check the drive board and reducer of the joint.

## 0x144310 Joint 5 servo over-temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 servo over-temperature

### Reason
 The temperature of the drive board exceeds the over-temperature threshold of the drive board.

### Action
 (1) Check whether the robot's ambient temperature exceeds the robot's operating temperature range.
(2) Check whether the external surface temperature of the joint is greater than 50 °C, if it is greater than 50 °C, please reduce the work intensity.
(3) Contact the technicians to check the drive board and reducer of the joint.

## 0x154310 Joint 6 servo over-temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 servo over-temperature

### Reason
 The temperature of the drive board exceeds the over-temperature threshold of the drive board.

### Action
 (1) Check whether the robot's ambient temperature exceeds the robot's operating temperature range.
(2) Check whether the external surface temperature of the joint is greater than 50 °C, if it is greater than 50 °C, please reduce the work intensity.
(3) Contact the technicians to check the drive board and reducer of the joint.

## 0x102350 Joint 1 module overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 module overload (I2T)

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x112350 Joint 2 module overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 module overload (I2T)

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x122350 Joint 3 module overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 module overload (I2T)

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x132350 Joint 4 module overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 module overload (I2T)

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x142350 Joint 5 module overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 module overload (I2T)

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x152350 Joint 6 module overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 module overload (I2T)

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x105480 Joint 1 servo over-power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 servo over-power

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x115480 Joint 2 servo over-power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 servo over-power

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x125480 Joint 3 servo over-power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 servo over-power

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x135480 Joint 4 servo over-power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 servo over-power

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x145480 Joint 5 servo over-power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 servo over-power

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x155480 Joint 6 servo over-power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 servo over-power

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x103380 Joint 1 encoder zero calibration failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 encoder zero calibration failure

### Reason
 Motor rotation is not as expected during the process of enabling on the joints

### Action
 (1) Contact the technicians to check whether the parameters of the error joint are correct.
(2) Try to enable and disable the robot to check whether the brake works.
(3) Contact the technicians to check the joint ABZ wiring or ABZ code disk.

## 0x113380 Joint 2 encoder zero calibration failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder zero calibration failure

### Reason
 Motor rotation is not as expected during the process of enabling on the joints

### Action
 (1) Contact the technicians to check whether the parameters of the error joint are correct.
(2) Try to enable and disable the robot to check whether the brake works.
(3) Contact the technicians to check the joint ABZ wiring or ABZ code disk.

## 0x123380 Joint 3 encoder zero calibration failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 encoder zero calibration failure

### Reason
 Motor rotation is not as expected during the process of enabling on the joints

### Action
 (1) Contact the technicians to check whether the parameters of the error joint are correct.
(2) Try to enable and disable the robot to check whether the brake works.
(3) Contact the technicians to check the joint ABZ wiring or ABZ code disk.

## 0x133380 Joint 4 encoder zero calibration failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 encoder zero calibration failure

### Reason
 Motor rotation is not as expected during the process of enabling on the joints

### Action
 (1) Contact the technicians to check whether the parameters of the error joint are correct.
(2) Try to enable and disable the robot to check whether the brake works.
(3) Contact the technicians to check the joint ABZ wiring or ABZ code disk.

## 0x143380 Joint 5 encoder zero calibration failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 encoder zero calibration failure

### Reason
 Motor rotation is not as expected during the process of enabling on the joints

### Action
 (1) Contact the technicians to check whether the parameters of the error joint are correct.
(2) Try to enable and disable the robot to check whether the brake works.
(3) Contact the technicians to check the joint ABZ wiring or ABZ code disk.

## 0x153380 Joint 6 encoder zero calibration failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 encoder zero calibration failure

### Reason
 Motor rotation is not as expected during the process of enabling on the joints

### Action
 (1) Contact the technicians to check whether the parameters of the error joint are correct.
(2) Try to enable and disable the robot to check whether the brake works.
(3) Contact the technicians to check the joint ABZ wiring or ABZ code disk.

## 0x103381 Joint 1 output phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 output phase loss

### Reason
 Three-phase current output error during enabling the robot

### Action
 (1) Contact the technicians to check the joint three-phase wiring.
(2) Contact the technicians to check the joint motor circuit.
(3) Contact the technicians to check the joint drive board.

## 0x113381 Joint 2 output phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 output phase loss

### Reason
 Three-phase current output error during enabling the robot

### Action
 (1) Contact the technicians to check the joint three-phase wiring.
(2) Contact the technicians to check the joint motor circuit.
(3) Contact the technicians to check the joint drive board.

## 0x123381 Joint 3 output phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 output phase loss

### Reason
 Three-phase current output error during enabling the robot

### Action
 (1) Contact the technicians to check the joint three-phase wiring.
(2) Contact the technicians to check the joint motor circuit.
(3) Contact the technicians to check the joint drive board.

## 0x133381 Joint 4 output phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 output phase loss

### Reason
 Three-phase current output error during enabling the robot

### Action
 (1) Contact the technicians to check the joint three-phase wiring.
(2) Contact the technicians to check the joint motor circuit.
(3) Contact the technicians to check the joint drive board.

## 0x143381 Joint 5 output phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 output phase loss

### Reason
 Three-phase current output error during enabling the robot

### Action
 (1) Contact the technicians to check the joint three-phase wiring.
(2) Contact the technicians to check the joint motor circuit.
(3) Contact the technicians to check the joint drive board.

## 0x153381 Joint 6 output phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 output phase loss

### Reason
 Three-phase current output error during enabling the robot

### Action
 (1) Contact the technicians to check the joint three-phase wiring.
(2) Contact the technicians to check the joint motor circuit.
(3) Contact the technicians to check the joint drive board.

## 0x103130 Joint 1 input phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 input phase loss

### Reason
 Three-phase current output error during enabling the robot

### Action
 (1) Contact the technicians to check the joint three-phase wiring.
(2) Contact the technicians to check the joint motor circuit.
(3) Contact the technicians to check the joint drive board.

## 0x113130 Joint 2 input phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 input phase loss

### Reason
 Three-phase current output error during enabling the robot

### Action
 (1) Contact the technicians to check the joint three-phase wiring.
(2) Contact the technicians to check the joint motor circuit.
(3) Contact the technicians to check the joint drive board.

## 0x123130 Joint 3 input phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 input phase loss

### Reason
 Three-phase current output error during enabling the robot

### Action
 (1) Contact the technicians to check the joint three-phase wiring.
(2) Contact the technicians to check the joint motor circuit.
(3) Contact the technicians to check the joint drive board.

## 0x133130 Joint 4 input phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 input phase loss

### Reason
 Three-phase current output error during enabling the robot

### Action
 (1) Contact the technicians to check the joint three-phase wiring.
(2) Contact the technicians to check the joint motor circuit.
(3) Contact the technicians to check the joint drive board.

## 0x143130 Joint 5 input phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 input phase loss

### Reason
 Three-phase current output error during enabling the robot

### Action
 (1) Contact the technicians to check the joint three-phase wiring.
(2) Contact the technicians to check the joint motor circuit.
(3) Contact the technicians to check the joint drive board.

## 0x153130 Joint 6 input phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 input phase loss

### Reason
 Three-phase current output error during enabling the robot

### Action
 (1) Contact the technicians to check the joint three-phase wiring.
(2) Contact the technicians to check the joint motor circuit.
(3) Contact the technicians to check the joint drive board.

## 0x105441 Joint 1 internal connection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 internal connection error

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x115441 Joint 2 internal connection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 internal connection error

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x125441 Joint 3 internal connection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 internal connection error

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x135441 Joint 4 internal connection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 internal connection error

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x145441 Joint 5 internal connection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 internal connection error

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x155441 Joint 6 internal connection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 internal connection error

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x105280 Joint 1 internal parameter error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 internal parameter error

### Reason
 The servo parameter exceeds the threshold, and the error will be popped out only when the powering on.

### Action
 Contact the technicians to check the joint internal parameters.

## 0x115280 Joint 2 internal parameter error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 internal parameter error

### Reason
 The servo parameter exceeds the threshold, and the error will be popped out only when the powering on.

### Action
 Contact the technicians to check the joint internal parameters.

## 0x125280 Joint 3 internal parameter error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 internal parameter error

### Reason
 The servo parameter exceeds the threshold, and the error will be popped out only when the powering on.

### Action
 Contact the technicians to check the joint internal parameters.

## 0x135280 Joint 4 internal parameter error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 internal parameter error

### Reason
 The servo parameter exceeds the threshold, and the error will be popped out only when the powering on.

### Action
 Contact the technicians to check the joint internal parameters.

## 0x145280 Joint 5 internal parameter error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 internal parameter error

### Reason
 The servo parameter exceeds the threshold, and the error will be popped out only when the powering on.

### Action
 Contact the technicians to check the joint internal parameters.

## 0x155280 Joint 6 internal parameter error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 internal parameter error

### Reason
 The servo parameter exceeds the threshold, and the error will be popped out only when the powering on.

### Action
 Contact the technicians to check the joint internal parameters.

## 0x105281 Joint 1 PID overflow 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 PID overflow

### Reason
 Servo PID operation exceeds limit.

### Action
 Contact the JAKA technicians.

## 0x115281 Joint 2 PID overflow 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 PID overflow

### Reason
 Servo PID operation exceeds limit.

### Action
 Contact the JAKA technicians.

## 0x125281 Joint 3 PID overflow 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 PID overflow

### Reason
 Servo PID operation exceeds limit.

### Action
 Contact the JAKA technicians.

## 0x135281 Joint 4 PID overflow 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 PID overflow

### Reason
 Servo PID operation exceeds limit.

### Action
 Contact the JAKA technicians.

## 0x145281 Joint 5 PID calculation overflow 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 PID calculation overflow

### Reason
 Servo PID operation exceeds limit.

### Action
 Contact the JAKA technicians.

## 0x155281 Joint 6 PID overflow 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 PID overflow

### Reason
 Servo PID operation exceeds limit.

### Action
 Contact the JAKA technicians.

## 0x105211 Joint 1 model selection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 model selection error

### Reason
 Mismatch between driver board and the servo parameters.

### Action
 Contact the technicians to check the joint hardware version and the servo parameters.

## 0x115211 Joint 2 model selection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 model selection error

### Reason
 Mismatch between driver board and the servo parameters.

### Action
 Contact the technicians to check the joint hardware version and the servo parameters.

## 0x125211 Joint 3 model selection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 model selection error

### Reason
 Mismatch between driver board and the servo parameters.

### Action
 Contact the technicians to check the joint hardware version and the servo parameters.

## 0x135211 Joint 4 model selection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 model selection error

### Reason
 Mismatch between driver board and the servo parameters.

### Action
 Contact the technicians to check the joint hardware version and the servo parameters.

## 0x145211 Joint 5 model selection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 model selection error

### Reason
 Mismatch between driver board and the servo parameters.

### Action
 Contact the technicians to check the joint hardware version and the servo parameters.

## 0x155211 Joint 6 model selection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 model selection error

### Reason
 Mismatch between driver board and the servo parameters.

### Action
 Contact the technicians to check the joint hardware version and the servo parameters.

## 0x104210 Joint 1 motor over-temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 motor over-temperature

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x114210 Joint 2 motor over-temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 motor over-temperature

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x124210 Joint 3 motor over-temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 motor over-temperature

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x134210 Joint 4 motor over-temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 motor over-temperature

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x144210 Joint 5 motor over-temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 motor over-temperature

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x154210 Joint 6 motor over-temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 motor over-temperature

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x105210 Joint 1 parameter settings do not match the hardware power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 parameter settings do not match the hardware power

### Reason
 Mismatch among driver board, motor brand and the servo parameters.

### Action
 (1) Contact the technicians to check the joint production parameters.
(2) Contact the technicians to check the joint drive board.

## 0x115210 Joint 2 parameter settings do not match the hardware power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 parameter settings do not match the hardware power

### Reason
 Mismatch among driver board, motor brand and the servo parameters.

### Action
 (1) Contact the technicians to check the joint production parameters.
(2) Contact the technicians to check the joint drive board.

## 0x125210 Joint 3 parameter settings do not match the hardware power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 parameter settings do not match the hardware power

### Reason
 Mismatch among driver board, motor brand and the servo parameters.

### Action
 (1) Contact the technicians to check the joint production parameters.
(2) Contact the technicians to check the joint drive board.

## 0x135210 Joint 4 parameter settings do not match the hardware power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 parameter settings do not match the hardware power

### Reason
 Mismatch among driver board, motor brand and the servo parameters.

### Action
 (1) Contact the technicians to check the joint production parameters.
(2) Contact the technicians to check the joint drive board.

## 0x145210 Joint 5 parameter settings do not match the hardware power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 parameter settings do not match the hardware power

### Reason
 Mismatch among driver board, motor brand and the servo parameters.

### Action
 (1) Contact the technicians to check the joint production parameters.
(2) Contact the technicians to check the joint drive board.

## 0x155210 Joint 6 parameter settings do not match the hardware power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 parameter settings do not match the hardware power

### Reason
 Mismatch among driver board, motor brand and the servo parameters.

### Action
 (1) Contact the technicians to check the joint production parameters.
(2) Contact the technicians to check the joint drive board.

## 0x105282 Joint 1 EEPROM error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 EEPROM error

### Reason
 Hardware EEPROM chip read-write error

### Action
 (1) Try to power on and off robots several times to check for time series fluctuations. If the error still pops out, contact the technicians.
(2) Contact the technicians to check the joint drive board.

## 0x115282 Joint 2 EEPROM error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 EEPROM error

### Reason
 Hardware EEPROM chip read-write error

### Action
 (1) Try to power on and off robots several times to check for time series fluctuations. If the error still pops out, contact the technicians.
(2) Contact the technicians to check the joint drive board.

## 0x125282 Joint 3 EEPROM error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 EEPROM error

### Reason
 Hardware EEPROM chip read-write error

### Action
 (1) Try to power on and off robots several times to check for time series fluctuations. If the error still pops out, contact the technicians.
(2) Contact the technicians to check the joint drive board.

## 0x135282 Joint 4 EEPROM error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 EEPROM error

### Reason
 Hardware EEPROM chip read-write error

### Action
 (1) Try to power on and off robots several times to check for time series fluctuations. If the error still pops out, contact the technicians.
(2) Contact the technicians to check the joint drive board.

## 0x145282 Joint 5 EEPROM error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 EEPROM error

### Reason
 Hardware EEPROM chip read-write error

### Action
 (1) Try to power on and off robots several times to check for time series fluctuations. If the error still pops out, contact the technicians.
(2) Contact the technicians to check the joint drive board.

## 0x155282 Joint 6 EEPROM error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 EEPROM error

### Reason
 Hardware EEPROM chip read-write error

### Action
 (1) Try to power on and off robots several times to check for time series fluctuations. If the error still pops out, contact the technicians.
(2) Contact the technicians to check the joint drive board.

## 0x105283 Joint 1 enabling failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 enabling failure

### Reason
 During the enabling, the enable fails due to other system failures.

### Action
 Check whether there are other error messages in the system, and enable the robot after processing the error.

## 0x115283 Joint 2 enabling failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 enabling failure

### Reason
 During the enabling, the enable fails due to other system failures.

### Action
 Check whether there are other error messages in the system, and enable the robot after processing the error.

## 0x125283 Joint 3 enabling failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 enabling failure

### Reason
 During the enabling, the enable fails due to other system failures.

### Action
 Check whether there are other error messages in the system, and enable the robot after processing the error.

## 0x135283 Joint 4 enabling failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 enabling failure

### Reason
 During the enabling, the enable fails due to other system failures.

### Action
 Check whether there are other error messages in the system, and enable the robot after processing the error.

## 0x145283 Joint 5 enabling failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 enabling failure

### Reason
 During the enabling, the enable fails due to other system failures.

### Action
 Check whether there are other error messages in the system, and enable the robot after processing the error.

## 0x155283 Joint 6 enabling failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 enabling failure

### Reason
 During the enabling, the enable fails due to other system failures.

### Action
 Check whether there are other error messages in the system, and enable the robot after processing the error.

## 0x106010 Joint 1 encoder overheating 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 1 encoder overheating

### Reason
 Encoder temperature exception

### Action
 (1) Check whether the joint temperature exceeds the using threshold and reduce the robot work intensity.
(2) Contact the technicians to check whether the joint and encoder are correct.

## 0x116010 Joint 2 encoder overheating 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder overheating

### Reason
 Encoder temperature exception

### Action
 (1) Check whether the joint temperature exceeds the using threshold and reduce the robot work intensity.
(2) Contact the technicians to check whether the joint and encoder are correct.

## 0x126010 Joint 3 encoder overheating 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 3 encoder overheating

### Reason
 Encoder temperature exception

### Action
 (1) Check whether the joint temperature exceeds the using threshold and reduce the robot work intensity.
(2) Contact the technicians to check whether the joint and encoder are correct.

## 0x136010 Joint 4 encoder overheating 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 4 encoder overheating

### Reason
 Encoder temperature exception

### Action
 (1) Check whether the joint temperature exceeds the using threshold and reduce the robot work intensity.
(2) Contact the technicians to check whether the joint and encoder are correct.

## 0x146010 Joint 5 encoder overheating 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 5 encoder overheating

### Reason
 Encoder temperature exception

### Action
 (1) Check whether the joint temperature exceeds the using threshold and reduce the robot work intensity.
(2) Contact the technicians to check whether the joint and encoder are correct.

## 0x156010 Joint 6 encoder overheating 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 6 encoder overheating

### Reason
 Encoder temperature exception

### Action
 (1) Check whether the joint temperature exceeds the using threshold and reduce the robot work intensity.
(2) Contact the technicians to check whether the joint and encoder are correct.

## 0x107180 Joint 1 motor overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 motor overload (I2T)

### Reason
 The motor output current is high, and it lasts for a period of time.

### Action
 (1) Check whether there was collision before the joint overload.
(2) Check whether the actual payload exceeds the rating payload.
(3) Contact the technicians to check the parameters of error joint.
(4) Test the error joint brake works or not with dragging the robot.
(5) Contact the technicians to check whether the error joint is mechanically stuck.
(6) Contact the technicians to check whether the readings of ABZ encoder of rotor are correct.

## 0x117180 Joint 2 motor overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 motor overload (I2T)

### Reason
 The motor output current is high, and it lasts for a period of time.

### Action
 (1) Check whether there was collision before the joint overload.
(2) Check whether the actual payload exceeds the rating payload.
(3) Contact the technicians to check the parameters of error joint.
(4) Test the error joint brake works or not with dragging the robot.
(5) Contact the technicians to check whether the error joint is mechanically stuck.
(6) Contact the technicians to check whether the readings of ABZ encoder of rotor are correct.

## 0x127180 Joint 3 motor overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 motor overload (I2T)

### Reason
 The motor output current is high, and it lasts for a period of time.

### Action
 (1) Check whether there was collision before the joint overload.
(2) Check whether the actual payload exceeds the rating payload.
(3) Contact the technicians to check the parameters of error joint.
(4) Test the error joint brake works or not with dragging the robot.
(5) Contact the technicians to check whether the error joint is mechanically stuck.
(6) Contact the technicians to check whether the readings of ABZ encoder of rotor are correct.

## 0x137180 Joint 4 motor overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 motor overload (I2T)

### Reason
 The motor output current is high, and it lasts for a period of time.

### Action
 (1) Check whether there was collision before the joint overload.
(2) Check whether the actual payload exceeds the rating payload.
(3) Contact the technicians to check the parameters of error joint.
(4) Test the error joint brake works or not with dragging the robot.
(5) Contact the technicians to check whether the error joint is mechanically stuck.
(6) Contact the technicians to check whether the readings of ABZ encoder of rotor are correct.

## 0x147180 Joint 5 motor overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 motor overload (I2T)

### Reason
 The motor output current is high, and it lasts for a period of time.

### Action
 (1) Check whether there was collision before the joint overload.
(2) Check whether the actual payload exceeds the rating payload.
(3) Contact the technicians to check the parameters of error joint.
(4) Test the error joint brake works or not with dragging the robot.
(5) Contact the technicians to check whether the error joint is mechanically stuck.
(6) Contact the technicians to check whether the readings of ABZ encoder of rotor are correct.

## 0x157180 Joint 6 motor overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 motor overload (I2T)

### Reason
 The motor output current is high, and it lasts for a period of time.

### Action
 (1) Check whether there was collision before the joint overload.
(2) Check whether the actual payload exceeds the rating payload.
(3) Contact the technicians to check the parameters of error joint.
(4) Test the error joint brake works or not with dragging the robot.
(5) Contact the technicians to check whether the error joint is mechanically stuck.
(6) Contact the technicians to check whether the readings of ABZ encoder of rotor are correct.

## 0x107181 Joint 1 motor contracting brake error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 motor contracting brake error

### Reason
 The electromagnet cannot be detected

### Action
 (1) Check whether the wiring of the joint electromagnet is correct;
(2) Measure the resistance of electromagnet within a reasonable range.

## 0x117181 Joint 2 motor contracting brake error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 motor contracting brake error

### Reason
 The electromagnet cannot be detected

### Action
 (1) Check whether the wiring of the joint electromagnet is correct;
(2) Measure the resistance of electromagnet within a reasonable range.

## 0x127181 Joint 3 motor contracting brake error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 motor contracting brake error

### Reason
 The electromagnet cannot be detected

### Action
 (1) Check whether the wiring of the joint electromagnet is correct;
(2) Measure the resistance of electromagnet within a reasonable range.

## 0x137181 Joint 4 motor contracting brake error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 motor contracting brake error

### Reason
 The electromagnet cannot be detected

### Action
 (1) Check whether the wiring of the joint electromagnet is correct;
(2) Measure the resistance of electromagnet within a reasonable range.

## 0x147181 Joint 5 motor contracting brake error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 motor contracting brake error

### Reason
 The electromagnet cannot be detected

### Action
 (1) Check whether the wiring of the joint electromagnet is correct;
(2) Measure the resistance of electromagnet within a reasonable range.

## 0x157181 Joint 6 motor contracting brake error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 motor contracting brake error

### Reason
 The electromagnet cannot be detected

### Action
 (1) Check whether the wiring of the joint electromagnet is correct;
(2) Measure the resistance of electromagnet within a reasonable range.

## 0x107182 Joint 1 high-frequency signal injection direction error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 high-frequency signal injection direction error

### Reason
 The actual magnetic pole direction of the motor is inconsistent with the direction of pulse injection calculation.

### Action
 (1) Contact the technicians to check the motor parameters;
(2) Check whether the motor phase-sequence wiring is correct;
(3) Contact the technicians to check the joint drive board.

## 0x117182 Joint 2 high-frequency signal injection direction error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 high-frequency signal injection direction error

### Reason
 The actual magnetic pole direction of the motor is inconsistent with the direction of pulse injection calculation.

### Action
 (1) Contact the technicians to check the motor parameters;
(2) Check whether the motor phase-sequence wiring is correct;
(3) Contact the technicians to check the joint drive board.

## 0x127182 Joint 3 high-frequency signal injection direction error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 high-frequency signal injection direction error

### Reason
 The actual magnetic pole direction of the motor is inconsistent with the direction of pulse injection calculation.

### Action
 (1) Contact the technicians to check the motor parameters;
(2) Check whether the motor phase-sequence wiring is correct;
(3) Contact the technicians to check the joint drive board.

## 0x137182 Joint 4 high-frequency signal injection direction error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 high-frequency signal injection direction error

### Reason
 The actual magnetic pole direction of the motor is inconsistent with the direction of pulse injection calculation.

### Action
 (1) Contact the technicians to check the motor parameters;
(2) Check whether the motor phase-sequence wiring is correct;
(3) Contact the technicians to check the joint drive board.

## 0x147182 Joint 5 high-frequency signal injection direction error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 high-frequency signal injection direction error

### Reason
 The actual magnetic pole direction of the motor is inconsistent with the direction of pulse injection calculation.

### Action
 (1) Contact the technicians to check the motor parameters;
(2) Check whether the motor phase-sequence wiring is correct;
(3) Contact the technicians to check the joint drive board.

## 0x157182 Joint 6 high-frequency signal injection direction error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 high-frequency signal injection direction error

### Reason
 The actual magnetic pole direction of the motor is inconsistent with the direction of pulse injection calculation.

### Action
 (1) Contact the technicians to check the motor parameters;
(2) Check whether the motor phase-sequence wiring is correct;
(3) Contact the technicians to check the joint drive board.

## 0x107386 Joint 1 encoder internal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 encoder internal error

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x117386 Joint 2 encoder internal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder internal error

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x127386 Joint 3 encoder internal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 encoder internal error

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x137386 Joint 4 encoder internal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 encoder internal error

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x147386 Joint 5 encoder internal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 encoder internal error

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x157386 Joint 6 encoder internal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 encoder internal error

### Reason
 Abandoned

### Action
 Please check whether the servo is the debugging version, or contact the technical service personnel.

## 0x107580 Joint 1 dynamics overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 dynamics overrun

### Reason
 Torque feedforward exceeds servo threshold.

### Action
 Contact the JAKA technicians.

## 0x117580 Joint 2 dynamics overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 dynamics overrun

### Reason
 Torque feedforward exceeds servo threshold.

### Action
 Contact the JAKA technicians.

## 0x127580 Joint 3 dynamics overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 dynamics overrun

### Reason
 Torque feedforward exceeds servo threshold.

### Action
 Contact the JAKA technicians.

## 0x137580 Joint 4 dynamics overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 dynamics overrun

### Reason
 Torque feedforward exceeds servo threshold.

### Action
 Contact the JAKA technicians.

## 0x147580 Joint 5 dynamics overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 dynamics overrun

### Reason
 Torque feedforward exceeds servo threshold.

### Action
 Contact the JAKA technicians.

## 0x157580 Joint 6 dynamics overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 dynamics overrun

### Reason
 Torque feedforward exceeds servo threshold.

### Action
 Contact the JAKA technicians.

## 0x103211 Joint 1 power supply of drive board error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 power supply of drive board error

### Reason
 Drive board damage

### Action
 Contact the JAKA technicians.

## 0x113211 Joint 2 power supply of drive board error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 power supply of drive board error

### Reason
 Drive board damage

### Action
 Contact the JAKA technicians.

## 0x123211 Joint 3 power supply of drive board error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 power supply of drive board error

### Reason
 Drive board damage

### Action
 Contact the JAKA technicians.

## 0x133211 Joint 4 power supply of drive board error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 power supply of drive board error

### Reason
 Drive board damage

### Action
 Contact the JAKA technicians.

## 0x143211 Joint 5 power supply of drive board error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 power supply of drive board error

### Reason
 Drive board damage

### Action
 Contact the JAKA technicians.

## 0x153211 Joint 6 power supply of drive board error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 power supply of drive board error

### Reason
 Drive board damage

### Action
 Contact the JAKA technicians.

## 0x107388 Joint 1 encoder magnetic signal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 encoder magnetic signal error

### Reason
 Encoder signal amplitude error, magnetic mode error, signal loss, signal error.

### Action
 (1) Check whether the error is about the fixed joint. Contact the technicians to check whether the joint and encoder are correct.
(2) Please check whether there is external signal or magnetic signal interference in the working environment or the robot.

## 0x117388 Joint 2 encoder magnetic signal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder magnetic signal error

### Reason
 Encoder signal amplitude error, magnetic mode error, signal loss, signal error.

### Action
 (1) Check whether the error is about the fixed joint. Contact the technicians to check whether the joint and encoder are correct.
(2) Please check whether there is external signal or magnetic signal interference in the working environment or the robot.

## 0x127388 Joint 3 encoder magnetic signal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 encoder magnetic signal error

### Reason
 Encoder signal amplitude error, magnetic mode error, signal loss, signal error.

### Action
 (1) Check whether the error is about the fixed joint. Contact the technicians to check whether the joint and encoder are correct.
(2) Please check whether there is external signal or magnetic signal interference in the working environment or the robot.

## 0x137388 Joint 4 encoder magnetic signal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 encoder magnetic signal error

### Reason
 Encoder signal amplitude error, magnetic mode error, signal loss, signal error.

### Action
 (1) Check whether the error is about the fixed joint. Contact the technicians to check whether the joint and encoder are correct.
(2) Please check whether there is external signal or magnetic signal interference in the working environment or the robot.

## 0x147388 Joint 5 encoder magnetic signal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 encoder magnetic signal error

### Reason
 Encoder signal amplitude error, magnetic mode error, signal loss, signal error.

### Action
 (1) Check whether the error is about the fixed joint. Contact the technicians to check whether the joint and encoder are correct.
(2) Please check whether there is external signal or magnetic signal interference in the working environment or the robot.

## 0x157388 Joint 6 encoder magnetic signal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 encoder magnetic signal error

### Reason
 Encoder signal amplitude error, magnetic mode error, signal loss, signal error.

### Action
 (1) Check whether the error is about the fixed joint. Contact the technicians to check whether the joint and encoder are correct.
(2) Please check whether there is external signal or magnetic signal interference in the working environment or the robot.

## 0x108000 Joint 1 position deviation 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 1 position deviation

### Reason
 The collision detected by the servo position error.

### Action
 (1) Check whether there was collision.
(2) Please check if the program acceleration is set too high.
(3) Check the set transfer parameter of movement parts.
(4) Please check whether the payload settings is correct.

## 0x118000 Joint 2 position deviation 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 2 position deviation

### Reason
 The collision detected by the servo position error.

### Action
 (1) Check whether there was collision.
(2) Please check if the program acceleration is set too high.
(3) Check the set transfer parameter of movement parts.
(4) Please check whether the payload settings is correct.

## 0x128000 Joint 3 position deviation 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 3 position deviation

### Reason
 The collision detected by the servo position error.

### Action
 (1) Check whether there was collision.
(2) Please check if the program acceleration is set too high.
(3) Check the set transfer parameter of movement parts.
(4) Please check whether the payload settings is correct.

## 0x138000 Joint 4 position deviation 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 4 position deviation

### Reason
 The collision detected by the servo position error.

### Action
 (1) Check whether there was collision.
(2) Please check if the program acceleration is set too high.
(3) Check the set transfer parameter of movement parts.
(4) Please check whether the payload settings is correct.

## 0x148000 Joint 5 position deviation 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 5 position deviation

### Reason
 The collision detected by the servo position error.

### Action
 (1) Check whether there was collision.
(2) Please check if the program acceleration is set too high.
(3) Check the set transfer parameter of movement parts.
(4) Please check whether the payload settings is correct.

## 0x158000 Joint 6 position deviation 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 6 position deviation

### Reason
 The collision detected by the servo position error.

### Action
 (1) Check whether there was collision.
(2) Please check if the program acceleration is set too high.
(3) Check the set transfer parameter of movement parts.
(4) Please check whether the payload settings is correct.

## 0x108001 Joint 1 position deviation 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 1 position deviation

### Reason
 The collision detected by the servo position error.

### Action
 (1) Check whether the robot collides.
(2) Please check whether the acceleration of the robot movement is set too large.
(3) Check whether the payload of the robot exceeds the range.
(4) Please check whether the mounting orientation of the robot in the software is consistent with the actual orientation.
(5) Please check whether the movement segment transfer is used incorrectly.

## 0x118001 Joint 2 position deviation 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 2 position deviation

### Reason
 The collision detected by the servo position error.

### Action
 (1) Check whether the robot collides.
(2) Please check whether the acceleration of the robot movement is set too large.
(3) Check whether the payload of the robot exceeds the range.
(4) Please check whether the mounting orientation of the robot in the software is consistent with the actual orientation.
(5) Please check whether the movement segment transfer is used incorrectly.

## 0x128001 Joint 3 position deviation 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 3 position deviation

### Reason
 The collision detected by the servo position error.

### Action
 (1) Check whether the robot collides.
(2) Please check whether the acceleration of the robot movement is set too large.
(3) Check whether the payload of the robot exceeds the range.
(4) Please check whether the mounting orientation of the robot in the software is consistent with the actual orientation.
(5) Please check whether the movement segment transfer is used incorrectly.

## 0x138001 Joint 4 position deviation 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 4 position deviation

### Reason
 The collision detected by the servo position error.

### Action
 (1) Check whether the robot collides.
(2) Please check whether the acceleration of the robot movement is set too large.
(3) Check whether the payload of the robot exceeds the range.
(4) Please check whether the mounting orientation of the robot in the software is consistent with the actual orientation.
(5) Please check whether the movement segment transfer is used incorrectly.

## 0x148001 Joint 5 position deviation 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 5 position deviation

### Reason
 The collision detected by the servo position error.

### Action
 (1) Check whether the robot collides.
(2) Please check whether the acceleration of the robot movement is set too large.
(3) Check whether the payload of the robot exceeds the range.
(4) Please check whether the mounting orientation of the robot in the software is consistent with the actual orientation.
(5) Please check whether the movement segment transfer is used incorrectly.

## 0x158001 Joint 6 position deviation 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 6 position deviation

### Reason
 The collision detected by the servo position error.

### Action
 (1) Check whether the robot collides.
(2) Please check whether the acceleration of the robot movement is set too large.
(3) Check whether the payload of the robot exceeds the range.
(4) Please check whether the mounting orientation of the robot in the software is consistent with the actual orientation.
(5) Please check whether the movement segment transfer is used incorrectly.

## 0x105201 Joint 1 parameter locked 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 1 parameter locked

### Reason
 In the R176 version, a write protection function has been added to the key parameters of the servo to avoid mis-operation of the servo parameters.

### Action
 Contact the technicians to check the parameters of error joint.

## 0x115201 Joint 2 parameter locked 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 2 parameter locked

### Reason
 In the R176 version, a write protection function has been added to the key parameters of the servo to avoid mis-operation of the servo parameters.

### Action
 Contact the technicians to check the parameters of error joint.

## 0x125201 Joint 3 parameter locked 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 3 parameter locked

### Reason
 In the R176 version, a write protection function has been added to the key parameters of the servo to avoid mis-operation of the servo parameters.

### Action
 Contact the technicians to check the parameters of error joint.

## 0x135201 Joint 4 parameter locked 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 4 parameter locked

### Reason
 In the R176 version, a write protection function has been added to the key parameters of the servo to avoid mis-operation of the servo parameters.

### Action
 Contact the technicians to check the parameters of error joint.

## 0x145201 Joint 5 parameter locked 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 5 parameter locked

### Reason
 In the R176 version, a write protection function has been added to the key parameters of the servo to avoid mis-operation of the servo parameters.

### Action
 Contact the technicians to check the parameters of error joint.

## 0x155201 Joint 6 parameter locked 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 6 parameter locked

### Reason
 In the R176 version, a write protection function has been added to the key parameters of the servo to avoid mis-operation of the servo parameters.

### Action
 Contact the technicians to check the parameters of error joint.

## 0x105202 Joint 1 zero calibration and DH parameter conflict 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 zero calibration and DH parameter conflict

### Reason
 When performing mechanical zero calibration, the servo will check whether the current model has been calibrated with DH parameters before leaving the factory. Using the mechanical zero calibration function for a model that has already been calibrated will cause the DH errors and eventually cause the robot to lose accuracy.

### Action
 Contact the technicians to check.

## 0x115202 Joint 2 zero calibration and DH parameter conflict 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 zero calibration and DH parameter conflict

### Reason
 When performing mechanical zero calibration, the servo will check whether the current model has been calibrated with DH parameters before leaving the factory. Using the mechanical zero calibration function for a model that has already been calibrated will cause the DH errors and eventually cause the robot to lose accuracy.

### Action
 Contact the technicians to check.

## 0x125202 Joint 3 zero calibration and DH parameter conflict 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 zero calibration and DH parameter conflict

### Reason
 When performing mechanical zero calibration, the servo will check whether the current model has been calibrated with DH parameters before leaving the factory. Using the mechanical zero calibration function for a model that has already been calibrated will cause the DH errors and eventually cause the robot to lose accuracy.

### Action
 Contact the technicians to check.

## 0x135202 Joint 4 zero calibration and DH parameter conflict 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 zero calibration and DH parameter conflict

### Reason
 When performing mechanical zero calibration, the servo will check whether the current model has been calibrated with DH parameters before leaving the factory. Using the mechanical zero calibration function for a model that has already been calibrated will cause the DH errors and eventually cause the robot to lose accuracy.

### Action
 Contact the technicians to check.

## 0x145202 Joint 5 zero calibration and DH parameter conflict 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 zero calibration and DH parameter conflict

### Reason
 When performing mechanical zero calibration, the servo will check whether the current model has been calibrated with DH parameters before leaving the factory. Using the mechanical zero calibration function for a model that has already been calibrated will cause the DH errors and eventually cause the robot to lose accuracy.

### Action
 Contact the technicians to check.

## 0x155202 Joint 6 zero calibration and DH parameter conflict 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 zero calibration and DH parameter conflict

### Reason
 When performing mechanical zero calibration, the servo will check whether the current model has been calibrated with DH parameters before leaving the factory. Using the mechanical zero calibration function for a model that has already been calibrated will cause the DH errors and eventually cause the robot to lose accuracy.

### Action
 Contact the technicians to check.

## 0x108616 Joint 1 temperature sensor communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 temperature sensor communication error

### Reason
 Joint internal temperature sensor error

### Action
 Please check the temperature sensor of the IIC interface.

## 0x118616 Joint 2 temperature sensor communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 temperature sensor communication error

### Reason
 Joint internal temperature sensor error

### Action
 Please check the temperature sensor of the IIC interface.

## 0x128616 Joint 3 temperature sensor communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 temperature sensor communication error

### Reason
 Joint internal temperature sensor error

### Action
 Please check the temperature sensor of the IIC interface.

## 0x138616 Joint 4 temperature sensor communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 temperature sensor communication error

### Reason
 Joint internal temperature sensor error

### Action
 Please check the temperature sensor of the IIC interface.

## 0x148616 Joint 5 temperature sensor communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 temperature sensor communication error

### Reason
 Joint internal temperature sensor error

### Action
 Please check the temperature sensor of the IIC interface.

## 0x158616 Joint 6 temperature sensor communication error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 temperature sensor communication error

### Reason
 Joint internal temperature sensor error

### Action
 Please check the temperature sensor of the IIC interface.

## 0x201104 Inconsistent serial bus parameters of extended IO RTU 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Inconsistent serial bus parameters of extended IO RTU

### Reason
 Configure multiple RTU expansion IO modules and the serial bus parameters of each module are inconsistent

### Action
 Modify the extended IO RTU serial bus parameters so that the parameters of each module are the same as those of the first RTU module.

## 0x201102 Failed to create Modbus RTU connection during extension IO initialization 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to create Modbus RTU connection during extension IO initialization

### Reason
 An error occurred during initialization connecting the Modbus slave IO module according to the given configuration.

### Action
 (1) Check the type and communication configuration of the extended IO module;
(2) Check that the connection between the control cabinet interface and the external extended IO module is correct;
(3) Check that the power supply of the extended IO module is normal;
(4) Use the Modbus Poll tool to connect the extended IO to check whether the extended IO module is normal.

## 0x201202 Failed to create Modbus TCP connection during extension IO initialization 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to create Modbus TCP connection during extension IO initialization

### Reason
 An error occurred during initialization connecting the Modbus slave IO module according to the given configuration.

### Action
 (1) Check the type and communication configuration of the extended IO module;
(2) Check that the connection between the control cabinet interface and the external extended IO module is correct;
(3) Check that the power supply of the extended IO module is normal;
(4) Use the Modbus Poll tool to connect the extended IO to check whether the extended IO module is normal.

## 0x201304 Unknown error during extended IO initialization 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unknown error during initialization

### Reason
 An error occurred during initialization connecting the Modbus slave IO module according to the given configuration.

### Action
 (1) Check the type and communication configuration of the extended IO module;
(2) Check that the connection between the control cabinet interface and the external extended IO module is correct;
(3) Check that the power supply of the extended IO module is normal;
(4) Use the Modbus Poll tool to connect the extended IO to check whether the extended IO module is normal.

## 0x201101 Modbus RTU misconfigured during extended IO initialization 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Extended IO initialization failure: Modbus RTU communication parameters do not match

### Reason
 An error occurred during initialization connecting the Modbus slave IO module according to the given configuration.

### Action
 (1) Check the type and communication configuration of the extended IO module;
(2) Check that the connection between the control cabinet interface and the external extended IO module is correct;
(3) Check that the power supply of the extended IO module is normal;
(4) Use the Modbus Poll tool to connect the extended IO to check whether the extended IO module is normal.

## 0x201201 Modbus TCP misconfigured during extended IO initialization 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Extended IO initialization failure: Modbus RTU communication parameters format error

### Reason
 An error occurred during initialization connecting the Modbus slave IO module according to the given configuration.

### Action
 (1) Check the type and communication configuration of the extended IO module;
(2) Check that the connection between the control cabinet interface and the external extended IO module is correct;
(3) Check that the power supply of the extended IO module is normal;
(4) Use the Modbus Poll tool to connect the extended IO to check whether the extended IO module is normal.

## 0x202103 Modbus RTU is disconnected during extended IO operation. 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Extended IO operation failure: Modbus RTU disconnection

### Reason
 The extended IO module of the Modbus RTU is disconnected from the controller during operation.

### Action
 (1) Check the type and communication configuration of the extended IO module;
(2) Check that the connection between the control cabinet interface and the external extended IO module is correct;
(3) Check that the power supply of the extended IO module is normal;
(4) Use the Modbus Poll tool to connect the extended IO to check whether the extended IO module is normal.

## 0x202102 Modbus TCP is disconnected during extended IO operation. 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Extended IO operation failure: Modbus TCP disconnection

### Reason
 The extended IO module of the Modbus TCP is disconnected from the controller during operation.

### Action
 (1) Check the type and communication configuration of the extended IO module;
(2) Check that the connection between the control cabinet interface and the external extended IO module is correct;
(3) Check that the power supply of the extended IO module is normal;
(4) Use the Modbus Poll tool to connect the extended IO to check whether the extended IO module is normal.

## 0x3F0001 Torque sensor communication initialization failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Torque sensor communication initialization failure

### Reason
 When the sensor enabled, the connection will be established with the sensor according to the communication configuration. The error will pop up when the communication connection between the controller and the sensor fails.

### Action
 (1) Check the type of the torque sensor and communication configuration;
(2) Check that the connection between the control cabinet interface and the torque sensor is correct;
(3) Check that the power supply of the torque sensor is normal;
(4) Use the Modbus Poll tool to connect the torque sensor to check whether the force sensor is normal.

## 0x3F1001 Failed to receive torque sensor data 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to receive torque sensor data

### Reason
 When the connection between the controller and the sensor is established, the data is disconnected during operation.

### Action
 (1) Check the type of the torque sensor and communication configuration;
(2) Check that the connection between the control cabinet interface and the torque sensor is correct;
(3) Check that the power supply of the torque sensor is normal;
(4) Use the Modbus Poll tool to connect the torque sensor to check whether the force sensor is normal.

## 0x3F1002 Received torque sensor data format error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Received torque sensor data format error

### Reason
 Incorrectly formatted torque sensor data received when expanding the torque sensor via TIO.

### Action
 (1) Check the torque sensor type and communication protocol;
(2) Use Modbus debugging tool, network debugging tool or serial port debugging tool to analyze the received torque sensor data to determine whether it conforms to the communication protocol of JAKA+ torque sensor.

## 0x304281 PDU temperature anomaly 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 PDU temperature anomaly

### Reason
 Temperature of the control cabinet exceeds 70 °C

### Action
 (1) Check whether the temperature of the control cabinet exceeds 70 °C;
(2) Check that the fan inside the control cabinet is in working order.

## 0x304282 Braking resistance over-temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Braking resistance over-temperature

### Reason
 MiniCab internal braking resistance temperature over 80 ℃

### Action
 (1) Please check the internal temperature of MiniCab;
(2) Please reduce the acceleration of the robot;
(3) Please add a cooling fan;

## 0x303281 5V power voltage error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 5V error （Fluctuation range of supply voltage）

### Reason
 The internal 5V signal voltage value of the control cabinet exceeds the internal preset value (3.5~6.1V), you can use a multimeter to test the 5V signal voltage value.

### Action
 (1) Check whether the firmware version is the latest version, if not, upgrade the firmware and if the error still exists;
(2) After the input power of the control cabinet is disconnected, restart it to see if the problem still exists. If so, please contact the technician to check the control cabinet hardware;
(3) For the standard 220V power supply control cabinet, unplugging the 220V power supply will pop up the error, which is a normal phenomenon.

## 0x303282 12V power voltage error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 12V error （Fluctuation range of supply voltage）

### Reason
 The internal 12V signal voltage value of the control cabinet exceeds the internal preset value (9~14V), you can use a multimeter to test the 12V signal voltage value.

### Action
 (1) Check whether the firmware version is the latest version, if not, upgrade the firmware and if the error still exists;
(2) After the input power of the control cabinet is disconnected, restart it to see if the problem still exists. If so, please contact the technician to check the control cabinet hardware;
(3) For the standard 220V power supply control cabinet, unplugging the 220V power supply will pop up the error, which is a normal phenomenon.

## 0x303283 24V power voltage error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 24V error （Fluctuation range of supply voltage）

### Reason
 The internal 12V signal voltage value of the control cabinet exceeds the internal preset value (15~31V), you can use a multimeter to test the 12V signal voltage value.

### Action
 (1) Check whether the firmware version is the latest version, if not, upgrade the firmware and if the error still exists;
(2) After the input power of the control cabinet is disconnected, restart it to see if the problem still exists. If so, please contact the technician to check the control cabinet hardware;
(3) For the standard 220V power supply control cabinet, unplugging the 220V power supply will pop up the error, which is a normal phenomenon.

## 0x303181 220V power voltage error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 220V power voltage error

### Reason
 Control cabinet detects amplitude and frequency of 220V signal errors

### Action
 (1) Please determine the power supply voltage and frequency of the current control cabinet. Only the AC power above 110V and 50~ 60Hz has the 220V power failure detection function. The control cabinet powered by 90~ 110V AC must use the firmware version with the word dis220v;
(2) Please update to the latest version of firmware to see if this error still exists;
(3) If neither 1 nor 2 solves the error, it is necessary to determine the amplitude and frequency of the power supply and the change of the amplitude and frequency during operation;
(4) If neither 1 nor 2 solves the problem, and 3 cannot be measured, it is necessary to determine whether there is a situation where the power supply of the control cabinet is directly cut off during robot running (including but not limited to unplugging the 220V plug, factory power failure, etc.). If not, the firmware can be updated to the firmware with the dis220V version for temporary use.

## 0x303182 Main power supply relay error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Main power supply relay error

### Reason
 The relay controlling the 48V output detects the output signal without power on, which means the relay adhesion controlling the input signal of the 48V power supply.

### Action
 (1) Please update to the latest version of SCB to see if this error still exists;
(2) Please determine the power supply voltage and frequency of the current control cabinet. The control cabinet powered by 90~ 110V AC must use the firmware version with the word dis220v;
(3) If neither 1 nor 2 solves the error, contact the technicians to check whether the relay controlling 48V power in control cabinet is damaged.

## 0x303381 Robot output power voltage error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot voltage or voltage configuration error

### Reason
 The set MiniCab discharge voltage value is less than the MiniCab input voltage value.

### Action
 Please use the APP to reset the discharge voltage.

## 0x303387 PSCB relay error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 PSCB relay error

### Reason
 After powering off the robot, the voltage values of the two relays that control the robot power supply detected by PSCB are inconsistent.

### Action
 (1) Please update to the latest version of firmware to see if this error still exists;
(2) If step 1 cannot solve the error, contact the technicians to check whether the relay inside the PSCB is damaged.

## 0x302384 External IO power supply current error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 External IO power supply current error（ 2.3A)

### Reason
 The total current value of the 24V output on the control cabinet panel exceeds 1.5A.

### Action
 Remove the device on the control cabinet panel and check whether the error is still popped up; if not, it means that the user equipment cannot use the control cabinet for power supply and needs to be powered separately; If the error still pops up, and cannot be resolved after restart the control cabinet, contact the technicians.

## 0x302385 IPC current error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 IPC current error （IPC current over 1.5A is considered a short-circuit fault in the IPC）

### Reason
 Not connected to IPC or IPC current exceeds 1.5A after powering on.

### Action
 Contact the technicians to check the IPC.

## 0x302380 Fan current error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Fan current error

### Reason
 Control cabinet fan not connected or fan short-circuited.

### Action
 Check the fan.

## 0x302381 Level 1 alarm: robot current error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot output power supply current error, level 1 warning: 25A
Robot current consumption error

### Reason
 The current collected by the SCB exceeds the threshold

### Action
 Please check whether the SCB is the debugging version, or contact the technical service personnel.

## 0x302382 Level 2 alarm: robot current error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot output power supply current error, level 2 warning: 31.25A

### Reason
 The current collected by the SCB exceeds the threshold

### Action
 Please check whether the SCB is the debugging version, or contact the technical service personnel.

## 0x302383 Level 3 alarm: robot current error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot output power supply current error, level 3 warning: 37.25A

### Reason
 The current collected by the SCB exceeds the threshold

### Action
 Please check whether the SCB is the debugging version, or contact the technical service personnel.

## 0x302391 Robot power error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot power error

### Reason
 The robot power exceeds the setting limit value.

### Action
 (1) Please readjust the power setting in the safety settings in the APP;
(2) Contact the technicians to check whether the hardware power exceeds the limits.

## 0x309081 Robot end drag over speed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Dragging TCP speed over limit

### Reason
 The robot TCP drag speed exceeds 1m/s.

### Action
 Reduce the dragging speed, the error does not affect other functions, only as a reminder.

## 0x309082 Emergency stop triggered 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Emergency stop

### Reason
 Any one of E-stop button on remote stick, user’s E-stop button or E-stop signal in safety function is triggered.

### Action
 Check whether any one of E-stop button on remote stick, user’s E-stop button or E-stop signal in safety function is triggered.

## 0x308181 CAN communication of remote stick interruption 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 CAN communication of remote stick interruption

### Reason
 Error in data between safety control board and remote stick bus.

### Action
 (1) Check whether the cable connection between the remote stick and the control cabinet is correct;
(2) Contact the technicians to check if the CAN bus between the SCB/PSCB and the control cabinet CAN2 is correct.

## 0x308182 Control cabinet CAN communication interruption 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Control cabinet CAN communication interruption

### Reason
 The command sent by the controller to the robot was not received for a period of time after the robot was powered on.

### Action
 (1) Please update the SCB and PSCB firmware to the latest version to see if the error exists;
(2) Check whether the data of 1 to 6 joints has been refreshed on the APP monitoring or servo upper computer monitoring page;
(3) Check whether the indicator light at the end of the robot is on. If not, check whether the wiring is correct.

## 0x308183 Robot CAN communication interruption 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot CAN communication interruption

### Reason
 The command sent by the controller to the robot was not received for a period of time after the robot was powered on.

### Action
 

## 0x308184 TIO CAN communication interruption 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 TIO CAN communication interruption

### Reason
 The command sent by the controller to the robot was not received for a period of time after the robot was powered on.

### Action
 

## 0x308185 CAN communication timeout 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 CAN communication timeout

### Reason
 The command sent by the controller to the robot was not received for a period of time after the robot was powered on.

### Action
 

## 0x305081 Inconsistent remote stick emergency stop signal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Inconsistent remote stick emergency stop signal

### Reason
 The signal is a dual redundant channel, and an error is popped up when the two signals are inconsistent.

### Action
 Replace the remote stick or contact the technicians to check the SCB wiring circuit in control cabinet.

## 0x305082 Inconsistent user’s emergency stop signal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Inconsistent user’s emergency stop signal

### Reason
 The signal is a dual redundant channel, and an error is popped up when the two signals are inconsistent.

### Action
 Check whether the P8 terminal on the front panel of control cabinet is in poor contact, and check whether the external circuit is normal.

## 0x305083 Inconsistent protective stop signal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Inconsistent protective stop signal

### Reason
 The signal is a dual redundant channel, and an error is popped up when the two signals are inconsistent.

### Action
 Check whether the P8 terminal on the front panel of control cabinet is in poor contact, and check whether the external circuit is normal.

## 0x305084 SCB relay error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 SCB relay error

### Reason
 Abandoned

### Action
 Please check whether the SCB is the debugging version, or contact the technical service personnel.

## 0x305085 Braking resistance over-temperature 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Braking resistance over-temperature

### Reason
 Abandoned

### Action
 Please check whether the SCB is the debugging version, or contact the technical service personnel.

## 0x305086 Remote stick enabling input error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Remote stick enabling input error

### Reason
 Abandoned

### Action
 Please check whether the SCB is the debugging version, or contact the technical service personnel.

## 0x305087 Additional emergency stop input error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Additional emergency stop input error

### Reason
 The signal is a dual redundant channel, and an error is popped up when the two signals are inconsistent.

### Action
 Check whether the DI interface terminals on the front panel of control cabinet is in poor contact, and check whether the external circuit is normal.

## 0x305088 Additional protective stop input 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Additional protective stop input

### Reason
 The signal is a dual redundant channel, and an error is popped up when the two signals are inconsistent.

### Action
 Check whether the DI interface terminals on the front panel of control cabinet is in poor contact, and check whether the external circuit is normal.

## 0x305089 Protective stop reset input error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Protective stop reset input error

### Reason
 The signal is a dual redundant channel, and an error is popped up when the two signals are inconsistent.

### Action
 Check whether the DI interface terminals on the front panel of control cabinet is in poor contact, and check whether the external circuit is normal.

## 0x30508A Reduced mode input error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Reduced mode input error

### Reason
 The signal is a dual redundant channel, and an error is popped up when the two signals are inconsistent.

### Action
 Check whether the DI interface terminals on the front panel of control cabinet is in poor contact, and check whether the external circuit is normal.

## 0x30508B 3-Position enable input error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 3-Position enable input error

### Reason
 3-Position enable input error

### Action
 

## 0x305090 Turn off collision detection signal input abnormalities 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Turn off collision detection signal input abnormalities

### Reason
 Turn off collision detection signal input abnormalities

### Action
 

## 0x305091 Collision sensitivity LV1 signal input is abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Collision sensitivity LV1 signal input is abnormal

### Reason
 Collision sensitivity LV1 signal input is abnormal

### Action
 

## 0x305092 Collision sensitivity LV2 signal input is abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Collision sensitivity LV2 signal input is abnormal

### Reason
 Collision sensitivity LV2 signal input is abnormal

### Action
 

## 0x305093 Collision sensitivity LV3 signal input is abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Collision sensitivity LV3 signal input is abnormal

### Reason
 Collision sensitivity LV3 signal input is abnormal

### Action
 

## 0x305094 Collision sensitivity LV4 signal input is abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Collision sensitivity LV4 signal input is abnormal

### Reason
 Collision sensitivity LV4 signal input is abnormal

### Action
 

## 0x305095 Collision sensitivity LV5 signal input is abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Collision sensitivity LV5 signal input is abnormal

### Reason
 Collision sensitivity LV5 signal input is abnormal

### Action
 

## 0x305097 The collision sensitivity is extremely low, and the signal input is abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x303184 Unable to power on due to safety signal error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 There was an abnormality in the safe digital input signal， and the safety control board detected that the abnormal fault had not been cleared and refused the request to repower the robot.

### Reason
 Please check whether there is any abnormality in the safety digital input signal configured in the control cabinet panel，confirm that there is no abnormality in the safety digital input signal input and then re-power on to clear the fault.

### Action
 

## 0x309083 Robot power alarm threshold 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot power alarm threshold

### Reason
 Abandoned

### Action
 Please check whether the SCB is the debugging version, or contact the technical service personnel.

## 0x0FFFFE Other Errors 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Other Errors

### Reason
 

### Action
 

## 0x0FFFFF Unknown Error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unknown Error

### Reason
 

### Action
 

## 0x10F0000 System emergency stop triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 System emergency stop triggered

### Reason
 

### Action
 

## 0x10F0001 System emergency stop reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 System emergency stop reset

### Reason
 

### Action
 

## 0x10F0002 Robot is powered on 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot is powered on

### Reason
 

### Action
 

## 0x10F0003 Robot is powered off 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot is powered off

### Reason
 

### Action
 

## 0x10F0004 Robot is enabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot is enabled

### Reason
 

### Action
 

## 0x10F0005 Robot is disabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot is disabled

### Reason
 

### Action
 

## 0x10F0006 Robot exits decelerated mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot exits decelerated mode

### Reason
 

### Action
 

## 0x10F0007 Robot enters level 1 decelerated mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot enters level 1 decelerated mode

### Reason
 

### Action
 

## 0x10F0008 Robot enters level 2 decelerated mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot enters level 2 decelerated mode

### Reason
 

### Action
 

## 0x10F0009 Robot enters protective stop 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot enters protective stop

### Reason
 

### Action
 

## 0x10F000a Robot exits collision protective stop 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot exits collision protective stop

### Reason
 

### Action
 

## 0x10F000b Robot enters collision protective stop 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot enters collision protective stop

### Reason
 

### Action
 

## 0x10F000c Robot joint limit state recovery 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot joint limit state recovery

### Reason
 

### Action
 

## 0x10F000d Conveyor function is enabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Conveyor function is enabled

### Reason
 

### Action
 

## 0x10F000e Conveyor function is disabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Conveyor function is disabled

### Reason
 

### Action
 

## 0x10F000f Flexible control function is enabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Flexible control function is enabled

### Reason
 

### Action
 

## 0x10F0010 Flexible control function is disabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Flexible control function is disabled

### Reason
 

### Action
 

## 0x10F0011 Robot enters drag-and-drop mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot enters drag-and-drop mode

### Reason
 

### Action
 

## 0x10F0012 Robot exits drag-and-drop mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot exits drag-and-drop mode

### Reason
 

### Action
 

## 0x10F0013 Robot enters force control mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot enters force control mode

### Reason
 

### Action
 

## 0x10F0014 Robot exits force control mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot exits force control mode

### Reason
 

### Action
 

## 0x10F0015 Robot SERVO move mode is enabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot SERVO move mode is enabled

### Reason
 

### Action
 

## 0x10F0016 Robot SERVO move mode is disabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot SERVO move mode is disabled

### Reason
 

### Action
 

## 0x10F0017 Robot moves beyond safe boundary 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot moves beyond safe boundary

### Reason
 

### Action
 

## 0x10F0018 Robot returns to safe boundary 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot returns to safe boundary

### Reason
 

### Action
 

## 0x10F0019 Cartesian space speed limit is enabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Cartesian space speed limit is enabled

### Reason
 

### Action
 

## 0x10F001a Cartesian space speed limit is disabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Cartesian space speed limit is disabled

### Reason
 

### Action
 

## 0x10F001b Program execution starts 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Program execution starts

### Reason
 

### Action
 

## 0x10F001c Program execution pauses 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Program execution pauses

### Reason
 

### Action
 

## 0x10F001d Program execution resumes 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Program execution resumes

### Reason
 

### Action
 

## 0x10F001e Program execution stops 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Program execution stops

### Reason
 

### Action
 

## 0x10F001f Safety configuration has changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 Changes in  in safety parameters

### Action
 

## 0x10F0020 Robot enters reduced mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot enters reduced mode

### Reason
 

### Action
 

## 0x10F0021 Robot exits reduced mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot exits reduced mode

### Reason
 

### Action
 

## 0x10F0022 Robot momentum reduced 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot momentum reduced

### Reason
 

### Action
 

## 0x10F0023 Robot power reduced 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot power reduced

### Reason
 

### Action
 

## 0x10F0024 Robot exits protective stop 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot exits protective stop

### Reason
 

### Action
 

## 0x10F0025 Safety configuration has changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety parameter checksum changed from  to 

### Reason
 Changes in safety parameters

### Action
 

## 0x10F0026 The user's Safety configuration init pose changes 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 and the init pose in the safety parameters changes from  to 

### Action
 

## 0x10F0027 The user's safety configuration for the init pose tolerance has changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The safety parameter verification has changed from  to 

### Reason
 and the init pose tolerance in the safety parameters has changed from  to 

### Action
 

## 0x10F0028 Safety configuration run mode has changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 The run mode of the controller has changed from  to 

### Action
 

## 0x10F0029 User safety configuration joint negative limit change 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 Joint  negative limit changed from  to 

### Action
 

## 0x10F002a User safety configuration joint positive limit change 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 Joint  positive limit changed from  to 

### Action
 

## 0x10F002b User safety function DI configuration change 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 DI  configured safety function code changed from  to 

### Action
 

## 0x10F002c User safety function DO configuration change 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 DO  configured safety function code changed from  to 

### Action
 

## 0x10F002D Robot power limit configuration changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 robot power limit configuration changed from  to 

### Action
 

## 0x10F002E Robot tcp vel limit configuration changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 robot TCP vel limit configuration changed from  to 

### Action
 

## 0x10F002F User safety configuration stop distance changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 user safety configuration stop distance changed from  to 

### Action
 

## 0x10F0030 User safety configuration stop time changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 user safety configuration stop time changed from  to 

### Action
 

## 0x10F0031 Elbow speed limit changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 elbow speed limit changed from  to 

### Action
 

## 0x10F0032 Momentum limit changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 momentum limit changed from  to 

### Action
 

## 0x10F0033 Joint speed limit changes 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 the joint  speed limit changes from  to 

### Action
 

## 0x10F0034 Joint error alarm threshold changes 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 the joint  error alarm threshold changes from  to 

### Action
 

## 0x10F0035 The tool attitude constraint is changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The safety checksum changed from  to 

### Reason
 The original tool attitude constraint is:
Coordinate system , tool direction x: , tool direction Y: , limit range: , safety distance: , limit direction rx: , ry: , rz: , running enabled: , booting: ；
The current tool pose constraints are:
Coordinate system , tool orientation x: , tool orientation Y: , limit range: , safety distance: , limit direction rx: , ry: , rz: , run enable: , boot start: 

### Action
 

## 0x10F0036 Collision option changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
  Safety parameter checksum changed from  to 

### Reason
 The original collision handling configuration is:
Collision observation method: , post-collision processing options: , collision bounce angle: , collision bounce distance: , bounce joint acceleration: , bounce joint speed: , bounce Linear acceleration: , rebound linear velocity: 
The current collision handling configuration is:
Collision observation method: , post-collision processing options: , collision bounce angle: , collision bounce distance: , bounce joint acceleration: , bounce joint speed: , bounce Linear acceleration: , rebound linear velocity: 

### Action
 

## 0x10F0037 Servo output limit changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
  Safety parameter checksum changed from  to 

### Reason
 servo output limit changed from  to 

### Action
 

## 0x10F0038 The default load configuration at startup has been changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
  Safety parameter checksum changed from  to 

### Reason
 The original default program configuration:
Autoload: , program name: 
The current default program configuration:
Autoload: , program name: 

### Action
 

## 0x10F0039 Power-on auto-enabling status changed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
  Safety parameter checksum changed from  to 

### Reason
  power-on auto-enabling status changed from  to 

### Action
 

## 0x10F003A Enable automatic running program status changes 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
  Safety parameter checksum changed from  to 

### Reason
  enable automatic running program status changes from  to 

### Action
 

## 0x10F003B Safety plane global configuration changes 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 Original parameters:
Area type: , startup enabled: , operation enabled: , processing method after reaching/exceeding the safety plane: , elbow position limit enabled: ,
New parameter:
Area type: , startup enable: , operation enable: , processing method after reaching/exceeding the safety plane: , elbow position limit enable: 

### Action
 

## 0x10F003C The initialization process detected a safety parameter change 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 

### Action
 

## 0x10F003D force limit changes 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 the force limit changes from  to 

### Action
 

## 0x10F003F joint sensitivity changes 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 the joint sensitivity changes from  to 

### Action
 

## 0x10F0040 collision detection enable state changes 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 the enable state changes from  to 

### Action
 

## 0x10F0041 Individual safety plane configuration changes 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The safety checksum has changed from  to 

### Reason
 Plane :
Original parameters:
Plane name: , enable: , modify: , d: , safe distance: 
New parameter:
Plane name: , enable: , modify: , d: , safe distance: 

### Action
 

## 0x10F0042 Single safety plane point change 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Safety checksum changed from  to 

### Reason
 Plane :
Original parameters:
Plane point 1: , plane point 2: , plane point 3: , safety surface point: 
New parameter:
Plane point 1: , plane point 2: , plane point 3: , safety surface point: 

### Action
 

## 0x10F0050  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x10F0051 Setting up the SCB security feature DI configuration failed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Setting up the SCB security feature DI configuration failed

### Reason
 1 This feature configuration is not supported in the current SCB version.
  2. The CAN communication of the security controller is abnormal.

### Action
 Please check the upgraded SCB version，there are still problems after the upgrade， please contact the technician.

## 0x10F0052 Setting up the SCB security feature DO configuration failed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Setting up the SCB security feature DO configuration failed

### Reason
 1 This feature configuration is not supported in the current SCB version.
  2. The CAN communication of the security controller is abnormal.

### Action
 Please check the upgraded SCB version，there are still problems after the upgrade， please contact the technician.

## 0x10F0053 Failed to set the SCB power limit configuration 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Failed to set the SCB power limit configuration

### Reason
 1 This feature configuration is not supported in the current SCB version.
  2. The CAN communication of the security controller is abnormal.

### Action
 Please check the upgraded SCB version，there are still problems after the upgrade， please contact the technician.

## 0x10F0054 Failed to set the SCB tool coordinate system configuration 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Failed to set the SCB tool coordinate system configuration

### Reason
 1 This feature configuration is not supported in the current SCB version.
  2. The CAN communication of the security controller is abnormal.

### Action
 Please check the upgraded SCB version，there are still problems after the upgrade， please contact the technician.

## 0x10F0055 Failed to set the control cabinet serial number configuration 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Failed to set the control cabinet serial number configuration

### Reason
 1 This feature configuration is not supported in the current SCB version.
  2. The CAN communication of the security controller is abnormal.

### Action
 Please check the upgraded SCB version，there are still problems after the upgrade， please contact the technician.

## 0x10F0056 Failed to set the output voltage configuration of the control cabinet 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Failed to set the output voltage configuration of the control cabinet

### Reason
 1 This feature configuration is not supported in the current SCB version.
  2. The CAN communication of the security controller is abnormal.

### Action
 Please check the upgraded SCB version，there are still problems after the upgrade， please contact the technician.

## 0x10F0057  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x10F0058  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x10F0100 Torque sensor is enabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Torque sensor is enabled

### Reason
 

### Action
 

## 0x10F0101 Torque sensor is disabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Torque sensor is disabled

### Reason
 

### Action
 

## 0x10F0102 Extended IO module is enabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Extended IO module is enabled

### Reason
 

### Action
 

## 0x10F0103 Extended IO module is disabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Extended IO module is disabled

### Reason
 

### Action
 

## 0x10F0104 Remote stick locked 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Remote stick locked

### Reason
 

### Action
 

## 0x10F0200 Function DI (execute program) is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (execute program) is triggered

### Reason
 

### Action
 

## 0x10F0201 Function DI (pause program) is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (pause program) is triggered

### Reason
 

### Action
 

## 0x10F0202 Function DI (resume program) is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (resume program) is triggered

### Reason
 

### Action
 

## 0x10F0203 Function DI (stop program) is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (stop program) is triggered

### Reason
 

### Action
 

## 0x10F0204 Function DI (power on) is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (power on) is triggered

### Reason
 

### Action
 

## 0x10F0205 Function DI (power off) is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (power off) is triggered

### Reason
 

### Action
 

## 0x10F0206 Function DI (servo enabled) is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (servo enabled) is triggered

### Reason
 

### Action
 

## 0x10F0207 Function DI (servo disabled) is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (servo disabled) is triggered

### Reason
 

### Action
 

## 0x10F0208 Function DI (enters level 1 decelerated mode） is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (enters level 1 decelerated mode） is triggered

### Reason
 

### Action
 

## 0x10F0209 Function DI (enters level 2 decelerated mode） is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (enters level 2 decelerated mode） is triggered

### Reason
 

### Action
 

## 0x10F020a Function DI (enters protective stop）is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (enters protective stop）is triggered

### Reason
 

### Action
 

## 0x10F020b Function DI (return to initial position) is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (return to initial position) is triggered

### Reason
 

### Action
 

## 0x10F020c Function DI (clear error) is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (clear error) is triggered

### Reason
 

### Action
 

## 0x10F020d Function DI (enter drag-and-drop mode） is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (enter drag-and-drop mode） is triggered

### Reason
 

### Action
 

## 0x10F020e Function DI (exit drag-and-drop mode） is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (exit drag-and-drop mode） is triggered

### Reason
 

### Action
 

## 0x10F020f Function DI (stop program or pause program) is triggered, (run program) should not be executed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Function DI (stop program or pause program) is triggered, (run program) should not be executed

### Reason
 

### Action
 

## 0x10F0210 Function DI (pause program) is triggered, (resume program) should not be executed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Function DI (pause program) is triggered, (resume program) should not be executed

### Reason
 

### Action
 

## 0x10F0211 Function DI (power off) is triggered, (power on) should not be executed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Function DI (power off) is triggered, (power on) should not be executed

### Reason
 

### Action
 

## 0x10F0212 Function DI (disable) is triggered, (enable) should not be executed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Function DI (disable) is triggered, (enable) should not be executed

### Reason
 

### Action
 

## 0x10F0220 Function DO (operational idle) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (operational idle) set

### Reason
 

### Action
 

## 0x10F0221 Function DO (operational idle) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (operational idle) reset

### Reason
 

### Action
 

## 0x10F0222 Function DO (program pause) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (program pause) set

### Reason
 

### Action
 

## 0x10F0223 Function DO (program pause) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (program pause) reset

### Reason
 

### Action
 

## 0x10F0224 Function DO (program running) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (program running) set

### Reason
 

### Action
 

## 0x10F0225 Function DO (program running) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (program running) reset

### Reason
 

### Action
 

## 0x10F0226 Function DO (control system error) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (control system error) set

### Reason
 

### Action
 

## 0x10F0227 Function DO (control system error) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (control system error) reset

### Reason
 

### Action
 

## 0x10F0228 Function DO（robot is powered on）set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO（robot is powered on）set

### Reason
 

### Action
 

## 0x10F0229 Function DO（robot is powered on）reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO（robot is powered on）reset

### Reason
 

### Action
 

## 0x10F022a Function DO (servo enabled) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (servo enabled) set

### Reason
 

### Action
 

## 0x10F022b Function DO (servo enabled) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (servo enabled) reset

### Reason
 

### Action
 

## 0x10F022c Function DO（robot moving）set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO（robot moving）set

### Reason
 

### Action
 

## 0x10F022d Function DO（robot moving）reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO（robot moving）reset

### Reason
 

### Action
 

## 0x10F022e Function DO (robot stationary) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot stationary) set

### Reason
 

### Action
 

## 0x10F022f Function DO（robot stationary) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO（robot stationary) reset

### Reason
 

### Action
 

## 0x10F0230 Function DO (control system ready) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (control system ready) set

### Reason
 

### Action
 

## 0x10F0231 Function DO (control system ready) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (control system ready) reset

### Reason
 

### Action
 

## 0x10F0232 Function DO (robot emergency stop) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot emergency stop) set

### Reason
 

### Action
 

## 0x10F0233 Function DO（robot emergency stop) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO（robot emergency stop) reset

### Reason
 

### Action
 

## 0x10F0234 Function DO（robot in level 2 decelerated mode） set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO（robot in level 2 decelerated mode） set

### Reason
 

### Action
 

## 0x10F0235 Function DO（robot in level 2 decelerated mode） reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO（robot in level 2 decelerated mode） reset

### Reason
 

### Action
 

## 0x10F0236 Function DO (robot in protective stop) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot in protective stop) set

### Reason
 

### Action
 

## 0x10F0237 Function DO（robot in protective stop) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO（robot in protective stop) reset

### Reason
 

### Action
 

## 0x10F0238 Function DO (robot initial position) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot initial position) set

### Reason
 

### Action
 

## 0x10F0239 Function DO (robot initial position) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot initial position) reset

### Reason
 

### Action
 

## 0x10F0240 Function DO（robot in level 1 decelerated mode） set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO（robot in level 1 decelerated mode） set

### Reason
 

### Action
 

## 0x10F0241 Function DO（robot in level 1 decelerated mode） reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO（robot in level 1 decelerated mode） reset

### Reason
 

### Action
 

## 0x10F0250 Safety function DI (additional emergency stop) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (additional emergency stop) triggered

### Reason
 

### Action
 

## 0x10F0251 Safety function DI (additional protective stop) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (additional protective stop) triggered

### Reason
 

### Action
 

## 0x10F0252 Safety function DI (protective stop reset）is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (protective stop reset）is triggered

### Reason
 

### Action
 

## 0x10F0253 Safety function DI (reduced mode） is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (reduced mode） is triggered

### Reason
 

### Action
 

## 0x10F0254 Safety function DI (3-position enabled) is triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (3-position enabled) is triggered

### Reason
 

### Action
 

## 0x10F0255 Safety function DI (SET collision sensitivity level0) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (SET collision sensitivity level0) triggered

### Reason
 

### Action
 

## 0x10F0256 Safety function DI (SET collision sensitivity level1) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (SET collision sensitivity level1) triggered

### Reason
 

### Action
 

## 0x10F0257 Safety function DI (SET collision sensitivity level2) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (SET collision sensitivity level2) triggered

### Reason
 

### Action
 

## 0x10F0258 Safety function DI (SET collision sensitivity level3) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (SET collision sensitivity level3) triggered

### Reason
 

### Action
 

## 0x10F0259 Safety function DI (SET collision sensitivity level4) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (SET collision sensitivity level4) triggered

### Reason
 

### Action
 

## 0x10F025A Safety function DI (SET collision sensitivity level5) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (SET collision sensitivity level5) triggered

### Reason
 

### Action
 

## 0x10F025B Safety function DI (SET collision sensitivity level7) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (SET collision sensitivity level7) triggered

### Reason
 

### Action
 

## 0x10F0260 Safety function DO (emergency stop button trigger) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DO (emergency stop button trigger) set

### Reason
 

### Action
 

## 0x10F0261 Safety function DO (emergency stop button trigger) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DO (emergency stop button trigger) reset

### Reason
 

### Action
 

## 0x10F0262 Safety function DO (system emergency stop trigger) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DO (system emergency stop trigger) set

### Reason
 

### Action
 

## 0x10F0263 Safety function DO (system emergency stop trigger) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DO (system emergency stop trigger) reset

### Reason
 

### Action
 

## 0x10F0264 Safety function DO (robot in protective stop) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DO (robot in protective stop) set

### Reason
 

### Action
 

## 0x10F0265 Safety function DO（robot in protective stop) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DO（robot in protective stop) reset

### Reason
 

### Action
 

## 0x10F0266 Safety function DO（robot moving）set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DO（robot moving）set

### Reason
 

### Action
 

## 0x10F0267 Safety function DO（robot moving）reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DO（robot moving）reset

### Reason
 

### Action
 

## 0x10F0268 Function DO（robot in reduced mode） set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO（robot in reduced mode） set

### Reason
 

### Action
 

## 0x10F0269 Function DO（robot in reduced mode） reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO（robot in reduced mode） reset

### Reason
 

### Action
 

## 0x10F026A The digital output port is unavailable 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The digital output port is unavailable

### Reason
 Digital output port [: Pin_ ] is set to function DO or safety DO and is not allowed to be modified as a general DO

### Action
 1. Cancel the function configuration on [: Pin_ ];
2, Do not set the status of [: Pin_ ] by command

## 0x10F0280 Dynamic parameter identification completed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Dynamic parameter identification completed

### Reason
 

### Action
 

## 0x10F0281 Friction parameter identification completed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Friction parameter identification completed

### Reason
 

### Action
 

## 0x10F0282 Write dynamics parameters complete, restart or power on again to take effect 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Write dynamics parameters complete, restart or power on again to take effect

### Reason
 

### Action
 

## 0x10F0283 Collision rebound abort 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The collision point is too close to the starting point of the motion, and the rebound may be terminated due to the inability to confirm whether the rebound path is safe

### Reason
 

### Action
 

## 0x10F0284 There is no rebound in this collision 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The collision point is approaching or has stopped, and rebound will not be performed for this collision

### Reason
 

### Action
 

## 0x10F0300 Login initialization failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Login initialization failure

### Reason
 Data reading exception during login and connection

### Action
 (1) Check if there is a version mismatch between the current APP version and the controller version;
(2) Check the network connection;
(3) Try reconnecting the robot or restarting the APP.

## 0x10F0301 The version is test version 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The version is test version

### Reason
 The version is test version

### Action
 Contact the technicians to obtain the release version. 

## 0xE0000 No error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 No error

### Reason
 No error

### Action
 No error

## 0xE0001 GRPC call failed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 grpc call failed

### Reason
 grpc call failed

### Action
 Please contact Jaka technicians for consultation.

## 0xE0002 Incorrect password 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 incorrect password

### Reason
 Login (login) fails, and the password is wrong.

### Action
 Please check whether the password input is correct. Please enter the correct password for input errors.

## 0xE0003 Incorrect username 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 incorrect username

### Reason
 Login (login) failed, and the username was wrong.

### Action
 Please check whether the username input is correct. Please enter the correct username for input errors.

## 0xE0004 Repeated login 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Repeated login

### Reason
 Repeated login

### Action
 Please confirm that after other terminals have been offline, log in.

## 0xE0005 User unlogged-in 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 user unlogged-in

### Reason
 user unlogged-in

### Action
 Please log in to the username and password before executing the operation.

## 0xE0006 Joint_min_limit is too small or joint_max_limit is too large 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 joint_min_limit is too small or joint_max_limit is too large

### Reason
 joint_min_limit is too small or joint_max_limit is too large

### Action
 Please adjust the joint limit to the appropriate position before operating.

## 0xE0007 Fail to find kinematics inverse 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 fail to find kinematics inverse

### Reason
 fail to find kinematics inverse

### Action
 Robot reverse solution failed, please teach the robot again.

## 0xE0008 Fail to find kinematics forward 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 fail to find kinematics forward

### Reason
 fail to find kinematics forward

### Action
 Please contact Jaka technicians for consultation.

## 0xE0009 No such file or directory 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 no such file or directory

### Reason
 no such file or directory

### Action
 Ensure that the file or folder exists before performing operations.

## 0xE000A MD5 is not match 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 MD5 is not match

### Reason
 MD5 is not match

### Action
 Check whether the MD5 check is correct.

## 0xE000B Fail to calculate TCP 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 fail to calculate TCP

### Reason
 fail to calculate TCP

### Action
 The tool coordinate system is calculated incorrectly. Please check whether the tool coordinate system is set correctly.

## 0xE000C Invalid arguments 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 invalid arguments

### Reason
 invalid arguments

### Action
 The parameter is incorrect. Set the parameter to the correct one and perform operations.

## 0xE000D Too many outputs bind to the same status 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 too many outputs bind to the same status

### Reason
 too many outputs bind to the same status

### Action
 Modify the DI and DO status to ensure that the output is normal.

## 0xE000E The variable alias already exists 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 the variable alias already exists

### Reason
 the variable alias already exists

### Action
 Change the variable alias again before performing this operation.

## 0xE000F Parameter value out of range 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 parameter value out of range

### Reason
 parameter value out of range

### Action
 Modify the parameter value to an appropriate range before performing this operation.

## 0xE0010 Msgid out of range 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 msgid out of range

### Reason
 msgid out of range

### Action
 Modify the message ID to the appropriate range.

## 0xE0011 Strings should not exceed 16 characters 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 strings should not exceed 16 characters

### Reason
 strings should not exceed 16 characters

### Action
 Check whether the string length exceeds 16 characters and modify it to 16 characters before performing the operation.

## 0xE0012 Permission denied 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 permission denied

### Reason
 permission denied

### Action
 If you do not have the operation permission, log in again and change the permission before performing the operation.

## 0xE0013 Invalid user level 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 invalid user level

### Reason
 invalid user level

### Action
 If the operation permission is insufficient, log in again and switch the operation permission.

## 0xE0014 Username has been used 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 username has been used

### Reason
 username has been used

### Action
 Change the user name and log in again.

## 0xE0015 Upgrade package is invalid 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 upgrade package is invalid

### Reason
 upgrade package is invalid

### Action
 Check whether the installation package name is correct.

## 0xE0016 Unsupported jog coord 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 unsupported jog coord

### Reason
 unsupported jog coord

### Action
 Please check whether the jog coordinate system is supported and modify it correctly before performing operations.

## 0xE0017 Unsupported jog mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 unsupported jog mode

### Reason
 unsupported jog mode

### Action
 Please check whether the robot supports the current mode and switch to the correct mode before performing operations.

## 0xE0018 robot are moving 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 robot are moving

### Reason
 robot are moving

### Action
 Please check whether the robot is moving and stop the robot before operating.

## 0xE0019 cannot load program when a program isRunning 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 cannot load program when a program isRunning

### Reason
 cannot load program when a program isRunning

### Action
 The program is running. Stop the program before opening it.

## 0xE001A the pin has been occupied 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 the pin has been occupied

### Reason
 the pin has been occupied

### Action
 Check whether the current pin is occupied by another function.

## 0xE001B Fail to set reduced percentage in reduced mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Fail to set reduced percentage in reduced mode

### Reason
 Fail to set reduced percentage in reduced mode

### Action
 Please check to see if the robot is in reduced mode. Reduced percentage can be set in non-reduced mode.

## 0xE001C failed to generate scripts for trejectory reproduction 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 failed to generate scripts for trejectory reproduction

### Reason
 failed to generate scripts for trejectory reproduction

### Action
 Check whether the script file is correct.

## 0xE001D only one tio RS485 channel can be used torque sensor 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 only one tio RS485 channel can be used torque sensor

### Reason
 only one tio RS485 channel can be used torque sensor

### Action
 Before performing this operation, check whether the Tio RS485 channel is used by multiple channels to change it to one channel.

## 0xE001E fail torque sensor channel since it is working 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 fail torque sensor channel since it is working

### Reason
 fail torque sensor channel since it is working

### Action
 Check whether the torque sensor is working and perform operations after it stops working.

## 0xE001F invalid robot seiral number 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 invalid robot seiral number

### Reason
 invalid robot seiral number

### Action
 Please check whether the serial number of the robot is correct, and modify the correct serial number of the robot before operation.

## 0xE0020 memory server connection refused since it is not running 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 memory server connection refused since it is not running

### Reason
 memory server connection refused since it is not running

### Action
 Check whether the redis server is running and then perform operations.

## 0xE0021 unknown robot model 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 unknown robot model

### Reason
 unknown robot model

### Action
 Please check whether the robot model is correct.

## 0xE0022 Extio module quantity or Extio index out of range. 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Extio module quantity or Extio index out of range.

### Reason
 Extio module quantity or extended IO index out of range. 
Maximum Extio module quantity: 8 
Extio DI/DO index range: 0~64 
Extio AI/AO index range: 0~31

### Action
 Please check the Extio module or Extio index number before proceeding with the operation.

## 0xE0026 This operation is not allowed in simulation mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 This operation is not allowed in simulation mode

### Reason
 This operation is not allowed in simulation mode

### Action
 Please exit simulation mode and try again

## 0xE0027 Failed to read the network configuration file 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Failed to read the network configuration file

### Reason
 Failed to read the network configuration file

### Action
 Please try setting again. If it still appears, contact technical personnel to check the network configuration file

## 0xE0028 Too many inputs bind to the same function 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Too many inputs bind to the same function

### Reason
 Too many inputs bind to the same function

### Action
 Please check and modify the functional DI configuration.

## 0xE03E8 addon service numbers exceed the constranit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon service numbers exceed the constranit

### Reason
 addon service numbers exceed the constranit

### Action
 The number of AdDons started has checked the limit. Please clear some Addons before performing this operation.

## 0xE03E9 start addon service failed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 start addon service failed

### Reason
 start addon service failed

### Action
 The AddOn service fails to be started. Please check whether the AddOn configuration is correct before performing this operation.

## 0xE03EA stop addon service failed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 stop addon service failed

### Reason
 stop addon service failed

### Action
 The AddOn service fails to be shut down. Please check whether the AddOn configuration is correct before performing this operation.

## 0xE03EB addon config is invalid 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon config is invalid

### Reason
 addon config is invalid

### Action
 Before performing this operation, check whether the AddOn configuration file is correct.

## 0xE03EC addon service is not exist 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon service is not exist

### Reason
 addon service is not exist

### Action
 The corresponding AddOn is not detected. The AddOn may have been moved or deleted. Please refresh and try again.

## 0xE03ED addon config is not exist 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon config is not exist

### Reason
 addon config is not exist

### Action
 The AddOn configuration does not exist. Please confirm the current software version and contact JAKA technical support.

## 0xE03EE addon ini convention is unknown 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon ini convention is unknown

### Reason
 addon ini convention is unknown

### Action
 The convention configuration item configured for AddOn is not recognized. Please check whether the convention configuration is correct.

## 0xE03EF addon ini type is unknown 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon ini type is unknown

### Reason
 addon ini type is unknown

### Action
 The type configuration item configured by AddOn is not recognized. Please confirm that the type is a number in the range of 1 to 3.

## 0xE03F0 addon ini language type is unknown 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon ini language type is unknown

### Reason
 addon ini language type is unknown

### Action
 The language in the AddOn configuration was not recognized. Please verify that the language configuration is correct.

## 0xE03F1 addon ini service run err 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon ini service run err

### Reason
 addon ini service run err

### Action
 The language in the AddOn configuration was not recognized. Make sure that the service is not empty and that the number of service bytes is less than 50.

## 0xE03F2 addon ini service enabled is err 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon ini service enabled is err

### Reason
 addon ini service enabled is err

### Action
 The serviceenable configuration item in the AddOn configuration was not recognized. Please ensure that serviceenable is True or False

## 0xE03F3 addon ini option missing 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon ini option missing

### Reason
 addon ini option missing

### Action
 The AddOn configuration file does not contain necessary configuration items. Check whether the configuration file is correct

## 0xE03F4 addon ini option name error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon ini option name error

### Reason
 addon ini option name error

### Action
 The number of Name bytes in the AddOn configuration file exceeds 40 bytes. Ensure that the configuration is correct and try again.

## 0xE03F5 addon ini option description error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon ini option description error

### Reason
 addon ini option description error

### Action
 The number of description bytes in the AddOn configuration file exceeds 40 bytes. Ensure that the configuration is correct and try again.

## 0xE03F6 addon ini option server vision 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon ini option server vision

### Reason
 addon ini option server vision

### Action
 The version in the AddOn configuration is not recognized. Please confirm that the configuration is correct and try again.

## 0xE03F7 addon ini option url error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon ini option url error

### Reason
 addon ini option url error

### Action
 The url resolution in the AddOn configuration file fails. Please confirm that the configuration is correct and try again.

## 0xE03F8 addon ini option port error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon ini option port error

### Reason
 addon ini option port error

### Action
 The AddOn port fails to be assigned. Ensure that the configuration file is correct and contact the technical support personnel of the card.

## 0xE03F9 addon server running 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon server running

### Reason
 addon server running

### Action
 The AddOn service is running. Please stop it and try again.

## 0xE03FA the directory is already existed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 the directory is already existed

### Reason
 the directory is already existed

### Action
 Check whether the directory already exists and select the correct directory before performing the operation.

## 0xE03FB ip address existed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 ip address existed

### Reason
 ip address existed

### Action
 Check whether the IP address already exists. Change the IP address to a correct one before performing the operation.

## 0xE044C check sum not match, upgrading 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 check sum not match, upgrading

### Reason
 check sum not match, upgrading

### Action
 Please check whether the files are paired or re-download the upgrade program.

## 0xE044D wrong admin password, change user info 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 wrong admin password, change user info

### Reason
 wrong admin password, change user info

### Action
 Please enter the correct password.

## 0xE044E input passwords are inconsistent 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 input passwords are inconsistent

### Reason
 input passwords are inconsistent

### Action
 Please enter the same password twice.

## 0xE044F password need to be reset before login 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 password need to be reset before login

### Reason
 password need to be reset before login

### Action
 The password must be reset upon the first login.

## 0xE0450 new password cannot be the same with the old one 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 new password cannot be the same with the old one

### Reason
 new password cannot be the same with the old one

### Action
 The password cannot be changed the same as the last time.

## 0xE0451 the account is not activated, please contact the administrator 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 the account is not activated, please contact the administrator

### Reason
 the account is not activated, please contact the administrator

### Action
 

## 0xE0452 incorrect account to be activated 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 incorrect account to be activated

### Reason
 incorrect account to be activated

### Action
 The account is not activated. Contact the device administrator.

## 0xE0453 addon installer is busy 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon installer is busy

### Reason
 addon installer is busy

### Action
 AddOn installation in progress, please try again later.

## 0xE0454 failed to pack addon. 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 failed to pack addon.

### Reason
 failed to pack addon.

### Action
 The AddOn installation fails. Ensure that the AddOn installation package is correct and try again.

## 0xE0455 addon install or pack over time. 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 addon install or pack over time.

### Reason
 addon install or pack over time.

### Action
 The AddOn installation package is too large or contains too many files. Therefore, the installation times out. Reduce the volume of the installation package and the number of files and try again.

## 0xEFFFF miscellaneous error 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 miscellaneous error

### Reason
 miscellaneous error

### Action
 Please contact JAKA technician for consultation.

## 0x201002 TIO failed to power on 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 TIO cannot be initialized after the robot is powered on.

### Reason
 After all joints of the robot establish communication, no TIO data is received within 1s.

### Action
 Check whether the TIO communication line and power line are well connected; check whether the TIO board has any visible damage; contact the manufacturer for support



<script>
// 在页面加载完成后执行重定向
window.onload = function() {
  // 执行重定向到新网站
  window.location.replace("https://www.jaka.com/docs/");
};
</script>