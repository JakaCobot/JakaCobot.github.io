# Event code and meaning

## 0x0F0001 The robot body is not powered on 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The robot body is currently not powered on

### Reason
 A power state shutdown was detected while the controller was executing the state

### Action
 Confirm whether the power of the robot body is turned on; if the power of the robot body is not turned on, please turn on the power of the robot body first

## 0x0F0002 The robot is not enabled 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The robot is currently not enabled

### Reason
 When the controller executes the command, it detects that the robot is not enabled

### Action
 Confirm whether the robot is enabled; if not, please enable the robot first

## 0x0F0003 This operation cannot be performed in the current mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 This operation cannot be performed in the current mode. Currently in  mode,  command is not allowed

### Reason
 There are multiple modes inside the controller, and specific operations are allowed to run in specific modes. The mode switch is automatically completed internally, and when this problem occurs, it is caused by improperly handled operation permissions.

### Action
 Exit the current mode first, and then operate, for example, enable the robot before continuing to operate.

## 0x0F0004 Kinematics inverse calculation failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Kinematics inverse calculation failed

### Reason
 The calculation of inverse kinematics solution fails for the following reasons: (1) The given Cartesian space pose exceeds the reachable space of the robot; (2) The given Cartesian space pose has no solution in the solution space determined by the given reference angle.

### Action
 (1) Enter the coordinate editing interface in the manual interface, and enter the point information for verification; (2) Manual jog, check whether the robot target point or target path pose is reachable, if reachable, please change the pose and perform kinematic inverse solution calculate.

## 0x0F0005 Position set too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Position set too large

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0F0006 Robot joint reaches positive hard limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The robot joint cannot move when it reaches the positive hard limit

### Reason
 Generally, during JOG movement, the robot has reached the limit, but the command still moves in the direction of the limit and an error prompt is reported.

### Action
 Check whether the current position of the robot has reached the limit, and the robot cannot move beyond the limit.

## 0x0F0007 Robot joint reaches negative hard limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The robot joint reaches the negative hard limit and cannot move

### Reason
 Generally, during JOG movement, the robot has reached the limit, but the command still moves in the direction of the limit and an error prompt is reported.

### Action
 Check whether the current position of the robot has reached the limit, and the robot cannot move beyond the limit.

## 0x0F0008 Robot joint reaches positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The robot joints cannot move when they reach the positive soft limit

### Reason
 Generally, during JOG movement, the robot has reached the limit, but the command still moves in the direction of the limit and an error prompt is reported.

### Action
 Check whether the current position of the robot has reached the limit, and the robot cannot move beyond the limit.

## 0x0F0009 Robot joint reaches negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The robot joint reaches the negative soft limit and cannot move

### Reason
 Generally, during JOG movement, the robot has reached the limit, but the command still moves in the direction of the limit and an error prompt is reported.

### Action
 Check whether the current position of the robot has reached the limit, and the robot cannot move beyond the limit.

## 0x0F000A Cartesian target position exceeds positive max position limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Target position exceeds positive max position limit

### Reason
 This error is generally prompted when the command position given by Cartesian space motion exceeds the maximum limit of the axis.

### Action
 Please check if the given Cartesian space object is beyond the arm span.

## 0x0F000B Cartesian target position exceeds negative max position limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Target position exceeds negative max position limit

### Reason
 This error is generally prompted when the command position given by Cartesian space motion exceeds the maximum limit of the axis.

### Action
 Please check if the given Cartesian space object is beyond the arm span.

## 0x0F000E Manual operations cannot be performed during the joint zero return process 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Manual operation is not possible during the Home process

### Reason
  This error is generally prompted when the manual motion control of the robot is performed during the robot zero return setting process.

### Action
 Confirm whether the robot is currently returning to zero, and if so, wait for the robot to return to zero before continuing.

## 0x0F000F Command joint index is invalid 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Command joint index is invalid

### Reason
 This problem is generally caused by an invalid given axis/joint index when controlling a single axis in Cartesian space or a single joint in joint space.

### Action
 Please check whether the index given in the command is correct; if the command is correct, please export the log and contact JAKA technical service personnel.

## 0x0F0010 Invalid motion command speed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid motion command speed

### Reason
 Internal reserved

### Action
 Internal reserved

## 0x0F0011  The target position of the motion instruction exceeds the machine limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The target position of the motion instruction exceeds the machine limit

### Reason
  The target position of joint motion or linear motion exceeds the limit of the robot.

### Action
 Manual jog, check whether the target position is reachable and whether it will exceed the joint limit.

## 0x0F0012 Non-joint mode cannot perform home operation 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Non-joint mode cannot perform home operation

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0F0013 home in progress 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 home in progress

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0F0014 Failed to exit protected mode 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to exit protected mode

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0F0015 The robot does not start 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The robot does not start

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0F0016 The robot joint is at the soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The robot joint is at the soft limit

### Reason
 The robot joints are in the soft limit and cannot complete the instruction operation.

### Action
 Check the current state of the joints of the robot, whether it has reached the joint limit, if it has reached the limit, it cannot continue to move towards the overrun direction, but can only move in the non-overrun direction, please jog the overrun joint back to the joint limit range on the teaching page or modify the limit on the setting page.

## 0x0F0017 The target position of the motion instruction is unreachable 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The target position of the motion instruction is unreachable

### Reason
 The target position of the motion instruction is not reachable.

### Action
 The target position is outside the working range or at a singularity point. Manual operation checks whether the joint can move to the target point, if possible, consider changing the current robot pose to reach the target point from other paths or poses.

## 0x0F0018 Singularity reached protective stop 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Singularity reached protective stop

### Reason
 The robot is about to reach a singular configuration in the motion path and cannot continue to move in Cartesian space. This error is generally reported when an error occurs when calculating the inverse solution or when the calculated inverse solution is in a different solution space from the previous cycle.

### Action
 Check whether the current path and posture of the robot are reachable. If not, replace the initial posture or path to reach the target position. If you confirm that there is no problem with the command path, please collect relevant data and contact JAKA technical service personnel.

## 0x0F0019 CAN device initialization failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 CAN device initialization failed

### Reason
 CAN device initialization failed.

### Action
 In the offline simulation environment, if there is no CAN device, an error will be reported, and subsequent optimization will be performed. In the actual machine environment, please restart the robot, if it persists, please contact JAKA technical service personnel.

## 0x0F001A One-click upgrade timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 One-click upgrade timeout

### Reason
 One-click upgrade takes too long

### Action
 Please check the network conditions and equipment conditions before proceeding.

## 0x0F001B One-click upgrade exception 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 One-click upgrade exception

### Reason
 One-click upgrade failed

### Action
 Please check the source and validity of the one-key upgrade package.

## 0x0F0020 Linear motion to target position failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Linear motion to target position failed

### Reason
 Linear motion to target position failed. It is reported when the singular point is passed during the general Cartesian motion (straight line or arc motion), especially when the initial point or end point is a singular point.

### Action
 If the linear motion path point or target point is unreachable or passes through a singular point, manually check whether the joint can move to the target point. If possible, consider changing the current robot posture to reach the target point from other paths or postures. Note: Since the program pointer will be ahead of the actual action pointer, the error message may be triggered in advance, that is, it will be reported when it is parsed but not executed to the corresponding line. When dealing with this problem, please check whether the subsequent commands in the operating program are reachable based on the current location.

## 0x0F0021 Robot model does not support 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot model does not support

### Reason
 Robot model not supported. Generally speaking, the latest controller software will support all existing robot models, but this problem will occur when connecting new models of robots to the old controller software. When this problem occurs, the DH parameters, dynamic parameters and various restrictions of the robot may be wrong, so enable the control carefully.

### Action
 Check the serial number of the robot on the APP information page, and contact JAKA to obtain the supported software version.

## 0x0F0022 Invalid robot serial number 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid robot serial number

### Reason
 Robot serial number is invalid. The controller software supports specific robot models, and specific robot models have specific coding rules. The serial number of the robot on the actual machine is read from the servo. If the serial number does not meet the supported models and rules, an error will be reported.

### Action
 Check the robot serial number on the APP information page, check the actual serial number of the robot body, and check whether the serial number is configured correctly. If the serial number is correct, please contact JAKA to obtain the latest version.

## 0x0F0023 Invalid load identification track index 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid load identification track index

### Reason
 System internal sending error

### Action
 Re-identify the load; update the controller; contact JAKA for support

## 0x0F0024 The magnification cannot be set in the magnification mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The magnification cannot be set in the magnification mode

### Reason
 The magnification cannot be set in the magnification mode. This error is generally prompted when the robot is in the override mode or in the protective stop mode to set the override.

### Action
 Please check whether the robot is currently in the magnification mode, if so, please exit the magnification mode first, and then set the magnification; if the robot is not in the magnification mode, please confirm the current software version and contact JAKA technical service personnel.

## 0x0F0025 Load identification trajectory definition does not meet specification 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Load identification trajectory definition does not meet specification

### Reason
 The load identification trajectory definition does not meet specification. Robot load identification needs to meet certain constraints to ensure the accuracy of the identification results. When the user input does not meet the prompt requirements, the question will be prompted.

### Action
 Please operate according to the trajectory specification prompted on the APP load identification interface, and perform load identification again.

## 0x0F0026 Please enable it before turning off the power 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Please enable it before turning off the power

### Reason
 Please enable it before turning off the power

### Action
 Please enable it first and then turn off the power.

## 0x0F0027 Cannot be enabled during program running 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Cannot be enabled during program running

### Reason
 It cannot be enabled during program running.

### Action
 Please stop the program first, and then enable it.

## 0x0F0028 There is a deviation in the load setting 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 There is a deviation in the load setting, please check

### Reason
 Please check if there is a deviation in the load setting. This error prompt is generally checked when the enable is completed. If the deviation between the actual output torque of the robot and the feed-forward torque exceeds a certain range, this error will be reported and enabled.

### Action
 1) Please check whether the load mass and center of mass are set correctly; 2) Please check whether the robot model and serial number are correctly identified.

## 0x0F0029 Failed to add circular movement command 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to add circular movement command

### Reason
 Add three collinear or singular positions for circular motion teaching

### Action
 1). Please check whether the start point, middle point and end point of the arc movement are coincident; 2), please check whether the start point, middle point and end point of the arc movement are singular positions;

## 0x0F0030 Joint speed limit is set to 0 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint speed limit is set to 0

### Reason
 The limit value of the joint speed is 0

### Action
 Check whether the "joint speed limit" value in the APP security setting interface is set to 0°/s

## 0x0F0031 Three position enable limit 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Three position enable limit

### Reason
 Configure and enable the three-position enable safety function in the safety settings.

### Action
 The three-position enabling safety function has restrictions on robot control, please check the status of the three-position switch, or choose to disable the three-position enabling function according to the safety situation.

## 0x0F0032 Motion types other than linear or arc motion cannot be tracked 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Motion types other than linear or arc motion cannot be tracked

### Reason
 Conveyor belt tracking can only track the Cartesian space motion type, while other motion types of non-linear motion and smooth motion are nested in the conveyor belt tracking module.

### Action
 Please check whether other motion type modules of non-linear motion and smooth motion are nested in the conveyor belt tracking;

## 0x0F0038 Failed to add joint movement instruction 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to add joint movement instruction

### Reason
 Unreasonable setting of joint motion segment

### Action
 1) Please confirm whether the current robot joint position and the target joint position are correct

## 0x000030 Joint one movement speed exceeds the limit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint one movement speed exceeds the limit

### Reason
 The movement speed of joint one exceeds the limit. This error is generally reported when the command issued by the controller exceeds the actual speed limit of the joint.

### Action
 1) Please confirm whether the speed constraint of the current robot has been artificially modified and improved, if yes, contact JAKA technical staff 2) If it has not been modified but an error is reported, please confirm whether reducing the speed or acceleration constraint can eliminate the phenomenon; if it still occurs, please contact the corresponding Export the diagnostic information and contact JAKA technical service personnel.

## 0x010030 The movement speed of joint 2 exceeds the limit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The movement speed of joint 2 exceeds the limit

### Reason
 The movement speed of joint 2 exceeds the limit. This error is generally reported when the command issued by the controller exceeds the actual speed limit of the joint.

### Action
 1) Please confirm whether the speed constraint of the current robot has been artificially modified and improved, if yes, contact JAKA technical staff 2) If it has not been modified but an error is reported, please confirm whether reducing the speed or acceleration constraint can eliminate the phenomenon; if it still occurs, please contact the corresponding Export the diagnostic information and contact JAKA technical service personnel.

## 0x020030 Joint 3 movement speed exceeds the limit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 3 movement speed exceeds the limit

### Reason
 The movement speed of joint 3 exceeds the limit. This error is generally reported when the command issued by the controller exceeds the actual speed limit of the joint.

### Action
 1) Please confirm whether the speed constraint of the current robot has been artificially modified and improved, if yes, contact JAKA technical staff 2) If it has not been modified but an error is reported, please confirm whether reducing the speed or acceleration constraint can eliminate the phenomenon; if it still occurs, please contact the corresponding Export the diagnostic information and contact JAKA technical service personnel.

## 0x030030 Joint 4 movement speed exceeds the limit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 4 movement speed exceeds the limit

### Reason
 The movement speed of joint 4 exceeds the limit. This error is generally reported when the command issued by the controller exceeds the actual speed limit of the joint.

### Action
 1) Please confirm whether the speed constraint of the current robot has been artificially modified and improved, if yes, contact JAKA technical staff 2) If it has not been modified but an error is reported, please confirm whether reducing the speed or acceleration constraint can eliminate the phenomenon; if it still occurs, please contact the corresponding Export the diagnostic information and contact JAKA technical service personnel.

## 0x040030 Joint five movement speed exceeds the limit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint five movement speed exceeds the limit

### Reason
 The movement speed of joint five exceeds the limit. This error is generally reported when the command issued by the controller exceeds the actual speed limit of the joint.

### Action
 1) Please confirm whether the speed constraint of the current robot has been artificially modified and improved, if yes, contact JAKA technical staff 2) If it has not been modified but an error is reported, please confirm whether reducing the speed or acceleration constraint can eliminate the phenomenon; if it still occurs, please contact the corresponding Export the diagnostic information and contact JAKA technical service personnel.

## 0x050030 Movement speed of joint 6 exceeds the limit 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Movement speed of joint 6 exceeds the limit

### Reason
 The movement speed of joint six exceeds the limit. This error is generally reported when the command issued by the controller exceeds the actual speed limit of the joint.

### Action
 1) Please confirm whether the speed constraint of the current robot has been artificially modified and improved, if yes, contact JAKA technical staff 2) If it has not been modified but an error is reported, please confirm whether reducing the speed or acceleration constraint can eliminate the phenomenon; if it still occurs, please contact the corresponding Export the diagnostic information and contact JAKA technical service personnel.

## 0x000031 As soon as the joint reaches the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 As soon as the joint reaches the positive soft limit

### Reason
 Once the joint reaches the positive soft limit, this error generally appears when the robot limit is triggered during the movement of the robot.

### Action
 Please check whether the corresponding joint angle value of the robot has reached the limit. If so, please modify the job path.

## 0x010031 Joint 2 reaches the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 reaches the positive soft limit

### Reason
 Joint 2 reaches the positive soft limit. This error generally occurs when the robot limit is triggered during the movement of the robot.

### Action
 Please check whether the corresponding joint angle value of the robot has reached the limit. If so, please modify the job path.

## 0x020031 Joint 3 reaches the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 reaches the positive soft limit

### Reason
 Joint 3 reaches the positive soft limit. This error generally occurs when the robot limit is triggered during the movement of the robot.

### Action
 Please check whether the corresponding joint angle value of the robot has reached the limit. If so, please modify the job path.

## 0x030031 Joint 4 reaches the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 reaches the positive soft limit

### Reason
 Joint 4 reaches the positive soft limit. This error generally occurs when the robot limit is triggered during the movement of the robot.

### Action
 Please check whether the corresponding joint angle value of the robot has reached the limit. If so, please modify the job path.

## 0x040031 Joint 5 reaches the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 reaches the positive soft limit

### Reason
 Joint 5 reaches the positive soft limit. This error generally occurs when the robot limit is triggered during the movement of the robot.

### Action
 Please check whether the corresponding joint angle value of the robot has reached the limit. If so, please modify the job path.

## 0x050031 Joint 6 reaches the positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 reaches the positive soft limit

### Reason
 Joint 6 reaches the positive soft limit. This error generally occurs when the robot limit is triggered during the movement of the robot.

### Action
 Please check whether the corresponding joint angle value of the robot has reached the limit. If so, please modify the job path.

## 0x000032 As soon as the joint reaches the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 As soon as the joint reaches the negative soft limit

### Reason
 Once the joint reaches the negative soft limit, this error generally appears when the robot limit is triggered during the movement of the robot.

### Action
 Please check whether the corresponding joint angle value of the robot has reached the limit. If so, please modify the job path.

## 0x010032 Joint 2 reaches the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 reaches the negative soft limit

### Reason
 Joint 2 reaches the negative soft limit. This error generally occurs when the robot limit is triggered during the movement of the robot.

### Action
 Please check whether the corresponding joint angle value of the robot has reached the limit. If so, please modify the job path.

## 0x020032 Joint 3 reaches the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 reaches the negative soft limit

### Reason
 Joint 3 reaches the negative soft limit. This error generally occurs when the robot limit is triggered during the robot movement.

### Action
 Please check whether the corresponding joint angle value of the robot has reached the limit. If so, please modify the job path.

## 0x030032 Joint 4 reaches the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 reaches the negative soft limit

### Reason
 Joint 4 reaches the negative soft limit. This error generally occurs when the robot limit is triggered during the movement of the robot.

### Action
 Please check whether the corresponding joint angle value of the robot has reached the limit. If so, please modify the job path.

## 0x040032 Joint 5 reaches the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 reaches the negative soft limit

### Reason
 Joint 5 reaches the negative soft limit. This error generally occurs when the robot limit is triggered during the movement of the robot.

### Action
 Please check whether the corresponding joint angle value of the robot has reached the limit. If so, please modify the job path.

## 0x050032 Joint 6 reaches the negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 reaches the negative soft limit

### Reason
 Joint 6 has reached the negative soft limit. This error generally occurs when the robot limit is triggered during the movement of the robot.

### Action
 Please check whether the corresponding joint angle value of the robot has reached the limit. If so, please modify the job path.

## 0x0F0033 Singularity reached protective stop 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Singularity reached protective stop

### Reason
 The robot is about to reach a singular configuration in the motion path and cannot continue to move in Cartesian space. This error generally appears when the inverse solution is abnormal during the movement. When there is external tracking or compensation, such as compliance control or conveyor belt tracking, this error may also be caused by abnormal external input.

### Action
 1) Check whether the current path and attitude of the robot are reachable. If not, replace the initial attitude or path to reach the target position or change the attitude of the target point; 2) If it is currently under force control compliance control, please check whether there is any abnormal external force to eliminate Impact; 3) If the conveyor belt is currently in the tracking state, please check whether the conveyor belt speed and encoder feedback are normal, large fluctuations will cause this problem

## 0x0F0034 Collision detected protective stop 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Collision detected protective stop

### Reason
 collision-protective stop has been detected. This question is usually prompted when the system detects a collision.

### Action
 1) Check whether there is interference around the robot and whether there is a collision; 2) Check whether the serial number and model of the robot are correctly identified; 3) Check whether the robot load and installation angle are set correctly.

## 0x0F0035 Protective stop beyond attitude limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Protective stop beyond attitude limit

### Reason
 A protective stop has been detected out of attitude limits. This problem is generally prompted when the end of the robot triggers to the tool limit.

### Action
 Please check whether the current robot motion trajectory is within the tool limit setting range. Or try to modify the size of the active range in the tool limit.

## 0x0F0036 Tool end exceeds maximum position deviation limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tool end exceeds maximum position deviation limit

### Reason
 The deviation between the actual position of the robot tool end and the command position exceeds the set deviation limit value;

### Action
 Please check whether the robot movement deviates from the command position;

## 0x0F0037 Tool end line speed exceeds maximum speed limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tool end line speed exceeds maximum speed limit

### Reason
 The linear velocity at the end of the robot exceeds the set maximum linear velocity limit at the end during joint movement;

### Action
 Please check whether the TCP speed limit on the APP "Security Settings"--"Collision Protection" interface is correct; if there is no problem with the TCP speed limit value, please reduce the joint motion command speed and acceleration;

## 0x000035 The JOG target position exceeds the positive soft limit of joint 1 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The JOG target position exceeds the positive soft limit of joint 1

### Reason
 Manually control (JOG) the robot to move, when the target point of the movement exceeds the limit value set by the robot joint, this alarm will appear

### Action
 1) Please check whether the joint limit value has been modified in the robot safety settings. 2) Please check whether the target point is reasonable, if not, please modify the position of the target point.

## 0x010035 JOG target position exceeds joint 2 positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 JOG target position exceeds joint 2 positive soft limit

### Reason
 Manually control (JOG) the robot to move, when the target point of the movement exceeds the limit value set by the robot joint, this alarm will appear

### Action
 1) Please check whether the joint limit value has been modified in the robot safety settings. 2) Please check whether the target point is reasonable, if not, please modify the position of the target point.

## 0x020035 The JOG target position exceeds the three positive soft limits of the joint 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The JOG target position exceeds the three positive soft limits of the joint

### Reason
 Manually control (JOG) the robot to move, when the target point of the movement exceeds the limit value set by the robot joint, this alarm will appear

### Action
 1) Please check whether the joint limit value has been modified in the robot safety settings. 2) Please check whether the target point is reasonable, if not, please modify the position of the target point.

## 0x030035 The JOG target position exceeds the positive soft limit of joint four 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The JOG target position exceeds the positive soft limit of joint four

### Reason
 Manually control (JOG) the robot to move, when the target point of the movement exceeds the limit value set by the robot joint, this alarm will appear

### Action
 1) Please check whether the joint limit value has been modified in the robot safety settings. 2) Please check whether the target point is reasonable, if not, please modify the position of the target point.

## 0x040035 The JOG target position exceeds the five positive soft limit of the joint 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The JOG target position exceeds the five positive soft limit of the joint

### Reason
 Manually control (JOG) the robot to move, when the target point of the movement exceeds the limit value set by the robot joint, this alarm will appear

### Action
 1) Please check whether the joint limit value has been modified in the robot safety settings. 2) Please check whether the target point is reasonable, if not, please modify the position of the target point.

## 0x050035 The JOG target position exceeds the joint six positive soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The JOG target position exceeds the joint six positive soft limit

### Reason
 Manually control (JOG) the robot to move, when the target point of the movement exceeds the limit value set by the robot joint, this alarm will appear

### Action
 1) Please check whether the joint limit value has been modified in the robot safety settings. 2) Please check whether the target point is reasonable, if not, please modify the position of the target point.

## 0x000036 The JOG target position exceeds the negative soft limit of joint 1 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The JOG target position exceeds the negative soft limit of joint 1

### Reason
 Manually control (JOG) the robot to move, when the target point of the movement exceeds the limit value set by the robot joint, this alarm will appear

### Action
 1) Please check whether the joint limit value has been modified in the robot safety settings. 2) Please check whether the target point is reasonable, if not, please modify the position of the target point.

## 0x010036 JOG target position exceeds joint 2 negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 JOG target position exceeds joint 2 negative soft limit

### Reason
 Manually control (JOG) the robot to move, when the target point of the movement exceeds the limit value set by the robot joint, this alarm will appear

### Action
 1) Please check whether the joint limit value has been modified in the robot safety settings. 2) Please check whether the target point is reasonable, if not, please modify the position of the target point.

## 0x020036 The JOG target position exceeds the joint three negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The JOG target position exceeds the joint three negative soft limit

### Reason
 Manually control (JOG) the robot to move, when the target point of the movement exceeds the limit value set by the robot joint, this alarm will appear

### Action
 1) Please check whether the joint limit value has been modified in the robot safety settings. 2) Please check whether the target point is reasonable, if not, please modify the position of the target point.

## 0x030036 The JOG target position exceeds the joint four negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The JOG target position exceeds the joint four negative soft limit

### Reason
 Manually control (JOG) the robot to move, when the target point of the movement exceeds the limit value set by the robot joint, this alarm will appear

### Action
 1) Please check whether the joint limit value has been modified in the robot safety settings. 2) Please check whether the target point is reasonable, if not, please modify the position of the target point.

## 0x040036 The JOG target position exceeds the joint five negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The JOG target position exceeds the joint five negative soft limit

### Reason
 Manually control (JOG) the robot to move, when the target point of the movement exceeds the limit value set by the robot joint, this alarm will appear

### Action
 1) Please check whether the joint limit value has been modified in the robot safety settings. 2) Please check whether the target point is reasonable, if not, please modify the position of the target point.

## 0x050036 The JOG target position exceeds the joint six negative soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The JOG target position exceeds the joint six negative soft limit

### Reason
 Manually control (JOG) the robot to move, when the target point of the movement exceeds the limit value set by the robot joint, this alarm will appear

### Action
 1) Please check whether the joint limit value has been modified in the robot safety settings. 2) Please check whether the target point is reasonable, if not, please modify the position of the target point.

## 0x0F0040 Unable to enter drag mode on soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unable to enter drag mode on soft limit

### Reason
 It is not possible to enter the dragging mode on the soft limit.

### Action
 Check the current state of the joints of the robot, whether it has reached the joint limit, if it has reached the limit, it cannot continue to move towards the overrun direction, but can only move in the non-overrun direction, please jog the overrun joint back to the joint limit range on the teaching page or modify the limit on the setting page.

## 0x0F0041 Dragging beyond the soft limit will quit dragging 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Dragging beyond the soft limit will quit dragging

### Reason
 Dragging beyond the soft limit will quit dragging. This prompt is generally prompted when the drag exceeds the limit.

### Action
 Check the current state of the robot joints. The robot cannot continue to move towards the overrun direction, but can only move in the non-overrun direction. You can drag the overrun back to the joint limit range, or exit the drag mode, and modify the software on the setting page. Limit, increase the soft limit range of the joint, but the setting range of the soft limit cannot exceed the hard limit.

## 0x000042 Joint one is about to reach the soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint one is about to reach the soft limit

### Reason
 Joint one is about to reach the soft limit.

### Action
 Check the current joint state of the robot, whether it is about to reach the joint limit, it is recommended to move in the direction of non-overrunning, please jog the joint that is about to exceed the limit range on the teaching page, or modify the soft limit on the setting page, increase The soft limit range of the joint, but the setting range of the soft limit cannot exceed the hard limit.

## 0x010042 Joint 2 is about to reach the soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 is about to reach the soft limit

### Reason
 Joint 2 is about to reach the soft limit.

### Action
 Check the current joint state of the robot, whether it is about to reach the joint limit, it is recommended to move in the direction of non-overrunning, please jog the joint that is about to exceed the limit range on the teaching page, or modify the soft limit on the setting page, increase The soft limit range of the joint, but the setting range of the soft limit cannot exceed the hard limit.

## 0x020042 Joint 3 is about to reach the soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 is about to reach the soft limit

### Reason
 Joint three is about to reach the soft limit.

### Action
 Check the current joint state of the robot, whether it is about to reach the joint limit, it is recommended to move in the direction of non-overrunning, please jog the joint that is about to exceed the limit range on the teaching page, or modify the soft limit on the setting page, increase The soft limit range of the joint, but the setting range of the soft limit cannot exceed the hard limit.

## 0x030042 Joint 4 is about to reach the soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 is about to reach the soft limit

### Reason
 Joint four is about to reach the soft limit.

### Action
 Check the current joint state of the robot, whether it is about to reach the joint limit, it is recommended to move in the direction of non-overrunning, please jog the joint that is about to exceed the limit range on the teaching page, or modify the soft limit on the setting page, increase The soft limit range of the joint, but the setting range of the soft limit cannot exceed the hard limit.

## 0x040042 Joint 5 is about to reach the soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 is about to reach the soft limit

### Reason
 Joint five is about to reach the soft limit.

### Action
 Check the current joint state of the robot, whether it is about to reach the joint limit, it is recommended to move in the direction of non-overrunning, please jog the joint that is about to exceed the limit range on the teaching page, or modify the soft limit on the setting page, increase The soft limit range of the joint, but the setting range of the soft limit cannot exceed the hard limit.

## 0x050042 Joint 6 is about to reach the soft limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 is about to reach the soft limit

### Reason
 Joint six is about to reach the soft limit.

### Action
 Check the current joint state of the robot, whether it is about to reach the joint limit, it is recommended to move in the direction of non-overrunning, please jog the joint that is about to exceed the limit range on the teaching page, or modify the soft limit on the setting page, increase The soft limit range of the joint, but the setting range of the soft limit cannot exceed the hard limit.

## 0x0F0043 The robot is not enabled and cannot enter the drag 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The robot is not enabled and cannot enter the drag

### Reason
 The robot cannot be dragged if it is not enabled. This problem is generally prompted when the robot detects that the drag command is triggered when the robot is not enabled.

### Action
 Please check whether the robot is powered on and enabled; please check whether it is due to external false triggering of the drag button.

## 0x0F0044 The robot is moving and cannot enter the drag 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The robot is moving and cannot enter the drag

### Reason
 The robot is moving and cannot enter the drag. The drag mode requires the robot to be switched in when it is in manual mode and in a stationary state.

### Action
 If the robot is running a program, stop the current program first, and then start dragging. If the robot is moving manually, stop and try again.

## 0x0F0045 If the joint torque exceeds the limit, it cannot be dragged 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 If the joint torque exceeds the limit, it cannot be dragged

### Reason
 If the joint torque exceeds the limit, it cannot be dragged. Generally speaking, it is caused by dragging too fast or the collision is too sensitive.

### Action
 Reduce the dragging speed or set the collision level higher in the settings interface.

## 0x0F0046 The drag button is blocked and cannot enter the drag 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The drag button is blocked and cannot enter the drag

### Reason
 The function of the drag button (FREE) at the end of the robot is disabled, and the drag operation cannot be performed using the end button (FREE).

### Action
 Please check whether the drag and drop function is disabled in the software hardware and communication-auxiliary hardware settings, if disabled, please enable this function.

## 0x0F0047 Program pause/resume button blocked 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Program pause/resume button blocked

### Reason
 The program pause/resume function of the top button on the end of the robot is disabled, and the program pause/resume operation cannot be performed using the top button.

### Action
 Please check whether the program suspend/resume function is disabled in the software hardware and communication-auxiliary hardware settings, if disabled, please enable this function.

## 0x0F0048 The point button is blocked and cannot record the point 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The point button is blocked and cannot record the point

### Reason
 The robot end point teaching button (POINT) function is disabled, and the end button (POINT) cannot be used for point teaching operations.

### Action
 Please check whether the point recording function is disabled in the software hardware and communication-auxiliary hardware settings, if disabled, please enable this function.

## 0x0F0050 Torque sensor not ready 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Torque sensor not ready Cannot enable traction control

### Reason
 The torque sensor is not ready to enable power-controlled traction control. This problem generally occurs when the admittance control or operating program compliance control is turned on and it is detected that the state of the torque sensor is not running.

### Action
 Please check that the torque sensor is turned on.

## 0x0F0051 The torque sensor mode cannot be switched in force control traction mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The torque sensor mode cannot be switched in force control traction mode

### Reason
 After the force control drag is turned on, the torque sensor cannot be turned off directly to avoid unexpected results.

### Action
 If you need to turn off the sensor, please exit the force control drag first, and then turn off the sensor

## 0x0F0052 Torque sensor failure during force control traction 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Torque sensor failure during force control traction

### Reason
 The torque sensor is faulty during force control traction. The possible reason is that the communication link between the controller and the external torque sensor is disconnected.

### Action
 Please check whether the communication status of the torque sensor is normal, including the hardware connection line and software configuration.

## 0x0F0054 Unable to perform single-step operation while the program is running 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Unable to perform single-step operation while the program is running

### Reason
 Single step operations cannot be performed while the program is running.

### Action
 If you want to use the single-step debugging function, you can first stop running the current program, and then perform single-step debugging.

## 0x0F0055 Collision sensitivity cannot be set during dragging 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Collision sensitivity cannot be set during dragging

### Reason
 Collision sensitivity cannot be set during dragging.

### Action
 Exit the drag mode first, and then set the sensitivity.

## 0x0F0056 Expansion IO module is not running 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The extended IO module is not running and cannot be accessed

### Reason
 The extended IO module is not running and cannot be accessed.

### Action
 Check whether the extended IO module is running on the IO monitoring interface.

## 0x0F0057 Unable to set dynamics feedforward 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Dynamics feedforward cannot be enabled or disabled when the robot is in motion

### Reason
 The dynamics feedforward cannot be enabled or disabled when the robot is moving. This error will only appear when using the secondary development interface.

### Action
 Stop the current robot's motion first, and then set the dynamics feedforward of the robot.

## 0x0F0058 Feature license not detected 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Feature license not detected

### Reason
 No feature usage license detected. The activation of some functions requires software authorization. If the software is detected to be unauthorized during the use of the function, this error will be prompted.

### Action
 Contact JAKA staff to purchase a function license.

## 0x0F0059 Protective stop reset failed 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Protective stop reset failed

### Reason
 Protective stop reset failed. This error is generally prompted when it is detected that the protective stop function input is still in the trigger state during the protective stop reset operation.

### Action
 Please check whether the function IO triggers the protective stop, if so, please exit the protective stop mode first and then reset the protective stop.

## 0x0F0060 The override cannot be set in protective stop mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The override cannot be set in protective stop mode

### Reason
 Override cannot be set in protective stop mode.

### Action
 Exit the protective stop mode first, and then set the speed multiplier of the robot.

## 0x000061 Protective stop joints as soon as a collision is detected 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Protective stop joints as soon as a collision is detected

### Reason
 Protective stop joints as soon as a collision is detected

### Action
 1) Check the on-site environment to see if a real collision has occurred. If yes, please optimize the operation procedure; 2) If a false collision occurs, please check whether the load and installation angle are set correctly; 3) Manually control the movement of the joint that reports the error and check whether there is an internal jam in the corresponding joint.

## 0x010061 Protective stop joint two detected collision 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Protective stop joint two detected collision

### Reason
 Protective stop joint two detected collision

### Action
 1) Check the on-site environment to see if a real collision has occurred. If yes, please optimize the operation procedure; 2) If a false collision occurs, please check whether the load and installation angle are set correctly; 3) Manually control the movement of the joint that reports the error and check whether there is an internal jam in the corresponding joint.

## 0x020061 Protective Stop Joint Three Collision Detected 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Protective Stop Joint Three Collision Detected

### Reason
 Protective Stop Joint Three Collision Detected

### Action
 1) Check the on-site environment to see if a real collision has occurred. If yes, please optimize the operation procedure; 2) If a false collision occurs, please check whether the load and installation angle are set correctly; 3) Manually control the movement of the joint that reports the error and check whether there is an internal jam in the corresponding joint.

## 0x030061 Protective Stop Joint Four Collision Detected 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Protective Stop Joint Four Collision Detected

### Reason
 Protective Stop Joint Four Collision Detected

### Action
 1) Check the on-site environment to see if a real collision has occurred. If yes, please optimize the operation procedure; 2) If a false collision occurs, please check whether the load and installation angle are set correctly; 3) Manually control the movement of the joint that reports the error and check whether there is an internal jam in the corresponding joint.

## 0x040061 Protective Stop Joint Five Collision Detected 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Protective Stop Joint Five Collision Detected

### Reason
 Protective Stop Joint Five Collision Detected

### Action
 1) Check the on-site environment to see if a real collision has occurred. If yes, please optimize the operation procedure; 2) If a false collision occurs, please check whether the load and installation angle are set correctly; 3) Manually control the movement of the joint that reports the error and check whether there is an internal jam in the corresponding joint.

## 0x050061 Protective Stop Joint Six Collision Detected 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Protective Stop Joint Six Collision Detected

### Reason
 Protective Stop Joint Six Collision Detected

### Action
 1) Check the on-site environment to see if a real collision has occurred. If yes, please optimize the operation procedure; 2) If a false collision occurs, please check whether the load and installation angle are set correctly; 3) Manually control the movement of the joint that reports the error and check whether there is an internal jam in the corresponding joint.

## 0x0F0062  TIO RS485 channel torque sensor mode is not enabled 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 TIO RS485 channel torque sensor mode is not enabled

### Reason
  TIO RS485 channel torque sensor mode is not enabled. This problem is generally prompted when an abnormal pin multiplexing configuration is detected when the TIO+ torque sensor is enabled.

### Action
 When the sensor type VI is selected in the torque sensor settings, enabling the torque sensor at this time will detect whether any channel of the TIO is correctly set to the torque sensor mode. If it is not set correctly, the above information will be wrong, please check the relevant configuration.

## 0x0F0063 Support at most one TIO RS485 channel to enable torque sensor mode 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Support at most one TIO RS485 channel to enable torque sensor mode

### Reason
 It supports at most one TIO RS485 channel to be enabled as a torque sensor mode. Due to the bandwidth limitation of the CAN channel, only one of the two RS485 channels of TIO+ can be used as a torque sensor at most.

### Action
 Limited by CAN communication bandwidth, TIO's two reusable RS485 channels only allow one of them to be used as a torque sensor mode. If you need to modify the channel configuration of the torque sensor, please change the mode of the RS485 channel that is currently set as the torque sensor mode before proceeding.

## 0x0F0064 Failed to modify communication parameters 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Communication parameter modification failed The torque sensor using this channel is running

### Reason
 Modification of TIO RS485 communication parameters failed. The torque sensor using this channel is running.

### Action
 It is forbidden to modify its communication parameters when the torque sensor is running. Please stop running first, and then modify the communication parameters.

## 0x0F0065 Invalid semaphore definition 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid semaphore definition

### Reason
 Invalid semaphore definition. The state of the Modbus gripper at the end is queried through the semaphore mechanism, and the definition of the semaphore needs to meet certain specifications, including name, function code, address, etc. This error will be prompted when the definition specification is not met.

### Action
 Please check whether the current TIO RS485 channel ID is correct, whether the specified channel mode setting is Modbus RTU, and whether the function code is supported (currently only function codes 01, 02, 03, and 04 are supported).

## 0x0F0066 The semaphore exceeds the maximum supported number 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The semaphore exceeds the maximum supported number (8)

### Reason
 Limited by the bandwidth, there is a limit to the number of semaphores supported, a maximum of 8 is supported, and an error will be reported if the number exceeds this number.

### Action
 Currently, a maximum of 8 semaphores can be defined, please delete unnecessary semaphore definitions.

## 0x0F0067 The specified semaphore does not exist 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The specified semaphore does not exist

### Reason
 The specified semaphore does not exist. This error generally refers to a semaphore that does not exist in the job program.

### Action
 Please check the semaphore-related program calls and semaphore definitions to see if there is any reference to an undefined semaphore.

## 0x0F0068  Failed to send TIO RS485 command 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Failed to send TIO RS485 command The command queue is full

### Reason
 The command queue is full, and sending the TIO RS485 command failed. This problem generally occurs when calling semaphore refresh with high frequency or sending instructions.

### Action
 Limited by CAN communication bandwidth, TIO+ related query and setting commands will be buffered. If the refresh rate of the application layer is higher than the bandwidth, this information will be prompted. Please reduce the command calling frequency of the operating program or application.

## 0x0F0069  Receiving TIO RS485 command feedback timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Receiving TIO RS485 command feedback timeout

### Reason
 Receiving TIO RS485 command feedback timed out. This problem usually occurs when the controller sends the RS 485 command and waits for the feedback to time out.

### Action
 Please check whether the relevant communication settings of TIO+ are correct; check whether the communication link between the controller and the robot is normal.

## 0x0F0070 Robot DH parameter read verification exception 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Ontology DH parameter read verification exception

### Reason
 CRC error in reading the DH parameter of the server when powering on

### Action
 Please power on again, if it cannot be resolved or occurs frequently, please upgrade the servo

## 0x0F0071 The reading and verification of robot dynamic parameters is abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kinetic parameter reading verification exception

### Reason
 CRC error in reading the dynamic parameters of the servo end when powering on

### Action
 Please power on again, if it cannot be resolved or occurs frequently, please upgrade the servo

## 0x0F0072 Reading parameters from servo 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Reading DH or Kinetic parameters from servo can't enable robot

### Reason
 Reading DH or Kinetic parameters from the servo cannot enable the robot. This problem generally occurs when the robot is powered on immediately after it is powered on. If the DH parameters are stored and enabled in the servo at this time, there is a high probability that this error will be reported.

### Action
 After turning on the power, the controller will read the DH parameters from the servo, during which the robot is disabled. If it still appears when enabling after waiting, please check the communication link between the controller and the robot. If the fault persists, contact JAKA technical personnel.

## 0x0F0073 Robot momentum limit reached 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot momentum limit reached

### Reason
 Robot momentum limit reached. The robot safety interface can set the robot momentum limit, and an alarm will be triggered when the limit is reached.

### Action
 This error is a warning and does not need to be dealt with. When the absolute value of the robot's momentum is greater than the threshold set by the user, the robot will automatically decelerate.

## 0x0F0074  Robot TCP speed limit reached 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot TCP speed limit reached

### Reason
 Robot TCP speed limit reached. The robot safety interface can set the robot TCP speed limit, and an alarm will be triggered when the limit is reached.

### Action
 This is a notification pop-up warning, which can be ignored. You can check whether the TCP speed limit has been implemented in the collision protection under the security setting interface.

## 0x0F0075 About to exceed the safe plane 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 About to exceed the safe plane

### Reason
 It is about to exceed the safety plane, and the robot can only work within the set safety plane range.

### Action
 Please confirm whether the setting of the safety plane is in line with reality; during the investigation, the safety plane function can be turned off or the controller robot moves towards the safety plane.

## 0x0F0076 The version number of the DH parameter on the server side is invalid 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The version number of the DH parameter on the server side is invalid

### Reason
 The robot kinematics parameter version is not compatible with the controller

### Action
 Please upgrade the servo or downgrade the controller

## 0x0F0077 The version number of the dynamic parameters of the server is invalid 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The version number of the dynamic parameters of the server is invalid

### Reason
 Robot dynamics parameter version incompatible with controller

### Action
 Please upgrade the servo or downgrade the controller

## 0x0F0078 Servo enable operation is too frequent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Servo enable operation is too frequent

### Reason
 Continuously click the enable button on the App main interface body

### Action
 After pressing the enable button on the main interface of the app, observe whether the breathing light at the end of the main body changes from blue to green after 1 second. Normally, it changes from blue to green, and the brake sound is released with the joint "snap"

## 0x0F0079 Unable to switch emulation/real machine mode, please turn off the power 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Unable to switch emulation/real machine mode, please turn off the power

### Reason
 When the robot is powered on and enabled, use the APP to switch the robot simulation/real machine mode function, prompting an error

### Action
 Please modify the simulation/real machine mode switching function after the robot is powered off and enabled.

## 0x0F007A It is not supported to set the IPs of the two network ports in the same network segment 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 It is not supported to set the IPs of the two network ports in the same network segment

### Reason
 The IP address of the network configuration interface of the App setting interface is set to the 10.5.5.X network segment, which conflicts with the network segment of the controller's own network IP address.

### Action
 The IP setting of the network configuration interface of the App setting interface is not allowed in the 10.5.5.X network IP segment. The modified IP address of the bottom network port of the standard controller and the LAN2 port of the MinCab is a static IP address after modification: Network configuration reference setting format: IP: 192.168.10.120 Submask: 255.255.255.0 Default gateway: 192.168.10.1

## 0x0F007B  Posture security limit about to be exceeded 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
  Posture security limit about to be exceeded

### Reason
 Approaching the singular point attitude of the robot or the maximum working radius of this type of robot

### Action
 The robot attitude point returns and moves towards the position close to the robot base

## 0x0F0080 Switching robot models is not allowed in the power-on state 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Switching robot models is not allowed in the power-on state

### Reason
 When the robot is powered on, use the APP robot simulation/real machine mode function to switch the robot model model, prompting an error

### Action
 After the robot is powered off and enabled, perform the simulation/real machine mode function model switching operation.

## 0x0F0081 Password reset is not allowed during robot movement 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Password reset is not allowed during robot movement

### Reason
 When the robot is in the running state of the program, the operation of modifying the user authority password will prompt an error

### Action
 Please stop the motion state of the robot program, and then try to modify the user authority password.

## 0x0F0082 Please check whether the password reset button is normal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Please check whether the password reset button is normal

### Reason
 The password reset button is not functioning properly.

### Action
 Please check whether the password reset button is normal, or contact technical service personnel.

## 0x0F0083 Joint deceleration failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint deceleration failed

### Reason
 Unable to automatically correct joint speed for current motion below limit speed

### Action
 Please increase the limit speed in the safety settings or reduce the command speed

## 0x0F0100 Robot power limit exceeded 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot power limit exceeded

### Reason
 The power setting of the app collision setting interface is less than the power required by the robot movement

### Action
 App collision setting interface power increase power setting value, JAKA model load 3KG reference value 1000, load 5KG\7KG reference value 1500, load 12KG reference value 2000, load 18KG reference value 2000

## 0x0F0101 Robot momentum exceeded 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot momentum exceeded

### Reason
 The momentum setting of the App collision setting interface is less than the momentum required by the robot movement

### Action
 The App collision setting interface increases the momentum setting value. The JAKA model load 3KG reference value is 5, the load 5KG\7KG reference value is 10, the load 12KG reference value is 30, and the load 18KG reference value is 50.

## 0x0F0102 The base sensor detected a collision 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The base sensor detected a collision

### Reason
 For the SP model robot, when the robot is in the enabled state, the base sensor signal increases abnormally and exceeds the set threshold, prompting an alarm.

### Action
 1. Check whether the machine has collided with peripheral equipment. 2. Check whether the robot is pulled by the cable during the movement. 3. Properly reduce the acceleration of the robot 4. Check whether the load at the end of the robot is correct 5. Try to increase the collision level of the robot

## 0x0F0103 End force exceeded, 1 axis detected collision 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 End force exceeded, 1 axis detected collision

### Reason
 When the robot is in the program running state, the joint current suddenly increases and exceeds the set threshold, and an alarm is prompted.

### Action
 1. Check whether the machine has collided with peripheral equipment. 2. Check whether the robot is pulled by the cable during the movement. 3. Properly reduce the acceleration of the robot 4. Check whether the load at the end of the robot is correct 5. Try to increase the collision level of the robot

## 0x0F0104 End force exceeded, 2-axis collision detected 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 End force exceeded, 2-axis collision detected

### Reason
 When the robot is in the program running state, the joint current suddenly increases and exceeds the set threshold, and an alarm is prompted.

### Action
 1. Check whether the machine has collided with peripheral equipment. 2. Check whether the robot is pulled by the cable during the movement. 3. Properly reduce the acceleration of the robot 4. Check whether the load at the end of the robot is correct 5. Try to increase the collision level of the robot

## 0x0F0105 End force exceeded, 3 axis detected collision 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 End force exceeded, 3 axis detected collision

### Reason
 When the robot is in the program running state, the joint current suddenly increases and exceeds the set threshold, and an alarm is prompted.

### Action
 1. Check whether the machine has collided with peripheral equipment. 2. Check whether the robot is pulled by the cable during the movement. 3. Properly reduce the acceleration of the robot 4. Check whether the load at the end of the robot is correct 5. Try to increase the collision level of the robot

## 0x0F0106 End force exceeded, 4 axis detected collision 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 End force exceeded, 4 axis detected collision

### Reason
 When the robot is in the program running state, the joint current suddenly increases and exceeds the set threshold, and an alarm is prompted.

### Action
 1. Check whether the machine has collided with peripheral equipment. 2. Check whether the robot is pulled by the cable during the movement. 3. Properly reduce the acceleration of the robot 4. Check whether the load at the end of the robot is correct 5. Try to increase the collision level of the robot

## 0x0F0107 End force exceeded, 5-axis detected collision 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 End force exceeded, 5-axis detected collision

### Reason
 When the robot is in the program running state, the joint current suddenly increases and exceeds the set threshold, and an alarm is prompted.

### Action
 1. Check whether the machine has collided with peripheral equipment. 2. Check whether the robot is pulled by the cable during the movement. 3. Properly reduce the acceleration of the robot 4. Check whether the load at the end of the robot is correct 5. Try to increase the collision level of the robot

## 0x0F0108 The end force exceeds the limit, and the 6-axis detects a collision 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The end force exceeds the limit, and the 6-axis detects a collision

### Reason
 When the robot is in the program running state, the joint current suddenly increases and exceeds the set threshold, and an alarm is prompted.

### Action
 1. Check whether the machine has collided with peripheral equipment. 2. Check whether the robot is pulled by the cable during the movement. 3. Properly reduce the acceleration of the robot 4. Check whether the load at the end of the robot is correct 5. Try to increase the collision level of the robot

## 0x0F0109 Safety plane point setting error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Safe plane set points are not allowed to be collinear or coincident

### Reason
 The safety plane setting requires three surface points and one safety point. These three points are Cartesian coordinates. When the three surface points coincide or are collinear, an error will be reported. When the safety point is on the safety plane, an error will be reported.

### Action
 Please check whether the safety points are coincident or collinear, and whether the safety points are on the safety plane.

## 0x0F1001 Enable timeout, please turn on the power again 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Enable timeout, please turn on the power again

### Reason
 When the robot is in the process of being enabled, the joint electromagnet is not engaged, and an error is prompted

### Action
 1. Please try to power off the robot, and then power on and enable again. 2. Please check whether there is any abnormality in the electromagnet of the robot joint, or contact a technician.

## 0x0F1002 Server version number query timed out 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Server version number query timed out

### Reason
 When there is an abnormality in the CAN communication between the robot and the electric control cabinet, an error message will be prompted

### Action
 1. Please try to power off the robot and then enable it again. 2. Please check whether there is any connection abnormality in the heavy-duty connection line between the robot and the electric control cabinet.

## 0x001002 Joint-CAN connection is abnormal 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint-CAN connection is abnormal

### Reason
 Joint one CAN bus abnormality leads to data acquisition failure or timeout leads to error prompt

### Action
 1. Power off the robot and enable it, open the cover of the joint that reported the error, and check whether there is any abnormality in the CAN line inside the joint. 2. Please contact technical personnel for consultation.

## 0x011002 Joint 2 CAN connection is abnormal 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 CAN connection is abnormal

### Reason
 Joint 2 CAN bus abnormality leads to data acquisition failure or timeout leads to error prompt

### Action
 1. Power off the robot and enable it, open the cover of the joint that reported the error, and check whether there is any abnormality in the CAN line inside the joint. 2. Please contact technical personnel for consultation.

## 0x021002 Joint 3 CAN connection is abnormal 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 CAN connection is abnormal

### Reason
 Joint three CAN bus abnormalities lead to data acquisition failure or timeout lead to error prompts

### Action
 1. Power off the robot and enable it, open the cover of the joint that reported the error, and check whether there is any abnormality in the CAN line inside the joint. 2. Please contact technical personnel for consultation.

## 0x031002 Joint 4 CAN connection is abnormal 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 CAN connection is abnormal

### Reason
 Joint 4 CAN bus abnormality leads to data acquisition failure or timeout leads to error prompt

### Action
 1. Power off the robot and enable it, open the cover of the joint that reported the error, and check whether there is any abnormality in the CAN line inside the joint. 2. Please contact technical personnel for consultation.

## 0x041002 Joint 5 CAN connection is abnormal 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 CAN connection is abnormal

### Reason
 Joint 5 CAN bus abnormality leads to data acquisition failure or timeout leads to error prompt

### Action
 1. Power off the robot and enable it, open the cover of the joint that reported the error, and check whether there is any abnormality in the CAN line inside the joint. 2. Please contact technical personnel for consultation.

## 0x051002 Joint 6 CAN connection is abnormal 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 CAN connection is abnormal

### Reason
 Joint six CAN bus abnormalities lead to data acquisition failure or timeout lead to error prompts

### Action
 1. Power off the robot and enable it, open the cover of the joint that reported the error, and check whether there is any abnormality in the CAN line inside the joint. 2. Please contact technical personnel for consultation.

## 0x001003 joint-drive failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint-drive failure

### Reason
 After the main body is powered on, there is no signal from the drive board of joint one to return to the controller

### Action
 On the App monitoring interface, check whether the monitoring voltage, current, and temperature of joint 1 have data display. When the main body is powered on normally, there is a numerical display. If there is no numerical display, please contact the technical staff for assistance.

## 0x011003 Joint 2 drive failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 drive failure

### Reason
 After the main body is powered on, there is no signal from the second drive board of the joint to return to the controller

### Action
 On the App monitoring interface, check whether there is data display for the monitoring voltage, current, and temperature of joint 2. When the main body is powered on normally, there is a numerical display. If there is no numerical display, please contact the technical staff for assistance.

## 0x021003 Joint three drive failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three drive failure

### Reason
 After the main body is powered on, there is no signal from the joint three drive boards to return to the controller

### Action
 On the App monitoring interface, check whether the monitoring voltage, current, and temperature of joint 3 have data display. When the main body is powered on normally, there is a numerical display. If there is no numerical display, please contact the technical staff for assistance.

## 0x031003 Joint quad drive failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint quad drive failure

### Reason
 After the main body is powered on, the four-joint drive board has no signal and returns to the controller

### Action
 On the App monitoring interface, check whether the monitoring voltage, current, and temperature of joint 4 have data display. When the main body is powered on normally, there is a numerical display. If there is no numerical display, please contact the technical staff for assistance.

## 0x041003 Joint five drive failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five drive failure

### Reason
 After the main body is powered on, there is no signal from the five-joint drive board to return to the controller

### Action
 On the App monitoring interface, check whether the monitoring voltage, current, and temperature of joint 5 have data display. When the main body is powered on normally, there is a numerical display. If there is no numerical display, please contact the technical staff for assistance.

## 0x051003 Joint six drive failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six drive failure

### Reason
 After the main body is powered on, there is no signal from the six-joint drive board to return to the controller

### Action
 On the App monitoring interface, check whether the monitoring voltage, current, and temperature of joint 6 have data display. When the main body is powered on normally, there is a numerical display. If there is no numerical display, please contact the technical staff for assistance.

## 0x001004 Joint 1 following error is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 following error is too large

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x011004 Joint 2 following error is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 following error is too large

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x021004 The following error of joint 3 is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The following error of joint 3 is too large

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x031004 The following error of joint 4 is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The following error of joint 4 is too large

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x041004 Joint 5 following error is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 following error is too large

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x051004 The following error of joint 6 is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The following error of joint 6 is too large

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0F2000 programming file syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 programming file syntax error

### Reason
 There is an abnormal or undefined parameter in the program, which causes the controller to process abnormally

### Action
 1. Please check whether the initial value of the variable definition used in the current program is abnormal. 2. Please check whether there is any abnormality in the interactive data of the communication connection variables.

## 0x0F2001 no programming file open 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 no programming file open

### Reason
 no running program loaded

### Action
 1. Set the default loading program at startup 2. Open the corresponding program on the programming interface, and click to run

## 0x0F2002 Failed to open programming file 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to open programming file

### Reason
 Programs loaded by default at startup are missing

### Action
 1. Re-select the boot default loader in the setting interface. 2. Re-open the program in the programming interface.

## 0x0F2003 Programming file close failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Programming file close failed

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0F2010 parsing error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 parsing error

### Reason
 Unmatched if, while, end, break, continue and other keywords. Error file is:  Error line number is: 

### Action
 Examine script files, especially manually written script subroutines, for unmatched keywords.

## 0x0F2011 PyCall() failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 PyCall() failed

### Reason
 The called Python script has a syntax error. The error file is:  The line number of the error is: 

### Action
 Check the called Python script program.

## 0x0F2012 parsing assertion failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 parsing assertion failed

### Reason
 The motion parameter setting is unreasonable. Error file is:  Error line number is: 

### Action
 Check motion parameter settings

## 0x0F2013 Parse failed, arc radius is zero 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Parse failed, arc radius is zero

### Reason
 There is an exception in the setting of the arc motion point, and the robot motion trajectory planning fails. Error file is:  Error line number is: 

### Action
 Please check whether there is any abnormality in the point setting of the robot during the circular motion, and please reconfigure the point information of the circular motion

## 0x0F2014 parsing failed, syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 parsing failed, syntax error

### Reason
 There is a data format exception in the variable interaction instruction (assignment instruction). Error file is:  Error line number is: 

### Action
 Please check whether there is any abnormal data format in the variable interaction instruction (assignment instruction) involved in the program.

## 0x0F2015 network connection failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 network connection failed

### Reason
 Failed to create socket. Error file is:  Error line number is: 

### Action
 Check the script command corresponding to the error according to the error message

## 0x0F2016 Failed to connect to server 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to connect to server

### Reason
 The server disconnects during Socket communication. Error file is:  Error line number is: 

### Action
 1. Please check whether the Socket communication server is closed. 2. Please try to perform a network connection (ping pass) test with the Socket communication server. 3. Please check whether there is any abnormality in the network cable connection between the electric control cabinet and the Socket communication server. 4. Please check whether the firewall of the Socket communication server is closed.

## 0x0F2017 Communication failed not connected to the server 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Communication failed not connected to the server

### Reason
 The camera is not connected when executing the read vision parameter command. Error file is:  Error line number is: 

### Action
 1. Please check whether the Socket communication server is closed. 2. Please try to perform a network connection (ping pass) test with the Socket communication server. 3. Please check whether there is any abnormality in the network cable connection between the electric control cabinet and the Socket communication server. 4. Please check whether the firewall of the Socket communication server is closed.

## 0x0F2018 TCP/IP failed to receive data 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 TCP/IP failed to receive data

### Reason
 The controller failed to receive data from the camera. Error file is:  Error line number is: 

### Action
 1. The camera is disconnected; 2. Check the physical connection between the controller and the camera;

## 0x0F2019 TCP/IP failed to send data 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 TCP/IP failed to send data

### Reason
 The controller failed to send data to the camera. Error file is:  Error line number is: 

### Action
 1. Please check whether the Socket communication server is closed. 2. Please try to perform a network connection (ping pass) test with the Socket communication server. 3. Please check whether there is any abnormality in the network cable connection between the electric control cabinet and the Socket communication server. 4. Please check whether the firewall of the Socket communication server is closed.

## 0x0F201A Failed to load 2D vision configuration 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to load 2D vision configuration

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0F201B internal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 internal error

### Reason
 Internal error in script parser. Error file is:  Error line number is: 

### Action
 Check the following situations according to the error log information: 1. sscanf command parameter exception 2. Write operation to read-only variables

## 0x0F201C Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0F201D Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0F201E Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 Wrong code parameter. Error file is:  Error line number is: 

### Action
 Please check whether the code parameters are correct before proceeding with the operation.

## 0x0F201F Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 Unrecognized motion command. Error file is:  Error line number is: 

### Action
 Check scripts, especially manually written scripts, for Move commands

## 0x0F2020 Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 The parameters of the motion command are wrong. Error file is:  Error line number is: 

### Action
 Check the corresponding motion command according to the error message

## 0x0F2021 method should not be called 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 method should not be called

### Reason
 An unsupported G code command is used in circular motion. Error file is:  Error line number is: 

### Action
 Please check whether the function io is always connected. Generally, the external function button can be disconnected after 1 second.

## 0x0F2022 unknown operation 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 unknown operation

### Reason
 An unsupported operator was used in a script. Error file is:  Error line number is: 

### Action
  Check whether symbols other than the following operators are used according to the error message: +, -, /, *, **, and, mod, or, xor,]

## 0x0F2023 wrong data format 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 wrong data format

### Reason
 The defined variable data format is incorrect. Error file is:  Error line number is: 

### Action
 Please check the data format of the variable, and proceed with the operation after correct modification.

## 0x0F2024 parameter is undefined 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 parameter is undefined

### Reason
 1. The socket defined during socket communication is inconsistent with the socket used during sending. 2. The file in which the error is not in the specified format during data assignment is:  and the error line number is: 

### Action
 1. Check the communication instructions in the program. Make sure that the ports used are all opened. 2. Check the data assignment instruction. Strings need to add double quotes, and arrays need to add square brackets

## 0x0F2025 fail to open the file 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 fail to open the file

### Reason
 1. The file format is abnormal. 2. The wrong file name is set too long:  The error line number is: 

### Action
 1. Check whether the file format is correct, if not, please set it to the correct file format. 2. Please check whether the file name is too long, if it is too long, please set it within a reasonable range

## 0x0F2026 Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 The ini parameter in the program is not defined in the ini file. The error file is:  The error line number is: 

### Action
 Check whether the ini parameter name in the program is correct according to the error message

## 0x0F2027 Not enough storage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Not enough storage

### Reason
 Insufficient memory, error storing string. Error file is:  Error line number is: 

### Action
 1. Restart the operating program of the control cabinet. 2. If this error occurs frequently: 1) Confirm whether there is a memory leak, record the problem and contact the manufacturer; 2) Contact the administrator to increase the swap space capacity of the system;

## 0x0F2028 wrong return type 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 wrong return type

### Reason
 Function return type mismatch. Error file is:  Error line number is: 

### Action
 Please check the variable definition type and return value type to ensure that the return value type is correct before proceeding.

## 0x0F2029 Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 There are too many layers of subroutine nested calls. Error file is:  Error line number is: 

### Action
 Check whether the subroutine calls in the job program are nested layer by layer (it is recommended that the number of nesting layers be less than 10)

## 0x0F202a cannot add parameters 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 cannot add parameters

### Reason
 Parameter assignment exception. Error file is:  Error line number is: 

### Action
 Check according to the error message: 1. Whether the parameter name is correct; 2. Whether the parameter type is correct

## 0x0F202B user defined error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 user defined error

### Reason
 User defined variable error. Error file is:  Error line number is: 

### Action
 Please check the variable parameters according to the error.

## 0x0F202C Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 An integer was expected to be read (such as an array index), but a non-integer parameter was actually given in the script. Error file is:  Error line number is: 

### Action
 There is an abnormal step value parameter setting in the character-related instructions, please set a reasonable step value. (The step value can only be set as an integer)

## 0x0F202D Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 An unknown character appears after the operation word. Error file is:  Error line number is: 

### Action
 Check the keywords in the operating program according to the error message.

## 0x0F202E Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 Unknown operator error in file:  Error line number is: 

### Action
 Please check the job program syntax: Expressions in () do not support individual &, |, !, = must be: &&, ||, !=, ==

## 0x0F202F Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 Incomplete expression. Error file is:  Error line number is: 

### Action
 Check whether the expression corresponding to the wrong line is written correctly

## 0x0F2030 Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0F2031 Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0F2032 Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0F2033 command too long 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 command too long

### Reason
 The script command and parameters are too long. Error file is:  Error line number is: 

### Action
 Single-line script instructions and parameters, the total length of which should not exceed 255 bytes (the latest version should not exceed 512 bytes)

## 0x0F2034 Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 An error occurred while saving system variables. Error file is:  Error line number is: 

### Action
 1. Check the system variable file jaka_user.var 2. Check the system variable file, whether the variable indexes are stored in order;

## 0x0F2035 Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 Undefined directive parameter. Error file is:  Error line number is: 

### Action
 Check whether the script command parameters at the error location are correct

## 0x0F2036 file not open 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 file not open

### Reason
 Failed to open file or folder. Error file is:  Error line number is: 

### Action
 1. Whether the folder or file name path is correct; 2. Whether the permission to open the folder or file is correct; 3. Whether the file is damaged.

## 0x0F2037 Duplicate definition 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Duplicate definition

### Reason
 Error in script interpreter keyword mapping. Error file is:  Error line number is: 

### Action
 Internal System Error. Record error logs and operating procedures and contact the manufacturer

## 0x0F2038 Job program syntax error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Job program syntax error

### Reason
 Error in script interpreter keyword mapping. Error file is:  Error line number is: 

### Action
 Internal System Error. Record error logs and operating procedures and contact the manufacturer

## 0x0F2039 open file repeatedly 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 open file repeatedly

### Reason
 Unable to open file. Error file is:  Error line number is: 

### Action
 1. Whether the folder or file name path is correct; 2. Whether the permission to open the folder or file is correct; 3. Whether the file is damaged.

## 0x0F2050 invalid socket id 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 invalid socket id

### Reason
 Unused

### Action
 

## 0x0F2051 Inverse solution failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Inverse solution failed

### Reason
 Inversion failed. This problem usually occurs when the inverse solution calculation fails in the job program. It may be related to the given reference joint angle and the solved end pose. Error file is:  Error line number is: 

### Action
 Manual jog checks whether the reference joint motion can move to the target point through Cartesian space. If possible, consider changing the current robot pose, reaching the target point from other paths or poses, or changing the pose of the target point.

## 0x0F2052 Correct solution failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Correct solution failed

### Reason
  Correct solution failed. This problem usually occurs when the positive solution calculation fails in the job program. It may be related to the joint angle value setting parameters. Error file is:  Error line number is: 

### Action
 Manual jog checks whether the reference joint motion can move to the target point through Cartesian space. If possible, consider changing the current robot pose, reaching the target point from other paths or poses, or changing the pose of the target point.

## 0x0F2053 TCP/IP communication received wrong data 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 TCP/IP communication received wrong data

### Reason
 Unused

### Action
 Please check whether the controller is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0F2054 Invalid array variable 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid array variable

### Reason
 Array variable is undefined or variable is not of type array. Error file is:  Error line number is: 

### Action
 Please check whether the use of the array variable corresponding to the error line of the script program is correct

## 0x0F2055 Invalid array element index 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid array element index

### Reason
 Array index value is out of array bounds. Error file is:  Error line number is: 

### Action
 Please check whether the array index corresponding to the error line in the script program is correct

## 0x0F2056 Invalid pose interpolation coefficients 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid pose interpolation coefficients

### Reason
 The interpolation coefficient passed in by the pose interpolation command is invalid. Error file is:  Error line number is: 

### Action
 Check positional interpolation command parameters for error positions

## 0x0F2057 control block terminator mismatch 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 control block terminator mismatch

### Reason
 The if and while control blocks lack matching end terminators. Error file is:  Error line number is: 

### Action
 Check whether the if and while statement blocks in the custom script subroutine have end terminators

## 0x0F2058 Unsupported escape character 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unsupported escape character

### Reason
 An unsupported translation character input was used in a script. Currently only supported: \n, \r, \t, \", \', \\, the error file is:  the error line number is: 

### Action
 Currently supported escape characters are: \\ backslash \' single quote \" double quote \n newline \t horizontal tab \r carriage return

## 0x0F2059 Invalid array cut spacing parameter 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Invalid array cut spacing parameter

### Reason
 Invalid stride used when accessing voxels in slice mode. Error file is:  Error line number is: 

### Action
 Check the script program according to the error message: When accessing the element group in slice mode, the step size should be an integer greater than 0

## 0x0F2060 Array nesting is not supported 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Array nesting is not supported

### Reason
 Array variables do not support arrays as elements. Error file is:  Error line number is: 

### Action
 Check the script program according to the error message: Array variables do not support arrays as elements

## 0x0F2061 String arrays are not supported 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 String arrays are not supported

### Reason
 Strings are not supported in array variables. Error file is:  Error line number is: 

### Action
 Check the script program according to the error message: Strings are not supported in array variables

## 0x0F2062 Too many socket resources are allocated but not released 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Too many socket resources are allocated but not released

### Reason
 Too many sockets were created and not closed. Error file is:  Error line number is: 

### Action
 1. Please ensure that after using the open socket command, close it in time when not in use; 2. Avoid opening the socket in a loop statement. If you open it, you must close it in time before the next creation; 3. If it is not closed, the current maximum allowed to create 256 sockets

## 0x0F2063 The socket received invalid data 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The socket received invalid data

### Reason
 The socket receives variable instructions, and the format of the received data is incorrect. Error file is:  Error line number is: 

### Action
 When the script program uses the socket to receive variables and receive array instructions, please ensure that the data format sent by the server is combined with the return data format defined in the script programming instructions.

## 0x0F2064  The length of the array received by Socket does not match 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
  The length of the array received by Socket does not match

### Reason
 The length of the array of data received by the Socket does not match the length of the array sent by the server. Error file is:  Error line number is: 

### Action
 When the socket is used in the script program to receive array instructions, please ensure that the length of the array returned by the server is correct

## 0x0F2065  The data type received by Socket does not match 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
  The data type received by Socket does not match

### Reason
 The variable type of the data received by the Socket does not match the data type sent by the server. Error file is:  Error line number is: 

### Action
 When using the socket to receive variables and receive array commands in the script, please ensure that the data type sent back by the server is correct.

## 0x0F3001 Failed to connect to the specified visual device 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to connect to the specified visual device

### Reason
 Controller fails to connect to vision device

### Action
 Check whether the visual hardware wiring is normal, and check whether the visual power supply DC24V positive and negative wiring harness is correct. If you still can't connect, please contact the supplier engineer to deal with it!

## 0x0F3002 no vision device connected 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 no vision device connected

### Reason
 The controller cannot detect that the vision is online

### Action
 Check whether the visual hardware wiring is normal, and check whether the visual power supply DC24V positive and negative wiring harness is correct. If you still can't connect, please contact the supplier engineer to deal with it!

## 0x0F4001 Servo state machine error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Servo state machine error

### Reason
 

### Action
 

## 0x0F4002 Firmware upgrade failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Firmware upgrade failed

### Reason
 Robot firmware package upgrade failed

### Action
 Check whether the suffix of the firmware file name is in .tar.gz format, and there is no redundant content. Do not power off or shut down the app during the upgrade process of the App interface.

## 0x0F4003 The current hardware does not support this function 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The current hardware does not support this function

### Reason
 The robot body or controller cannot support the functions currently used

### Action
 Please take a photo of the function that uses the abnormal error report and the version information of the controller currently in use, and contact the technical support engineer for processing.

## 0x102230 Joint 1 bus overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 bus overcurrent

### Reason
 Motor Feedback Current Exceeds Threshold

### Action
 Please take a picture of the function that uses the abnormal error report and the version information of the controller currently in use, and save the diagnosis log of the fault and contact the technical support engineer for processing.

## 0x112230 Joint 2 bus overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 bus overcurrent

### Reason
 Motor Feedback Current Exceeds Threshold

### Action
 Please take a picture of the function that uses the abnormal error report and the version information of the controller currently in use, and save the diagnosis log of the fault and contact the technical support engineer for processing.

## 0x122230 Joint 3 busbar overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 busbar overcurrent

### Reason
 Motor Feedback Current Exceeds Threshold

### Action
 Please take a picture of the function that uses the abnormal error report and the version information of the controller currently in use, and save the diagnosis log of the fault and contact the technical support engineer for processing.

## 0x132230 Joint 4 bus overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 bus overcurrent

### Reason
 Motor Feedback Current Exceeds Threshold

### Action
 Please take a picture of the function that uses the abnormal error report and the version information of the controller currently in use, and save the diagnosis log of the fault and contact the technical support engineer for processing.

## 0x142230 Joint 5 busbar overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 busbar overcurrent

### Reason
 Motor Feedback Current Exceeds Threshold

### Action
 Please take a picture of the function that uses the abnormal error report and the version information of the controller currently in use, and save the diagnosis log of the fault and contact the technical support engineer for processing.

## 0x152230 Joint 6 busbar overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 busbar overcurrent

### Reason
 Motor Feedback Current Exceeds Threshold

### Action
 Please take a picture of the function that uses the abnormal error report and the version information of the controller currently in use, and save the diagnosis log of the fault and contact the technical support engineer for processing.

## 0x102320 Joint 1 output overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 output overcurrent

### Reason
 The current of the motor UVW is detected, which exceeds the overcurrent threshold of the hardware driver board

### Action
  1. Please reduce the load on the robot before using it. 2. Please reduce the speed or acceleration of the robot. 2. The robot joint drive board or the reducer is abnormal, please contact the technical support personnel; 3. The communication is abnormal: please replace the heavy-duty connecting wire or the electric control cabinet, or contact the technical support personnel;

## 0x112320 Joint 2 output overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 output overcurrent

### Reason
 The current of the motor UVW is detected, which exceeds the overcurrent threshold of the hardware driver board

### Action
  1. Please reduce the load on the robot before using it. 2. Please reduce the speed or acceleration of the robot. 2. The robot joint drive board or the reducer is abnormal, please contact the technical support personnel; 3. The communication is abnormal: please replace the heavy-duty connecting wire or the electric control cabinet, or contact the technical support personnel;

## 0x122320 Joint three output overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three output overcurrent

### Reason
 The current of the motor UVW is detected, which exceeds the overcurrent threshold of the hardware driver board

### Action
  1. Please reduce the load on the robot before using it. 2. Please reduce the speed or acceleration of the robot. 2. The robot joint drive board or the reducer is abnormal, please contact the technical support personnel; 3. The communication is abnormal: please replace the heavy-duty connecting wire or the electric control cabinet, or contact the technical support personnel;

## 0x132320 Joint four output overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four output overcurrent

### Reason
 The current of the motor UVW is detected, which exceeds the overcurrent threshold of the hardware driver board

### Action
  1. Please reduce the load on the robot before using it. 2. Please reduce the speed or acceleration of the robot. 2. The robot joint drive board or the reducer is abnormal, please contact the technical support personnel; 3. The communication is abnormal: please replace the heavy-duty connecting wire or the electric control cabinet, or contact the technical support personnel;

## 0x142320 Joint five output overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five output overcurrent

### Reason
 The current of the motor UVW is detected, which exceeds the overcurrent threshold of the hardware driver board

### Action
  1. Please reduce the load on the robot before using it. 2. Please reduce the speed or acceleration of the robot. 2. The robot joint drive board or the reducer is abnormal, please contact the technical support personnel; 3. The communication is abnormal: please replace the heavy-duty connecting wire or the electric control cabinet, or contact the technical support personnel;

## 0x152320 Joint six output overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six output overcurrent

### Reason
 The current of the motor UVW is detected, which exceeds the overcurrent threshold of the hardware driver board

### Action
  1. Please reduce the load on the robot before using it. 2. Please reduce the speed or acceleration of the robot. 2. If the robot joint drive board or reducer is abnormal, please contact technical support personnel; 3. Please replace the heavy-duty connecting wire or electric control cabinet, or contact technical support personnel;

## 0x102321 Joint one self-learning overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint one self-learning overcurrent

### Reason
 In the process of enabling the joint, a large current is output, but the motor rotation is not detected

### Action
 1. Please enable the robot, manually release the joint electromagnet, and check whether the alarming joint can be pushed. 2. After powering off the main body of the robot, remove the back cover, check whether the cable is in abnormal contact, or contact technical support personnel.

## 0x112321 Joint 2 self-learning overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 self-learning overcurrent

### Reason
 In the process of enabling the joint, a large current is output, but the motor rotation is not detected

### Action
 1. Please enable the robot, manually release the joint electromagnet, and check whether the alarming joint can be pushed. 2. After powering off the main body of the robot, remove the back cover, check whether the cable is in abnormal contact, or contact technical support personnel.

## 0x122321 Joint three self-learning overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three self-learning overcurrent

### Reason
 In the process of enabling the joint, a large current is output, but the motor rotation is not detected

### Action
 1. Please enable the robot, manually release the joint electromagnet, and check whether the alarming joint can be pushed. 2. After powering off the main body of the robot, remove the back cover, check whether the cable is in abnormal contact, or contact technical support personnel.

## 0x132321 Joint four self-learning overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four self-learning overcurrent

### Reason
 In the process of enabling the joint, a large current is output, but the motor rotation is not detected

### Action
 1. Please enable the robot, manually release the joint electromagnet, and check whether the alarming joint can be pushed. 2. After powering off the main body of the robot, remove the back cover, check whether the cable is in abnormal contact, or contact technical support personnel.

## 0x142321 Joint five self-learning overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five self-learning overcurrent

### Reason
 In the process of enabling the joint, a large current is output, but the motor rotation is not detected

### Action
 1. Please enable the robot, manually release the joint electromagnet, and check whether the alarming joint can be pushed. 2. After powering off the main body of the robot, remove the back cover, check whether the cable is in abnormal contact, or contact technical support personnel.

## 0x152321 Joint six self-learning overcurrent 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six self-learning overcurrent

### Reason
 In the process of enabling the joint, a large current is output, but the motor rotation is not detected

### Action
 1. Please enable the robot, manually release the joint electromagnet, and check whether the alarming joint can be pushed. 2. After powering off the main body of the robot, remove the back cover, check whether the cable is in abnormal contact, or contact technical support personnel.

## 0x108480 Joint One Forward Velocity Tracking Error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint One Forward Velocity Tracking Error

### Reason
 When the actual speed is in the same direction as the set speed, the speed error exceeds the set alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct.

## 0x118480 Joint 2 forward velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 forward velocity tracking error

### Reason
 When the actual speed is in the same direction as the set speed, the speed error exceeds the set alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct.

## 0x128480 Joint three forward velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three forward velocity tracking error

### Reason
 When the actual speed is in the same direction as the set speed, the speed error exceeds the set alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct.

## 0x138480 Joint four forward velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four forward velocity tracking error

### Reason
 When the actual speed is in the same direction as the set speed, the speed error exceeds the set alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct.

## 0x148480 Joint Five Forward Velocity Tracking Error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Five Forward Velocity Tracking Error

### Reason
 When the actual speed is in the same direction as the set speed, the speed error exceeds the set alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct.

## 0x158480 Joint six forward speed tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six forward speed tracking error

### Reason
 When the actual speed is in the same direction as the set speed, the speed error exceeds the set alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct.

## 0x108481 Joint one negative velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint one negative velocity tracking error

### Reason
 When the actual speed is opposite to the set speed, the speed error exceeds the set alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct.

## 0x118481 Joint 2 Negative Velocity Tracking Error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 Negative Velocity Tracking Error

### Reason
 When the actual speed is opposite to the set speed, the speed error exceeds the set alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct.

## 0x128481 Joint three negative velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three negative velocity tracking error

### Reason
 When the actual speed is opposite to the set speed, the speed error exceeds the set alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct.

## 0x138481 Joint 4 Negative Velocity Tracking Error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 Negative Velocity Tracking Error

### Reason
 When the actual speed is opposite to the set speed, the speed error exceeds the set alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct.

## 0x148481 Joint five negative velocity tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five negative velocity tracking error

### Reason
 When the actual speed is opposite to the set speed, the speed error exceeds the set alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct.

## 0x158481 Joint six negative speed tracking error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six negative speed tracking error

### Reason
 When the actual speed is opposite to the set speed, the speed error exceeds the set alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct.

## 0x108482 joint speed limit 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint speed limit

### Reason
 Joint actual speed exceeds joint rated speed

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x118482 Joint 2 speed overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 speed overrun

### Reason
 Joint actual speed exceeds joint rated speed

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x128482 Joint three speed overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three speed overrun

### Reason
 Joint actual speed exceeds joint rated speed

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x138482 Joint four speed overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four speed overrun

### Reason
 Joint actual speed exceeds joint rated speed

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x148482 Joint 5 speed overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 speed overrun

### Reason
 Joint actual speed exceeds joint rated speed

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x158482 Joint six speed overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six speed overrun

### Reason
 Joint actual speed exceeds joint rated speed

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x108483 Joint-speed tracking error is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint-speed tracking error is too large

### Reason
 The deviation between the actual joint speed and the command speed exceeds the alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x118483 Joint 2 speed tracking error is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 speed tracking error is too large

### Reason
 The deviation between the actual joint speed and the command speed exceeds the alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x128483 Joint three speed tracking error is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three speed tracking error is too large

### Reason
 The deviation between the actual joint speed and the command speed exceeds the alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x138483 Joint 4 speed tracking error is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 speed tracking error is too large

### Reason
 The deviation between the actual joint speed and the command speed exceeds the alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x148483 Joint 5 speed tracking error is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 speed tracking error is too large

### Reason
 The deviation between the actual joint speed and the command speed exceeds the alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x158483 Joint 6 speed tracking error is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 speed tracking error is too large

### Reason
 The deviation between the actual joint speed and the command speed exceeds the alarm threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x108484 joint-acceleration out-of-tolerance 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint-acceleration out-of-tolerance

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x118484 Joint 2 acceleration out of tolerance 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 acceleration out of tolerance

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x128484 Acceleration of three joints is out of tolerance 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Acceleration of three joints is out of tolerance

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x138484 Acceleration of four joints is out of tolerance 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Acceleration of four joints is out of tolerance

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x148484 Acceleration of five joints out of tolerance 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Acceleration of five joints out of tolerance

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x158484 Acceleration of six joints is out of tolerance 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Acceleration of six joints is out of tolerance

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x108485 Abnormal joint speed control 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Abnormal joint speed control

### Reason
 The deviation between the actual joint speed and the command speed exceeds the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x118485 Abnormal speed control of joint 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Abnormal speed control of joint 2

### Reason
 The deviation between the actual joint speed and the command speed exceeds the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x128485 Abnormal joint three-speed control 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Abnormal joint three-speed control

### Reason
 The deviation between the actual joint speed and the command speed exceeds the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x138485 Abnormal joint four speed control 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Abnormal joint four speed control

### Reason
 The deviation between the actual joint speed and the command speed exceeds the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x148485 Abnormal joint five speed control 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Abnormal joint five speed control

### Reason
 The deviation between the actual joint speed and the command speed exceeds the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x158485 Abnormal joint six speed control 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Abnormal joint six speed control

### Reason
 The deviation between the actual joint speed and the command speed exceeds the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x107380 Joint-encoder connection timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint-encoder connection timeout

### Reason
 Absolute encoder read status error

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to replace the encoder connection cable to check whether the fault is eliminated. 3. Please contact the technician to check whether the encoder status light is abnormal.

## 0x117380 Joint 2 encoder connection timed out 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder connection timed out

### Reason
 Absolute encoder read status error

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to replace the encoder connection cable to check whether the fault is eliminated. 3. Please contact the technician to check whether the encoder status light is abnormal.

## 0x127380 Joint three encoder connection timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three encoder connection timeout

### Reason
 Absolute encoder read status error

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to replace the encoder connection cable to check whether the fault is eliminated. 3. Please contact the technician to check whether the encoder status light is abnormal.

## 0x137380 Joint four encoder connection timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four encoder connection timeout

### Reason
 Absolute encoder read status error

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to replace the encoder connection cable to check whether the fault is eliminated. 3. Please contact the technician to check whether the encoder status light is abnormal.

## 0x147380 Joint five encoder connection timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five encoder connection timeout

### Reason
 Absolute encoder read status error

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to replace the encoder connection cable to check whether the fault is eliminated. 3. Please contact the technician to check whether the encoder status light is abnormal.

## 0x157380 Joint six encoder connection timeout 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six encoder connection timeout

### Reason
 Absolute encoder read status error

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to replace the encoder connection cable to check whether the fault is eliminated. 3. Please contact the technician to check whether the encoder status light is abnormal.

## 0x107381 Joint-encoder battery undervoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint-encoder battery undervoltage

### Reason
 Encoder internal battery undervoltage

### Action
  1. Confirmation of production parameters: Contact technicians to check whether the production parameters of the alarm joint are correct. 2. Check wiring: Remove the joint end cover, check whether the encoder wiring is loose, and contact technicians to replace it. 3. If the encoder is faulty, replace the joint code device or joint replacement

## 0x117381 Joint 2 encoder battery undervoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder battery undervoltage

### Reason
 Encoder internal battery undervoltage

### Action
  1. Confirmation of production parameters: Contact technicians to check whether the production parameters of the alarm joint are correct. 2. Check wiring: Remove the joint end cover, check whether the encoder wiring is loose, and contact technicians to replace it. 3. If the encoder is faulty, replace the joint code device or joint replacement

## 0x127381 Joint three encoder battery undervoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three encoder battery undervoltage

### Reason
 Encoder internal battery undervoltage

### Action
  1. Confirmation of production parameters: Contact technicians to check whether the production parameters of the alarm joint are correct. 2. Check wiring: Remove the joint end cover, check whether the encoder wiring is loose, and contact technicians to replace it. 3. If the encoder is faulty, replace the joint code device or joint replacement

## 0x137381 Joint four encoder battery undervoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four encoder battery undervoltage

### Reason
 Encoder internal battery undervoltage

### Action
  1. Confirmation of production parameters: Contact technicians to check whether the production parameters of the alarm joint are correct. 2. Check wiring: Remove the joint end cover, check whether the encoder wiring is loose, and contact technicians to replace it. 3. If the encoder is faulty, replace the joint code device or joint replacement

## 0x147381 Joint five encoder battery undervoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five encoder battery undervoltage

### Reason
 Encoder internal battery undervoltage

### Action
  1. Confirmation of production parameters: Contact technicians to check whether the production parameters of the alarm joint are correct. 2. Check wiring: Remove the joint end cover, check whether the encoder wiring is loose, and contact technicians to replace it. 3. If the encoder is faulty, replace the joint code device or joint replacement

## 0x157381 Joint six encoder battery undervoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six encoder battery undervoltage

### Reason
 Encoder internal battery undervoltage

### Action
  1. Confirmation of production parameters: Contact technicians to check whether the production parameters of the alarm joint are correct. 2. Check wiring: Remove the joint end cover, check whether the encoder wiring is loose, and contact technicians to replace it. 3. If the encoder is faulty, replace the joint code device or joint replacement

## 0x107382 Joint one encoder battery disconnected 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint one encoder battery disconnected

### Reason
 Encoder power supply error

### Action
  1. If the error occurs only during the power-on and power-off process of the robot, it will not affect the use and no further treatment is required. 2. The encoder is damaged. If the fault continues to affect the use, contact a technician to replace it.

## 0x117382 Joint 2 encoder battery disconnected 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder battery disconnected

### Reason
 Encoder power supply error

### Action
  1. If the error occurs only during the power-on and power-off process of the robot, it will not affect the use and no further treatment is required. 2. The encoder is damaged. If the fault continues to affect the use, contact a technician to replace it.

## 0x127382 Joint Three Encoder Battery Disconnected 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Three Encoder Battery Disconnected

### Reason
 Encoder power supply error

### Action
  1. If the error occurs only during the power-on and power-off process of the robot, it will not affect the use and no further treatment is required. 2. The encoder is damaged. If the fault continues to affect the use, contact a technician to replace it.

## 0x137382 Joint four encoder battery disconnected 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four encoder battery disconnected

### Reason
 Encoder power supply error

### Action
  1. If the error occurs only during the power-on and power-off process of the robot, it will not affect the use and no further treatment is required. 2. The encoder is damaged. If the fault continues to affect the use, contact a technician to replace it.

## 0x147382 Joint five encoder battery disconnected 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five encoder battery disconnected

### Reason
 Encoder power supply error

### Action
  1. If the error occurs only during the power-on and power-off process of the robot, it will not affect the use and no further treatment is required. 2. The encoder is damaged. If the fault continues to affect the use, contact a technician to replace it.

## 0x157382 Joint six encoder battery disconnected 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six encoder battery disconnected

### Reason
 Encoder power supply error

### Action
  1. If the error occurs only during the power-on and power-off process of the robot, it will not affect the use and no further treatment is required. 2. The encoder is damaged. If the fault continues to affect the use, contact a technician to replace it.

## 0x107383 Joint 1 encoder storage angle error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 encoder storage angle error

### Reason
 Joint motor position calibration error

### Action
  1. Please contact a technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to re-calibrate the Z value of the joint.

## 0x117383 Joint 2 encoder storage angle error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder storage angle error

### Reason
 Joint motor position calibration error

### Action
  1. Please contact a technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to re-calibrate the Z value of the joint.

## 0x127383 Joint three encoder storage angle error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three encoder storage angle error

### Reason
 Joint motor position calibration error

### Action
  1. Please contact a technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to re-calibrate the Z value of the joint.

## 0x137383 Joint four encoder storage angle error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four encoder storage angle error

### Reason
 Joint motor position calibration error

### Action
  1. Please contact a technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to re-calibrate the Z value of the joint.

## 0x147383 Joint five encoder storage angle error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five encoder storage angle error

### Reason
 Joint motor position calibration error

### Action
  1. Please contact a technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to re-calibrate the Z value of the joint.

## 0x157383 Joint six encoder storage angle error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six encoder storage angle error

### Reason
 Joint motor position calibration error

### Action
  1. Please contact a technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to re-calibrate the Z value of the joint.

## 0x107384 Joint 1 encoder count error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 encoder count error

### Reason
 Abnormal relative encoder count

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to check the installation of the encoder or check the dirtiness of the code disc

## 0x117384 Joint 2 encoder count error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder count error

### Reason
 Abnormal relative encoder count

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to check the installation of the encoder or check the dirtiness of the code disc

## 0x127384 Joint three encoder count error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three encoder count error

### Reason
 Abnormal relative encoder count

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to check the installation of the encoder or check the dirtiness of the code disc

## 0x137384 Joint four encoder count error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four encoder count error

### Reason
 Abnormal relative encoder count

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to check the installation of the encoder or check the dirtiness of the code disc

## 0x147384 Joint five encoder count error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five encoder count error

### Reason
 Abnormal relative encoder count

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to check the installation of the encoder or check the dirtiness of the code disc

## 0x157384 Joint six encoder count error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six encoder count error

### Reason
 Abnormal relative encoder count

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to check the installation of the encoder or check the dirtiness of the code disc

## 0x107385 Joint one double encoder verification error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint one double encoder verification error

### Reason
 The position recorded by the joint dual encoder deviates and exceeds a certain threshold

### Action
 1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please confirm whether there is a serious collision or mechanical failure, and contact the technician. 3. Please contact a technician to check the encoder installation or check the dirtiness of the code disc.

## 0x117385 Joint 2 double encoder verification error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 double encoder verification error

### Reason
 The position recorded by the joint dual encoder deviates and exceeds a certain threshold

### Action
 1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please confirm whether there is a serious collision or mechanical failure, and contact the technician. 3. Please contact a technician to check the encoder installation or check the dirtiness of the code disc.

## 0x127385 Joint triple double encoder verification error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint triple double encoder verification error

### Reason
 The position recorded by the joint dual encoder deviates and exceeds a certain threshold

### Action
 1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please confirm whether there is a serious collision or mechanical failure, and contact the technician. 3. Please contact a technician to check the encoder installation or check the dirtiness of the code disc.

## 0x137385 Joint four double encoder verification error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four double encoder verification error

### Reason
 The position recorded by the joint dual encoder deviates and exceeds a certain threshold

### Action
 1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please confirm whether there is a serious collision or mechanical failure, and contact the technician. 3. Please contact a technician to check the encoder installation or check the dirtiness of the code disc.

## 0x147385 Joint five double encoder verification error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five double encoder verification error

### Reason
 The position recorded by the joint dual encoder deviates and exceeds a certain threshold

### Action
 1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please confirm whether there is a serious collision or mechanical failure, and contact the technician. 3. Please contact a technician to check the encoder installation or check the dirtiness of the code disc.

## 0x157385 Joint six double encoder verification error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six double encoder verification error

### Reason
 The position recorded by the joint dual encoder deviates and exceeds a certain threshold

### Action
 1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please confirm whether there is a serious collision or mechanical failure, and contact the technician. 3. Please contact a technician to check the encoder installation or check the dirtiness of the code disc.

## 0x107387 Joint-Z line snap failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint-Z line snap failure

### Reason
 Relative encoder Z line capture exception

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to check and repair the relative encoder of the joint

## 0x117387 Joint 2 Z line capture failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 Z line capture failure

### Reason
 Relative encoder Z line capture exception

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to check and repair the relative encoder of the joint

## 0x127387 Joint Triple Z Line Snap Failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Triple Z Line Snap Failure

### Reason
 Relative encoder Z line capture exception

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to check and repair the relative encoder of the joint

## 0x137387 Joint 4 Z line snap failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 Z line snap failure

### Reason
 Relative encoder Z line capture exception

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to check and repair the relative encoder of the joint

## 0x147387 Joint five Z-line snap failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five Z-line snap failure

### Reason
 Relative encoder Z line capture exception

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to check and repair the relative encoder of the joint

## 0x157387 Joint six Z line capture failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six Z line capture failure

### Reason
 Relative encoder Z line capture exception

### Action
  1. Please contact the technician to check whether the production parameters of the alarm joint are correct. 2. Please contact the technician to check and repair the relative encoder of the joint

## 0x108611 Joint position deviation is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint position deviation is too large

### Reason
 The deviation between the actual position feedback and the command position exceeds the set threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x118611 Joint 2 position deviation is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 position deviation is too large

### Reason
 The deviation between the actual position feedback and the command position exceeds the set threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x128611 Joint three position deviation is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three position deviation is too large

### Reason
 The deviation between the actual position feedback and the command position exceeds the set threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x138611 Joint four position deviation is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four position deviation is too large

### Reason
 The deviation between the actual position feedback and the command position exceeds the set threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x148611 Joint five position deviation is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five position deviation is too large

### Reason
 The deviation between the actual position feedback and the command position exceeds the set threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x158611 Joint six position deviation is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six position deviation is too large

### Reason
 The deviation between the actual position feedback and the command position exceeds the set threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please check whether there is a collision and whether the load setting is correct. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x108612 Joint 1 position command increment is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 position command increment is too large

### Reason
 The position command increment is too large, exceeding the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x118612 Joint 2 position command increment is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 position command increment is too large

### Reason
 The position command increment is too large, exceeding the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x128612 Joint three-position command increment is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three-position command increment is too large

### Reason
 The position command increment is too large, exceeding the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x138612 Joint four position command increment is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four position command increment is too large

### Reason
 The position command increment is too large, exceeding the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x148612 Joint five position command increment is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five position command increment is too large

### Reason
 The position command increment is too large, exceeding the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x158612 Joint six position command increment is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six position command increment is too large

### Reason
 The position command increment is too large, exceeding the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x108613 Excessive joint acceleration 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Excessive joint acceleration

### Reason
 Position command acceleration is too large, exceeding the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x118613 Joint two acceleration is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint two acceleration is too large

### Reason
 Position command acceleration is too large, exceeding the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x128613 Excessive acceleration of three joints 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Excessive acceleration of three joints

### Reason
 Position command acceleration is too large, exceeding the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x138613 Excessive acceleration of four joints 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Excessive acceleration of four joints

### Reason
 Position command acceleration is too large, exceeding the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x148613 Joint five acceleration is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five acceleration is too large

### Reason
 Position command acceleration is too large, exceeding the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x158613 Joint six acceleration is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six acceleration is too large

### Reason
 Position command acceleration is too large, exceeding the threshold

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x108614 Joint 1 position command is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 position command is too large

### Reason
 The position command issued by the controller is wrong

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x118614 Joint 2 position command is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 position command is too large

### Reason
 The position command issued by the controller is wrong

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x128614 Joint three-position command is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three-position command is too large

### Reason
 The position command issued by the controller is wrong

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x138614 Joint four position command is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four position command is too large

### Reason
 The position command issued by the controller is wrong

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x148614 Joint five position command is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five position command is too large

### Reason
 The position command issued by the controller is wrong

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x158614 Joint six position command is too large 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six position command is too large

### Reason
 The position command issued by the controller is wrong

### Action
  1. Please check whether the program acceleration is set too high. 2. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 3. Please contact a technician to check whether the robot bus communication is abnormal. 4. If the servo mode was used at that time, please check whether the sending command is continuous or abnormal, and whether the position inverse solution is continuous or abnormal.

## 0x108615 Joint-CAN communication abnormality 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint-CAN communication abnormality

### Reason
 Abnormal robot bus communication

### Action
 Please contact a technician to check whether the robot bus communication is abnormal.

## 0x118615 Joint 2 CAN communication abnormality 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 CAN communication abnormality

### Reason
 Abnormal robot bus communication

### Action
 Please contact a technician to check whether the robot bus communication is abnormal.

## 0x128615 Joint 3 CAN communication abnormality 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 CAN communication abnormality

### Reason
 Abnormal robot bus communication

### Action
 Please contact a technician to check whether the robot bus communication is abnormal.

## 0x138615 Joint 4 CAN communication abnormality 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 CAN communication abnormality

### Reason
 Abnormal robot bus communication

### Action
 Please contact a technician to check whether the robot bus communication is abnormal.

## 0x148615 Joint 5 CAN communication abnormality 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 CAN communication abnormality

### Reason
 Abnormal robot bus communication

### Action
 Please contact a technician to check whether the robot bus communication is abnormal.

## 0x158615 Joint 6 CAN communication abnormality 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 CAN communication abnormality

### Reason
 Abnormal robot bus communication

### Action
 Please contact a technician to check whether the robot bus communication is abnormal.

## 0x103220 Joint-Servo Undervoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint-Servo Undervoltage

### Reason
 The bus voltage is detected and exceeds the undervoltage threshold of the hardware driver board

### Action
  1. Please check whether the robot load or motion acceleration is set too high, please try to reduce the operating conditions. 2. Please try to check whether the robot heavy-duty cable is connected abnormally. 3. Please contact technical personnel to help check whether the hardware of the driver board is abnormal. 4. Please contact technical personnel to assist in checking whether the communication or the power supply of the electric control cabinet is abnormal.

## 0x113220 Joint 2 servo undervoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 servo undervoltage

### Reason
 The bus voltage is detected and exceeds the undervoltage threshold of the hardware driver board

### Action
  1. Please check whether the robot load or motion acceleration is set too high, please try to reduce the operating conditions. 2. Please try to check whether the robot heavy-duty cable is connected abnormally. 3. Please contact technical personnel to help check whether the hardware of the driver board is abnormal. 4. Please contact technical personnel to assist in checking whether the communication or the power supply of the electric control cabinet is abnormal.

## 0x123220 Joint Three Servo Undervoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Three Servo Undervoltage

### Reason
 The bus voltage is detected and exceeds the undervoltage threshold of the hardware driver board

### Action
  1. Please check whether the robot load or motion acceleration is set too high, please try to reduce the operating conditions. 2. Please try to check whether the robot heavy-duty cable is connected abnormally. 3. Please contact technical personnel to help check whether the hardware of the driver board is abnormal. 4. Please contact technical personnel to assist in checking whether the communication or the power supply of the electric control cabinet is abnormal.

## 0x133220 Joint Four Servo Undervoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Four Servo Undervoltage

### Reason
 The bus voltage is detected and exceeds the undervoltage threshold of the hardware driver board

### Action
  1. Please check whether the robot load or motion acceleration is set too high, please try to reduce the operating conditions. 2. Please try to check whether the robot heavy-duty cable is connected abnormally. 3. Please contact technical personnel to help check whether the hardware of the driver board is abnormal. 4. Please contact technical personnel to assist in checking whether the communication or the power supply of the electric control cabinet is abnormal.

## 0x143220 Joint Five Servo Undervoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Five Servo Undervoltage

### Reason
 The bus voltage is detected and exceeds the undervoltage threshold of the hardware driver board

### Action
  1. Please check whether the robot load or motion acceleration is set too high, please try to reduce the operating conditions. 2. Please try to check whether the robot heavy-duty cable is connected abnormally. 3. Please contact technical personnel to help check whether the hardware of the driver board is abnormal. 4. Please contact technical personnel to assist in checking whether the communication or the power supply of the electric control cabinet is abnormal.

## 0x153220 Joint six servo undervoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six servo undervoltage

### Reason
 The bus voltage is detected and exceeds the undervoltage threshold of the hardware driver board

### Action
  1. Please check whether the robot load or motion acceleration is set too high, please try to reduce the operating conditions. 2. Please try to check whether the robot heavy-duty cable is connected abnormally. 3. Please contact technical personnel to help check whether the hardware of the driver board is abnormal. 4. Please contact technical personnel to assist in checking whether the communication or the power supply of the electric control cabinet is abnormal.

## 0x103210 joint-servo overvoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint-servo overvoltage

### Reason
 The bus voltage is detected and exceeds the overvoltage threshold of the hardware driver board

### Action
  1. Please check whether the robot load or motion acceleration is set too high, please try to reduce the operating conditions. 2. Please try to check whether the discharge plate of the electric control cabinet is abnormal. 3. Please contact technical personnel to help check whether the hardware of the driver board is abnormal.

## 0x113210 Joint 2 servo overvoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 servo overvoltage

### Reason
 The bus voltage is detected and exceeds the overvoltage threshold of the hardware driver board

### Action
  1. Please check whether the robot load or motion acceleration is set too high, please try to reduce the operating conditions. 2. Please try to check whether the discharge plate of the electric control cabinet is abnormal. 3. Please contact technical personnel to help check whether the hardware of the driver board is abnormal.

## 0x123210 Joint Triple Servo Overvoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Triple Servo Overvoltage

### Reason
 The bus voltage is detected and exceeds the overvoltage threshold of the hardware driver board

### Action
  1. Please check whether the robot load or motion acceleration is set too high, please try to reduce the operating conditions. 2. Please try to check whether the discharge plate of the electric control cabinet is abnormal. 3. Please contact technical personnel to help check whether the hardware of the driver board is abnormal.

## 0x133210 Joint Four Servo Overpressure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Four Servo Overpressure

### Reason
 The bus voltage is detected and exceeds the overvoltage threshold of the hardware driver board

### Action
  1. Please check whether the robot load or motion acceleration is set too high, please try to reduce the operating conditions. 2. Please try to check whether the discharge plate of the electric control cabinet is abnormal. 3. Please contact technical personnel to help check whether the hardware of the driver board is abnormal.

## 0x143210 Joint Five Servo Overvoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Five Servo Overvoltage

### Reason
 The bus voltage is detected and exceeds the overvoltage threshold of the hardware driver board

### Action
  1. Please check whether the robot load or motion acceleration is set too high, please try to reduce the operating conditions. 2. Please try to check whether the discharge plate of the electric control cabinet is abnormal. 3. Please contact technical personnel to help check whether the hardware of the driver board is abnormal.

## 0x153210 Joint six servo overvoltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six servo overvoltage

### Reason
 The bus voltage is detected and exceeds the overvoltage threshold of the hardware driver board

### Action
  1. Please check whether the robot load or motion acceleration is set too high, please try to reduce the operating conditions. 2. Please try to check whether the discharge plate of the electric control cabinet is abnormal. 3. Please contact technical personnel to help check whether the hardware of the driver board is abnormal.

## 0x104310 joint-servo overheating 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint-servo overheating

### Reason
 The temperature detected on the driver board exceeds the over-temperature threshold of the hardware driver board

### Action
 1. Please check whether the current ambient temperature of the robot exceeds the temperature range of the robot. 2. Please check whether the temperature of the outer surface of the joint is higher than 50°C. If it is higher than 50°C, please reduce the operating conditions. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate or the joint reducer.

## 0x114310 Joint 2 servo over temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 servo over temperature

### Reason
 The temperature detected on the driver board exceeds the over-temperature threshold of the hardware driver board

### Action
 1. Please check whether the current ambient temperature of the robot exceeds the temperature range of the robot. 2. Please check whether the temperature of the outer surface of the joint is higher than 50°C. If it is higher than 50°C, please reduce the operating conditions. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate or the joint reducer.

## 0x124310 Joint three servo over temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three servo over temperature

### Reason
 The temperature detected on the driver board exceeds the over-temperature threshold of the hardware driver board

### Action
 1. Please check whether the current ambient temperature of the robot exceeds the temperature range of the robot. 2. Please check whether the temperature of the outer surface of the joint is higher than 50°C. If it is higher than 50°C, please reduce the operating conditions. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate or the joint reducer.

## 0x134310 Joint four servo over temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four servo over temperature

### Reason
 The temperature detected on the driver board exceeds the over-temperature threshold of the hardware driver board

### Action
 1. Please check whether the current ambient temperature of the robot exceeds the temperature range of the robot. 2. Please check whether the temperature of the outer surface of the joint is higher than 50°C. If it is higher than 50°C, please reduce the operating conditions. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate or the joint reducer.

## 0x144310 Joint five servo over temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five servo over temperature

### Reason
 The temperature detected on the driver board exceeds the over-temperature threshold of the hardware driver board

### Action
 1. Please check whether the current ambient temperature of the robot exceeds the temperature range of the robot. 2. Please check whether the temperature of the outer surface of the joint is higher than 50°C. If it is higher than 50°C, please reduce the operating conditions. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate or the joint reducer.

## 0x154310 Joint six servo over temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six servo over temperature

### Reason
 The temperature detected on the driver board exceeds the over-temperature threshold of the hardware driver board

### Action
 1. Please check whether the current ambient temperature of the robot exceeds the temperature range of the robot. 2. Please check whether the temperature of the outer surface of the joint is higher than 50°C. If it is higher than 50°C, please reduce the operating conditions. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate or the joint reducer.

## 0x102350 Joint 1 module overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 module overload (I2T)

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x112350 Joint 2 module overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 module overload (I2T)

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x122350 Joint three module overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three module overload (I2T)

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x132350 Joint Four Module Overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Four Module Overload (I2T)

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x142350 Joint Five Module Overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Five Module Overload (I2T)

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x152350 Joint Six Module Overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Six Module Overload (I2T)

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x105480 Joint-Servo Overpower 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint-Servo Overpower

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x115480 Joint 2 servo overpower 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 servo overpower

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x125480 Joint three servo overpower 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three servo overpower

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x135480 Joint Four Servo Overpower 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Four Servo Overpower

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x145480 Joint five servo overpower 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five servo overpower

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x155480 Joint six servo overpower 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six servo overpower

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x103380 Joint 1 encoder zero calibration failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 encoder zero calibration failed

### Reason
 During the process of enabling the joint, the motor rotation is inconsistent with the expected

### Action
  1. Please contact the technical personnel to check whether the relevant parameters of the alarm joint are abnormal. 2. Please try to enable the joint up and down to check whether the brake is abnormal. 3. Please contact a technician to check whether there is any abnormality in the ABZ wiring of the joint or the ABZ code disc.

## 0x113380 Joint 2 encoder zero calibration failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder zero calibration failed

### Reason
 During the process of enabling the joint, the motor rotation is inconsistent with the expected

### Action
  1. Please contact the technical personnel to check whether the relevant parameters of the alarm joint are abnormal. 2. Please try to enable the joint up and down to check whether the brake is abnormal. 3. Please contact a technician to check whether there is any abnormality in the ABZ wiring of the joint or the ABZ code disc.

## 0x123380 Joint three encoder zero calibration failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three encoder zero calibration failed

### Reason
 During the process of enabling the joint, the motor rotation is inconsistent with the expected

### Action
  1. Please contact the technical personnel to check whether the relevant parameters of the alarm joint are abnormal. 2. Please try to enable the joint up and down to check whether the brake is abnormal. 3. Please contact a technician to check whether there is any abnormality in the ABZ wiring of the joint or the ABZ code disc.

## 0x133380 Joint four encoder zero calibration failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four encoder zero calibration failed

### Reason
 During the process of enabling the joint, the motor rotation is inconsistent with the expected

### Action
  1. Please contact the technical personnel to check whether the relevant parameters of the alarm joint are abnormal. 2. Please try to enable the joint up and down to check whether the brake is abnormal. 3. Please contact a technician to check whether there is any abnormality in the ABZ wiring of the joint or the ABZ code disc.

## 0x143380 Joint five encoder zero calibration failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five encoder zero calibration failed

### Reason
 During the process of enabling the joint, the motor rotation is inconsistent with the expected

### Action
  1. Please contact the technical personnel to check whether the relevant parameters of the alarm joint are abnormal. 2. Please try to enable the joint up and down to check whether the brake is abnormal. 3. Please contact a technician to check whether there is any abnormality in the ABZ wiring of the joint or the ABZ code disc.

## 0x153380 Joint six encoder zero calibration failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six encoder zero calibration failed

### Reason
 During the process of enabling the joint, the motor rotation is inconsistent with the expected

### Action
  1. Please contact the technical personnel to check whether the relevant parameters of the alarm joint are abnormal. 2. Please try to enable the joint up and down to check whether the brake is abnormal. 3. Please contact a technician to check whether there is any abnormality in the ABZ wiring of the joint or the ABZ code disc.

## 0x103381 Joint one output phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint one output phase loss

### Reason
 During the enable process, the three-phase current output is abnormal

### Action
 1. Please contact a technician to check whether there is any abnormality in the three-phase wiring of the joint. 2. Please contact a technician to check whether there is any abnormality in the joint motor circuit. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate.

## 0x113381 Joint 2 output phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 output phase loss

### Reason
 During the enable process, the three-phase current output is abnormal

### Action
 1. Please contact a technician to check whether there is any abnormality in the three-phase wiring of the joint. 2. Please contact a technician to check whether there is any abnormality in the joint motor circuit. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate.

## 0x123381 Joint three output phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three output phase loss

### Reason
 During the enable process, the three-phase current output is abnormal

### Action
 1. Please contact a technician to check whether there is any abnormality in the three-phase wiring of the joint. 2. Please contact a technician to check whether there is any abnormality in the joint motor circuit. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate.

## 0x133381 Joint four output phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four output phase loss

### Reason
 During the enable process, the three-phase current output is abnormal

### Action
 1. Please contact a technician to check whether there is any abnormality in the three-phase wiring of the joint. 2. Please contact a technician to check whether there is any abnormality in the joint motor circuit. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate.

## 0x143381 Joint five output phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five output phase loss

### Reason
 During the enable process, the three-phase current output is abnormal

### Action
 1. Please contact a technician to check whether there is any abnormality in the three-phase wiring of the joint. 2. Please contact a technician to check whether there is any abnormality in the joint motor circuit. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate.

## 0x153381 Joint six output phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six output phase loss

### Reason
 During the enable process, the three-phase current output is abnormal

### Action
 1. Please contact a technician to check whether there is any abnormality in the three-phase wiring of the joint. 2. Please contact a technician to check whether there is any abnormality in the joint motor circuit. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate.

## 0x103130 Joint-input phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint-input phase loss

### Reason
 During the enable process, the three-phase current output is abnormal

### Action
 1. Please contact a technician to check whether there is any abnormality in the three-phase wiring of the joint. 2. Please contact a technician to check whether there is any abnormality in the joint motor circuit. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate.

## 0x113130 Joint two input phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint two input phase loss

### Reason
 During the enable process, the three-phase current output is abnormal

### Action
 1. Please contact a technician to check whether there is any abnormality in the three-phase wiring of the joint. 2. Please contact a technician to check whether there is any abnormality in the joint motor circuit. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate.

## 0x123130 Joint three input phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three input phase loss

### Reason
 During the enable process, the three-phase current output is abnormal

### Action
 1. Please contact a technician to check whether there is any abnormality in the three-phase wiring of the joint. 2. Please contact a technician to check whether there is any abnormality in the joint motor circuit. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate.

## 0x133130 Joint four input phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four input phase loss

### Reason
 During the enable process, the three-phase current output is abnormal

### Action
 1. Please contact a technician to check whether there is any abnormality in the three-phase wiring of the joint. 2. Please contact a technician to check whether there is any abnormality in the joint motor circuit. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate.

## 0x143130 Joint five input phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five input phase loss

### Reason
 During the enable process, the three-phase current output is abnormal

### Action
 1. Please contact a technician to check whether there is any abnormality in the three-phase wiring of the joint. 2. Please contact a technician to check whether there is any abnormality in the joint motor circuit. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate.

## 0x153130 Joint six input phase loss 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six input phase loss

### Reason
 During the enable process, the three-phase current output is abnormal

### Action
 1. Please contact a technician to check whether there is any abnormality in the three-phase wiring of the joint. 2. Please contact a technician to check whether there is any abnormality in the joint motor circuit. 3. Please contact a technician to check whether there is any abnormality in the joint drive plate.

## 0x105441 joint one internal connection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint one internal connection error

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x115441 Joint 2 internal connection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 internal connection error

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x125441 Joint three internal connection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three internal connection error

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x135441 joint four internal connection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint four internal connection error

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x145441 joint five internal connection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint five internal connection error

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x155441 Joint six internal connection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six internal connection error

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x105280 Joint one internal parameter error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint one internal parameter error

### Reason
 The servo parameter exceeds the threshold, and this fault will only be reported when the power is turned on.

### Action
 Please contact a technician to check whether the internal parameters of the joint are abnormal.

## 0x115280 Joint 2 internal parameter error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 internal parameter error

### Reason
 The servo parameter exceeds the threshold, and this fault will only be reported when the power is turned on.

### Action
 Please contact a technician to check whether the internal parameters of the joint are abnormal.

## 0x125280 Joint 3 internal parameter error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 3 internal parameter error

### Reason
 The servo parameter exceeds the threshold, and this fault will only be reported when the power is turned on.

### Action
 Please contact a technician to check whether the internal parameters of the joint are abnormal.

## 0x135280 Joint 4 internal parameter error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 internal parameter error

### Reason
 The servo parameter exceeds the threshold, and this fault will only be reported when the power is turned on.

### Action
 Please contact a technician to check whether the internal parameters of the joint are abnormal.

## 0x145280 Joint five internal parameter error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five internal parameter error

### Reason
 The servo parameter exceeds the threshold, and this fault will only be reported when the power is turned on.

### Action
 Please contact a technician to check whether the internal parameters of the joint are abnormal.

## 0x155280 Joint six internal parameter error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six internal parameter error

### Reason
 The servo parameter exceeds the threshold, and this fault will only be reported when the power is turned on.

### Action
 Please contact a technician to check whether the internal parameters of the joint are abnormal.

## 0x105281 Joint-PID calculation overflow 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint-PID calculation overflow

### Reason
 Servo PID operation exceeds the limit

### Action
 Contact the R&D staff to deal with

## 0x115281 Joint 2 PID calculation overflow 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 PID calculation overflow

### Reason
 Servo PID operation exceeds the limit

### Action
 Contact the R&D staff to deal with

## 0x125281 Joint three PID operation overflow 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three PID operation overflow

### Reason
 Servo PID operation exceeds the limit

### Action
 Contact the R&D staff to deal with

## 0x135281 Joint 4 PID calculation overflow 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 4 PID calculation overflow

### Reason
 Servo PID operation exceeds the limit

### Action
 Contact the R&D staff to deal with

## 0x145281 Joint 5 PID calculation overflow 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 5 PID calculation overflow

### Reason
 Servo PID operation exceeds the limit

### Action
 Contact the R&D staff to deal with

## 0x155281 Joint 6 PID calculation overflow 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 6 PID calculation overflow

### Reason
 Servo PID operation exceeds the limit

### Action
 Contact the R&D staff to deal with

## 0x105211 Joint one model selection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint one model selection error

### Reason
 The hardware driver board does not match the servo Zu product series

### Action
 Please contact the technical personnel to check whether there is any abnormality in the joint hardware version and servo group parameters.

## 0x115211 Joint 2 model selection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 model selection error

### Reason
 The hardware driver board does not match the servo Zu product series

### Action
 Please contact the technical personnel to check whether there is any abnormality in the joint hardware version and servo group parameters.

## 0x125211 Joint three model selection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three model selection error

### Reason
 The hardware driver board does not match the servo Zu product series

### Action
 Please contact the technical personnel to check whether there is any abnormality in the joint hardware version and servo group parameters.

## 0x135211 Joint four model selection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four model selection error

### Reason
 The hardware driver board does not match the servo Zu product series

### Action
 Please contact the technical personnel to check whether there is any abnormality in the joint hardware version and servo group parameters.

## 0x145211 Joint five model selection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five model selection error

### Reason
 The hardware driver board does not match the servo Zu product series

### Action
 Please contact the technical personnel to check whether there is any abnormality in the joint hardware version and servo group parameters.

## 0x155211 Joint six model selection error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six model selection error

### Reason
 The hardware driver board does not match the servo Zu product series

### Action
 Please contact the technical personnel to check whether there is any abnormality in the joint hardware version and servo group parameters.

## 0x104210 Joint-motor overheating 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint-motor overheating

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x114210 Joint 2 motor over temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 motor over temperature

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x124210 Joint three motor overheating 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three motor overheating

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x134210 Joint four motor overheating 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four motor overheating

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x144210 Joint five motor over temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five motor over temperature

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x154210 Joint six motor over temperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six motor over temperature

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x105210 The parameter setting of joint one does not match the power of the hardware 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The parameter setting of joint one does not match the power of the hardware

### Reason
 Hardware driver board, motor brand model, servo group product series, these three do not match

### Action
 1. Please contact a technician to check whether there is any abnormality in the production parameters of the joint. 2. Please contact a technician to check whether the joint drive board is abnormal.

## 0x115210 Joint 2 parameter setting does not match hardware power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 parameter setting does not match hardware power

### Reason
 Hardware driver board, motor brand model, servo group product series, these three do not match

### Action
 1. Please contact a technician to check whether there is any abnormality in the production parameters of the joint. 2. Please contact a technician to check whether the joint drive board is abnormal.

## 0x125210 Joint three parameter setting does not match hardware power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three parameter setting does not match hardware power

### Reason
 Hardware driver board, motor brand model, servo group product series, these three do not match

### Action
 1. Please contact a technician to check whether there is any abnormality in the production parameters of the joint. 2. Please contact a technician to check whether the joint drive board is abnormal.

## 0x135210 The joint four parameter setting does not match the hardware power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The joint four parameter setting does not match the hardware power

### Reason
 Hardware driver board, motor brand model, servo group product series, these three do not match

### Action
 1. Please contact a technician to check whether there is any abnormality in the production parameters of the joint. 2. Please contact a technician to check whether the joint drive board is abnormal.

## 0x145210 The joint five parameter setting does not match the hardware power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The joint five parameter setting does not match the hardware power

### Reason
 Hardware driver board, motor brand model, servo group product series, these three do not match

### Action
 1. Please contact a technician to check whether there is any abnormality in the production parameters of the joint. 2. Please contact a technician to check whether the joint drive board is abnormal.

## 0x155210 Joint six parameter settings do not match hardware power 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six parameter settings do not match hardware power

### Reason
 Hardware driver board, motor brand model, servo group product series, these three do not match

### Action
 1. Please contact a technician to check whether there is any abnormality in the production parameters of the joint. 2. Please contact a technician to check whether the joint drive board is abnormal.

## 0x105282 joint one EEPROM error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint one EEPROM error

### Reason
 Hardware EEPROM chip read and write error

### Action
  1. Please try to power on and off the robot several times to check whether there are timing fluctuations. If the problem still exists, please contact the technical staff. 2. Please contact a technician to check whether the joint drive board is abnormal.

## 0x115282 joint two EEPROM error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint two EEPROM error

### Reason
 Hardware EEPROM chip read and write error

### Action
  1. Please try to power on and off the robot several times to check whether there are timing fluctuations. If the problem still exists, please contact the technical staff. 2. Please contact a technician to check whether the joint drive board is abnormal.

## 0x125282 Joint Three EEPROM Error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Three EEPROM Error

### Reason
 Hardware EEPROM chip read and write error

### Action
  1. Please try to power on and off the robot several times to check whether there are timing fluctuations. If the problem still exists, please contact the technical staff. 2. Please contact a technician to check whether the joint drive board is abnormal.

## 0x135282 Joint Quad EEPROM Error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Quad EEPROM Error

### Reason
 Hardware EEPROM chip read and write error

### Action
  1. Please try to power on and off the robot several times to check whether there are timing fluctuations. If the problem still exists, please contact the technical staff. 2. Please contact a technician to check whether the joint drive board is abnormal.

## 0x145282 Joint Five EEPROM Error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Five EEPROM Error

### Reason
 Hardware EEPROM chip read and write error

### Action
  1. Please try to power on and off the robot several times to check whether there are timing fluctuations. If the problem still exists, please contact the technical staff. 2. Please contact a technician to check whether the joint drive board is abnormal.

## 0x155282 Joint Six EEPROM Error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Six EEPROM Error

### Reason
 Hardware EEPROM chip read and write error

### Action
  1. Please try to power on and off the robot several times to check whether there are timing fluctuations. If the problem still exists, please contact the technical staff. 2. Please contact a technician to check whether the joint drive board is abnormal.

## 0x105283 Failed to enable on joint 1 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to enable on joint 1

### Reason
 During the enabling process, the enabling failed due to other system failures

### Action
 Please check whether there are other error messages in the system, and then perform the enabling operation after processing other error messages.

## 0x115283 Failed to enable on joint 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to enable on joint 2

### Reason
 During the enabling process, the enabling failed due to other system failures

### Action
 Please check whether there are other error messages in the system, and then perform the enabling operation after processing other error messages.

## 0x125283 Failed to enable on joint 3 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to enable on joint 3

### Reason
 During the enabling process, the enabling failed due to other system failures

### Action
 Please check whether there are other error messages in the system, and then perform the enabling operation after processing other error messages.

## 0x135283 Failed to enable joint four 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to enable joint four

### Reason
 During the enabling process, the enabling failed due to other system failures

### Action
 Please check whether there are other error messages in the system, and then perform the enabling operation after processing other error messages.

## 0x145283 Failed to enable on joint 5 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to enable on joint 5

### Reason
 During the enabling process, the enabling failed due to other system failures

### Action
 Please check whether there are other error messages in the system, and then perform the enabling operation after processing other error messages.

## 0x155283 Failed to enable on joint 6 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to enable on joint 6

### Reason
 During the enabling process, the enabling failed due to other system failures

### Action
 Please check whether there are other error messages in the system, and then perform the enabling operation after processing other error messages.

## 0x106010 Encoder temperature of joint one is overheated 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Encoder temperature of joint one is overheated

### Reason
 Encoder temperature status is abnormal

### Action
  1. Please check whether the temperature of the joint exceeds the requirements of the operating range, and please reduce the operating conditions. 2. Please contact a technician to check whether there is any abnormality in the joint or encoder.

## 0x116010 The temperature of joint 2 encoder is overheated 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The temperature of joint 2 encoder is overheated

### Reason
 Encoder temperature status is abnormal

### Action
  1. Please check whether the temperature of the joint exceeds the requirements of the operating range, and please reduce the operating conditions. 2. Please contact a technician to check whether there is any abnormality in the joint or encoder.

## 0x126010 Joint three encoder temperature overheating 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint three encoder temperature overheating

### Reason
 Encoder temperature status is abnormal

### Action
  1. Please check whether the temperature of the joint exceeds the requirements of the operating range, and please reduce the operating conditions. 2. Please contact a technician to check whether there is any abnormality in the joint or encoder.

## 0x136010 The joint four encoder temperature is overheated 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The joint four encoder temperature is overheated

### Reason
 Encoder temperature status is abnormal

### Action
  1. Please check whether the temperature of the joint exceeds the requirements of the operating range, and please reduce the operating conditions. 2. Please contact a technician to check whether there is any abnormality in the joint or encoder.

## 0x146010 Joint five encoder temperature overheating 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint five encoder temperature overheating

### Reason
 Encoder temperature status is abnormal

### Action
  1. Please check whether the temperature of the joint exceeds the requirements of the operating range, and please reduce the operating conditions. 2. Please contact a technician to check whether there is any abnormality in the joint or encoder.

## 0x156010 Joint six encoder temperature is overheated 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint six encoder temperature is overheated

### Reason
 Encoder temperature status is abnormal

### Action
  1. Please check whether the temperature of the joint exceeds the requirements of the operating range, and please reduce the operating conditions. 2. Please contact a technician to check whether there is any abnormality in the joint or encoder.

## 0x107180 Joint-motor overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint-motor overload (I2T)

### Reason
 The motor outputs a large current and it lasts for a while

### Action
 1. Please check whether there is a collision before the robot alarms for overload. 2. Please check whether the actual load of the joint has seriously exceeded the nominal load of the robot. 3. Please contact a technician to check the parameters of the alarm joint. 4. Please check whether the joint brake mechanism is abnormal by dragging mode. 5. Please contact a technician to check whether the joint is mechanically stuck. 6. Please contact a technician to check whether the reading of the rotor ABZ encoder is abnormal.

## 0x117180 Joint 2 motor overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 motor overload (I2T)

### Reason
 The motor outputs a large current and it lasts for a while

### Action
 1. Please check whether there is a collision before the robot alarms for overload. 2. Please check whether the actual load of the joint has seriously exceeded the nominal load of the robot. 3. Please contact a technician to check the parameters of the alarm joint. 4. Please check whether the joint brake mechanism is abnormal by dragging mode. 5. Please contact a technician to check whether the joint is mechanically stuck. 6. Please contact a technician to check whether the reading of the rotor ABZ encoder is abnormal.

## 0x127180 Joint three motor overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three motor overload (I2T)

### Reason
 The motor outputs a large current and it lasts for a while

### Action
 1. Please check whether there is a collision before the robot alarms for overload. 2. Please check whether the actual load of the joint has seriously exceeded the nominal load of the robot. 3. Please contact a technician to check the parameters of the alarm joint. 4. Please check whether the joint brake mechanism is abnormal by dragging mode. 5. Please contact a technician to check whether the joint is mechanically stuck. 6. Please contact a technician to check whether the reading of the rotor ABZ encoder is abnormal.

## 0x137180 Joint four motor overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four motor overload (I2T)

### Reason
 The motor outputs a large current and it lasts for a while

### Action
 1. Please check whether there is a collision before the robot alarms for overload. 2. Please check whether the actual load of the joint has seriously exceeded the nominal load of the robot. 3. Please contact a technician to check the parameters of the alarm joint. 4. Please check whether the joint brake mechanism is abnormal by dragging mode. 5. Please contact a technician to check whether the joint is mechanically stuck. 6. Please contact a technician to check whether the reading of the rotor ABZ encoder is abnormal.

## 0x147180 Joint five motor overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five motor overload (I2T)

### Reason
 The motor outputs a large current and it lasts for a while

### Action
 1. Please check whether there is a collision before the robot alarms for overload. 2. Please check whether the actual load of the joint has seriously exceeded the nominal load of the robot. 3. Please contact a technician to check the parameters of the alarm joint. 4. Please check whether the joint brake mechanism is abnormal by dragging mode. 5. Please contact a technician to check whether the joint is mechanically stuck. 6. Please contact a technician to check whether the reading of the rotor ABZ encoder is abnormal.

## 0x157180 Joint six motor overload (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six motor overload (I2T)

### Reason
 The motor outputs a large current and it lasts for a while

### Action
 1. Please check whether there is a collision before the robot alarms for overload. 2. Please check whether the actual load of the joint has seriously exceeded the nominal load of the robot. 3. Please contact a technician to check the parameters of the alarm joint. 4. Please check whether the joint brake mechanism is abnormal by dragging mode. 5. Please contact a technician to check whether the joint is mechanically stuck. 6. Please contact a technician to check whether the reading of the rotor ABZ encoder is abnormal.

## 0x107181 Joint one motor brake failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint one motor brake failure

### Reason
 Solenoid not detected

### Action
 1. Please check whether the wiring of the joint solenoid is abnormal. 2. Please check whether the resistance value of the measuring electromagnet is normal.

## 0x117181 Joint 2 motor brake failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 motor brake failure

### Reason
 Solenoid not detected

### Action
 1. Please check whether the wiring of the joint solenoid is abnormal. 2. Please check whether the resistance value of the measuring electromagnet is normal.

## 0x127181 Joint three motor brake failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three motor brake failure

### Reason
 Solenoid not detected

### Action
 1. Please check whether the wiring of the joint solenoid is abnormal. 2. Please check whether the resistance value of the measuring electromagnet is normal.

## 0x137181 Joint four motor brake failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four motor brake failure

### Reason
 Solenoid not detected

### Action
 1. Please check whether the wiring of the joint solenoid is abnormal. 2. Please check whether the resistance value of the measuring electromagnet is normal.

## 0x147181 Joint five motor brake failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five motor brake failure

### Reason
 Solenoid not detected

### Action
 1. Please check whether the wiring of the joint solenoid is abnormal. 2. Please check whether the resistance value of the measuring electromagnet is normal.

## 0x157181 Joint six motor brake failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six motor brake failure

### Reason
 Solenoid not detected

### Action
 1. Please check whether the wiring of the joint solenoid is abnormal. 2. Please check whether the resistance value of the measuring electromagnet is normal.

## 0x107182 joint-high-frequency injection reverse 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint-high-frequency injection reverse

### Reason
 The actual magnetic pole direction of the motor is inconsistent with the pulse injection calculation, and the control abnormality occurs

### Action
  1. Please contact technical personnel to check whether the motor parameters are correct. 2. Please check whether the phase sequence wiring of the motor is correct. 3. Please contact a technician to check whether the joint drive plate is abnormal.

## 0x117182 joint two high frequency injection reverse 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint two high frequency injection reverse

### Reason
 The actual magnetic pole direction of the motor is inconsistent with the pulse injection calculation, and the control abnormality occurs

### Action
  1. Please contact technical personnel to check whether the motor parameters are correct. 2. Please check whether the phase sequence wiring of the motor is correct. 3. Please contact a technician to check whether the joint drive plate is abnormal.

## 0x127182 Joint three high frequency injection reverse 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three high frequency injection reverse

### Reason
 The actual magnetic pole direction of the motor is inconsistent with the pulse injection calculation, and the control abnormality occurs

### Action
  1. Please contact technical personnel to check whether the motor parameters are correct. 2. Please check whether the phase sequence wiring of the motor is correct. 3. Please contact a technician to check whether the joint drive plate is abnormal.

## 0x137182 Joint Four High Frequency Injection Reverse 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Four High Frequency Injection Reverse

### Reason
 The actual magnetic pole direction of the motor is inconsistent with the pulse injection calculation, and the control abnormality occurs

### Action
  1. Please contact technical personnel to check whether the motor parameters are correct. 2. Please check whether the phase sequence wiring of the motor is correct. 3. Please contact a technician to check whether the joint drive plate is abnormal.

## 0x147182 Joint Five High Frequency Injection Reverse 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Five High Frequency Injection Reverse

### Reason
 The actual magnetic pole direction of the motor is inconsistent with the pulse injection calculation, and the control abnormality occurs

### Action
  1. Please contact technical personnel to check whether the motor parameters are correct. 2. Please check whether the phase sequence wiring of the motor is correct. 3. Please contact a technician to check whether the joint drive plate is abnormal.

## 0x157182 Joint Six High Frequency Injection Reverse 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Six High Frequency Injection Reverse

### Reason
 The actual magnetic pole direction of the motor is inconsistent with the pulse injection calculation, and the control abnormality occurs

### Action
  1. Please contact technical personnel to check whether the motor parameters are correct. 2. Please check whether the phase sequence wiring of the motor is correct. 3. Please contact a technician to check whether the joint drive plate is abnormal.

## 0x107386 Joint one encoder internal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint one encoder internal error

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x117386 Joint 2 encoder internal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 encoder internal error

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x127386 Joint three encoder internal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three encoder internal error

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x137386 Joint four encoder internal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four encoder internal error

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x147386 Joint five encoder internal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five encoder internal error

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x157386 Joint six encoder internal error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six encoder internal error

### Reason
 Unused

### Action
 Please check whether the servo is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x107580 joint-kinetic overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint-kinetic overrun

### Reason
 Torque Feedforward Exceeded Servo Threshold

### Action
 Contact the controller for processing

## 0x117580 Kinetic limit of joint 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Kinetic limit of joint 2

### Reason
 Torque Feedforward Exceeded Servo Threshold

### Action
 Contact the controller for processing

## 0x127580 Joint Trikinetic Overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint Trikinetic Overrun

### Reason
 Torque Feedforward Exceeded Servo Threshold

### Action
 Contact the controller for processing

## 0x137580 Joint four dynamics overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four dynamics overrun

### Reason
 Torque Feedforward Exceeded Servo Threshold

### Action
 Contact the controller for processing

## 0x147580 Joint five dynamics overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five dynamics overrun

### Reason
 Torque Feedforward Exceeded Servo Threshold

### Action
 Contact the controller for processing

## 0x157580 Joint six dynamics overrun 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six dynamics overrun

### Reason
 Torque Feedforward Exceeded Servo Threshold

### Action
 Contact the controller for processing

## 0x103211 Joint-drive board power supply failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint-drive board power supply failure

### Reason
 The hardware driver board is damaged

### Action
 Contact Electrical Handling

## 0x113211 Joint 2 drive board power supply failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 drive board power supply failure

### Reason
 The hardware driver board is damaged

### Action
 Contact Electrical Handling

## 0x123211 Joint three drive board power supply failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three drive board power supply failure

### Reason
 The hardware driver board is damaged

### Action
 Contact Electrical Handling

## 0x133211 Joint four drive board power supply failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four drive board power supply failure

### Reason
 The hardware driver board is damaged

### Action
 Contact Electrical Handling

## 0x143211 Joint five drive board power supply failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five drive board power supply failure

### Reason
 The hardware driver board is damaged

### Action
 Contact Electrical Handling

## 0x153211 Joint six drive board power supply failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six drive board power supply failure

### Reason
 The hardware driver board is damaged

### Action
 Contact Electrical Handling

## 0x107388 Joint 1 encoder magnetic signal is abnormal 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 encoder magnetic signal is abnormal

### Reason
 Encoder signal amplitude error, magnetic mode error, signal loss, signal abnormality

### Action
  1. Please check whether the error is reported for the fixed joint, and please contact the technical personnel to check whether the joint or the encoder is abnormal. 2. Please check whether there is any external signal or magnetic signal interference in the working environment or body of the robot.

## 0x117388 The magnetic signal of the second encoder of the joint is abnormal 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The magnetic signal of the second encoder of the joint is abnormal

### Reason
 Encoder signal amplitude error, magnetic mode error, signal loss, signal abnormality

### Action
  1. Please check whether the error is reported for the fixed joint, and please contact the technical personnel to check whether the joint or the encoder is abnormal. 2. Please check whether there is any external signal or magnetic signal interference in the working environment or body of the robot.

## 0x127388 The magnetic signal of joint three encoder is abnormal 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The magnetic signal of joint three encoder is abnormal

### Reason
 Encoder signal amplitude error, magnetic mode error, signal loss, signal abnormality

### Action
  1. Please check whether the error is reported for the fixed joint, and please contact the technical personnel to check whether the joint or the encoder is abnormal. 2. Please check whether there is any external signal or magnetic signal interference in the working environment or body of the robot.

## 0x137388 The magnetic signal of the four encoders of the joint is abnormal 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The magnetic signal of the four encoders of the joint is abnormal

### Reason
 Encoder signal amplitude error, magnetic mode error, signal loss, signal abnormality

### Action
  1. Please check whether the error is reported for the fixed joint, and please contact the technical personnel to check whether the joint or the encoder is abnormal. 2. Please check whether there is any external signal or magnetic signal interference in the working environment or body of the robot.

## 0x147388 The magnetic signal of joint five encoder is abnormal 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The magnetic signal of joint five encoder is abnormal

### Reason
 Encoder signal amplitude error, magnetic mode error, signal loss, signal abnormality

### Action
  1. Please check whether the error is reported for the fixed joint, and please contact the technical personnel to check whether the joint or the encoder is abnormal. 2. Please check whether there is any external signal or magnetic signal interference in the working environment or body of the robot.

## 0x157388 The magnetic signal of joint six encoder is abnormal 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The magnetic signal of joint six encoder is abnormal

### Reason
 Encoder signal amplitude error, magnetic mode error, signal loss, signal abnormality

### Action
  1. Please check whether the error is reported for the fixed joint, and please contact the technical personnel to check whether the joint or the encoder is abnormal. 2. Please check whether there is any external signal or magnetic signal interference in the working environment or body of the robot.

## 0x108000 Joint one position deviation - protective stop 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint one position deviation - protective stop

### Reason
 Collision detection based on servo position following error

### Action
 1. Please check whether the robot has collided. 2. Please check whether the program acceleration is set too high. 3. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 4. Please check whether the robot load setting is correct.

## 0x118000 Joint 2 position deviation - protective stop 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 2 position deviation - protective stop

### Reason
 Collision detection based on servo position following error

### Action
 1. Please check whether the robot has collided. 2. Please check whether the program acceleration is set too high. 3. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 4. Please check whether the robot load setting is correct.

## 0x128000 Joint three position deviation - protective stop 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint three position deviation - protective stop

### Reason
 Collision detection based on servo position following error

### Action
 1. Please check whether the robot has collided. 2. Please check whether the program acceleration is set too high. 3. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 4. Please check whether the robot load setting is correct.

## 0x138000 Joint four position deviation - protective stop 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint four position deviation - protective stop

### Reason
 Collision detection based on servo position following error

### Action
 1. Please check whether the robot has collided. 2. Please check whether the program acceleration is set too high. 3. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 4. Please check whether the robot load setting is correct.

## 0x148000 Joint five position deviation - protective stop 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint five position deviation - protective stop

### Reason
 Collision detection based on servo position following error

### Action
 1. Please check whether the robot has collided. 2. Please check whether the program acceleration is set too high. 3. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 4. Please check whether the robot load setting is correct.

## 0x158000 Joint six position deviation - protective stop 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint six position deviation - protective stop

### Reason
 Collision detection based on servo position following error

### Action
 1. Please check whether the robot has collided. 2. Please check whether the program acceleration is set too high. 3. Please check whether there is any abnormality in the parameter setting of the movement segment transfer. 4. Please check whether the robot load setting is correct.

## 0x108001 Joint position deviation alarm 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint position deviation alarm

### Reason
 Collision detection based on servo position following error

### Action
  1. Please check if the robot sends a collision. 2. Please check whether the robot motion acceleration is set too high. 3. Please check whether the load of the robot exceeds the required range. 2. Please check whether the installation posture of the robot in the software is consistent with the actual posture. 3. Please check whether the movement segment transition is used incorrectly during the movement.

## 0x118001 Joint 2 position deviation alarm 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 2 position deviation alarm

### Reason
 Collision detection based on servo position following error

### Action
  1. Please check if the robot sends a collision. 2. Please check whether the robot motion acceleration is set too high. 3. Please check whether the load of the robot exceeds the required range. 2. Please check whether the installation posture of the robot in the software is consistent with the actual posture. 3. Please check whether the movement segment transition is used incorrectly during the movement.

## 0x128001 Joint three position deviation alarm 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint three position deviation alarm

### Reason
 Collision detection based on servo position following error

### Action
  1. Please check if the robot sends a collision. 2. Please check whether the robot motion acceleration is set too high. 3. Please check whether the load of the robot exceeds the required range. 2. Please check whether the installation posture of the robot in the software is consistent with the actual posture. 3. Please check whether the movement segment transition is used incorrectly during the movement.

## 0x138001 Joint four position deviation alarm 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint four position deviation alarm

### Reason
 Collision detection based on servo position following error

### Action
  1. Please check if the robot sends a collision. 2. Please check whether the robot motion acceleration is set too high. 3. Please check whether the load of the robot exceeds the required range. 2. Please check whether the installation posture of the robot in the software is consistent with the actual posture. 3. Please check whether the movement segment transition is used incorrectly during the movement.

## 0x148001 Joint five position deviation alarm 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint five position deviation alarm

### Reason
 Collision detection based on servo position following error

### Action
  1. Please check if the robot sends a collision. 2. Please check whether the robot motion acceleration is set too high. 3. Please check whether the load of the robot exceeds the required range. 2. Please check whether the installation posture of the robot in the software is consistent with the actual posture. 3. Please check whether the movement segment transition is used incorrectly during the movement.

## 0x158001 Joint six position deviation alarm 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint six position deviation alarm

### Reason
 Collision detection based on servo position following error

### Action
  1. Please check if the robot sends a collision. 2. Please check whether the robot motion acceleration is set too high. 3. Please check whether the load of the robot exceeds the required range. 2. Please check whether the installation posture of the robot in the software is consistent with the actual posture. 3. Please check whether the movement segment transition is used incorrectly during the movement.

## 0x105201 Joint 1 parameter is not unlocked 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 1 parameter is not unlocked

### Reason
 From the R176 version, the key parameters of the servo have added a write protection function to avoid errors in the servo parameters caused by misoperation.

### Action
 If this fault occurs, please contact the technical personnel to check the joint parameters.

## 0x115201 Joint 2 parameters are not unlocked 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint 2 parameters are not unlocked

### Reason
 From the R176 version, the key parameters of the servo have added a write protection function to avoid errors in the servo parameters caused by misoperation.

### Action
 Please contact a technician for a joint parameter check.

## 0x125201 Joint three parameters are not unlocked 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint three parameters are not unlocked

### Reason
 From the R176 version, the key parameters of the servo have added a write protection function to avoid errors in the servo parameters caused by misoperation.

### Action
 Please contact a technician for a joint parameter check.

## 0x135201 Joint four parameters are not unlocked 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint four parameters are not unlocked

### Reason
 From the R176 version, the key parameters of the servo have added a write protection function to avoid errors in the servo parameters caused by misoperation.

### Action
 Please contact a technician for a joint parameter check.

## 0x145201 Joint five parameters are not unlocked 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint five parameters are not unlocked

### Reason
 From the R176 version, the key parameters of the servo have added a write protection function to avoid errors in the servo parameters caused by misoperation.

### Action
 Please contact a technician for a joint parameter check.

## 0x155201 Joint six parameters are not unlocked 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Joint six parameters are not unlocked

### Reason
 From the R176 version, the key parameters of the servo have added a write protection function to avoid errors in the servo parameters caused by misoperation.

### Action
 Please contact a technician for a joint parameter check.

## 0x105202 Joint 1 zero calibration conflicts with DH parameters 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 1 zero calibration conflicts with DH parameters

### Reason
 When performing mechanical zero calibration, the servo will detect whether the current model has been calibrated with DH parameters before leaving the factory. If the calibrated model uses the mechanical zero calibration function, DH errors will occur, and eventually the robot’s accuracy will be lost.

### Action
 Reserved fault, if this fault occurs, please update the software of the host computer and contact the technical staff to update the software of the host computer

## 0x115202 Joint 2 zero calibration conflicts with DH parameters 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 zero calibration conflicts with DH parameters

### Reason
 When performing mechanical zero calibration, the servo will detect whether the current model has been calibrated with DH parameters before leaving the factory. If the calibrated model uses the mechanical zero calibration function, DH errors will occur, and eventually the robot’s accuracy will be lost.

### Action
 Reserved fault, if this fault occurs, please update the software of the host computer and contact the technical staff to update the software of the host computer

## 0x125202 Joint three zero calibration conflicts with DH parameters 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three zero calibration conflicts with DH parameters

### Reason
 When performing mechanical zero calibration, the servo will detect whether the current model has been calibrated with DH parameters before leaving the factory. If the calibrated model uses the mechanical zero calibration function, DH errors will occur, and eventually the robot’s accuracy will be lost.

### Action
 Reserved fault, if this fault occurs, please update the software of the host computer and contact the technical staff to update the software of the host computer

## 0x135202 Joint four zero calibration conflicts with DH parameters 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint four zero calibration conflicts with DH parameters

### Reason
 When performing mechanical zero calibration, the servo will detect whether the current model has been calibrated with DH parameters before leaving the factory. If the calibrated model uses the mechanical zero calibration function, DH errors will occur, and eventually the robot’s accuracy will be lost.

### Action
 Reserved fault, if this fault occurs, please update the software of the host computer and contact the technical staff to update the software of the host computer

## 0x145202 Joint five zero calibration conflicts with DH parameters 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint five zero calibration conflicts with DH parameters

### Reason
 When performing mechanical zero calibration, the servo will detect whether the current model has been calibrated with DH parameters before leaving the factory. If the calibrated model uses the mechanical zero calibration function, DH errors will occur, and eventually the robot’s accuracy will be lost.

### Action
 Reserved fault, if this fault occurs, please update the software of the host computer and contact the technical staff to update the software of the host computer

## 0x155202 Joint six zero calibration conflicts with DH parameters 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint six zero calibration conflicts with DH parameters

### Reason
 When performing mechanical zero calibration, the servo will detect whether the current model has been calibrated with DH parameters before leaving the factory. If the calibrated model uses the mechanical zero calibration function, DH errors will occur, and eventually the robot’s accuracy will be lost.

### Action
 Reserved fault, if this fault occurs, please update the software of the host computer and contact the technical staff to update the software of the host computer

## 0x108616 Abnormal joint-temperature sensor communication 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Abnormal joint-temperature sensor communication

### Reason
 Abnormal temperature sensor inside the joint

### Action
 Please check whether the IIC interface temperature sensor is abnormal.

## 0x118616 Joint 2 temperature sensor communication abnormality 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint 2 temperature sensor communication abnormality

### Reason
 Abnormal temperature sensor inside the joint

### Action
 Please check whether the IIC interface temperature sensor is abnormal.

## 0x128616 Joint three temperature sensor communication abnormality 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Joint three temperature sensor communication abnormality

### Reason
 Abnormal temperature sensor inside the joint

### Action
 Please check whether the IIC interface temperature sensor is abnormal.

## 0x138616 Abnormal communication of joint four temperature sensors 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Abnormal communication of joint four temperature sensors

### Reason
 Abnormal temperature sensor inside the joint

### Action
 Please check whether the IIC interface temperature sensor is abnormal.

## 0x148616 Abnormal communication of joint five temperature sensor 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Abnormal communication of joint five temperature sensor

### Reason
 Abnormal temperature sensor inside the joint

### Action
 Please check whether the IIC interface temperature sensor is abnormal.

## 0x158616 Abnormal communication of joint six temperature sensor 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Abnormal communication of joint six temperature sensor

### Reason
 Abnormal temperature sensor inside the joint

### Action
 Please check whether the IIC interface temperature sensor is abnormal.

## 0x201102 Failed to create Modbus RTU connection during extended IO initialization 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to create Modbus Rtu connection during extended IO initialization

### Reason
 An error occurred while connecting the Modbus slave IO module according to the given configuration during initialization.

### Action
 1) Please confirm the type and communication configuration of the extended IO module; 2) Please confirm that the communication physical connection between the control cabinet interface and the external extended IO module is normal; 3) Please confirm that the power supply of the extended IO module is normal; 4) You can try to use the Modbus Poll tool to connect Extended IO checks whether the extended IO module is abnormal.

## 0x201202 Failed to create Modbus TCP connection during extended IO initialization 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to create Modbus Tcp connection during extended IO initialization

### Reason
 An error occurred while connecting the Modbus slave IO module according to the given configuration during initialization.

### Action
 1) Please confirm the type and communication configuration of the extended IO module; 2) Please confirm that the communication physical connection between the control cabinet interface and the external extended IO module is normal; 3) Please confirm that the power supply of the extended IO module is normal; 4) You can try to use the Modbus Poll tool to connect Extended IO checks whether the extended IO module is abnormal.

## 0x201304 Unknown error during extended IO initialization 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Unknown error during initialization

### Reason
 An error occurred while connecting the Modbus slave IO module according to the given configuration during initialization.

### Action
 1) Please confirm the type and communication configuration of the extended IO module; 2) Please confirm that the communication physical connection between the control cabinet interface and the external extended IO module is normal; 3) Please confirm that the power supply of the extended IO module is normal; 4) You can try to use the Modbus Poll tool to connect Extended IO checks whether the extended IO module is abnormal.

## 0x201101  Modbus RTU configuration error during extended IO initialization 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Extended IO initialization failed Modbus RTU communication parameters do not match

### Reason
 An error occurred while connecting the Modbus slave IO module according to the given configuration during initialization.

### Action
 1) Please confirm the type and communication configuration of the extended IO module; 2) Please confirm that the communication physical connection between the control cabinet interface and the external extended IO module is normal; 3) Please confirm that the power supply of the extended IO module is normal; 4) You can try to use the Modbus Poll tool to connect Extended IO checks whether the extended IO module is abnormal.

## 0x201201 Modbus TCP configuration error during extended IO initialization 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Extended IO initialization failed Modbus TCP communication parameter format error

### Reason
 An error occurred while connecting the Modbus slave IO module according to the given configuration during initialization.

### Action
 1) Please confirm the type and communication configuration of the extended IO module; 2) Please confirm that the communication physical connection between the control cabinet interface and the external extended IO module is normal; 3) Please confirm that the power supply of the extended IO module is normal; 4) You can try to use the Modbus Poll tool to connect Extended IO checks whether the extended IO module is abnormal.

## 0x202103 Modbus RTU node goes offline when extended IO is running 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The Modbus RTU node is disconnected when the extended IO operation fails.

### Reason
 During operation, the Modbus RTU extended IO module is disconnected from the controller.

### Action
 1) Please confirm the type and communication configuration of the extended IO module; 2) Please confirm that the communication physical connection between the control cabinet interface and the external extended IO module is normal; 3) Please confirm that the power supply of the extended IO module is normal; 4) You can try to use the Modbus Poll tool to connect Extended IO checks whether the extended IO module is abnormal.

## 0x202102 Modbus TCP node goes offline when extended IO is running 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 The Modbus TCP node is disconnected when the extended IO operation fails.

### Reason
 During operation, the Modbus TCP extended IO module is disconnected from the controller.

### Action
 1) Please confirm the type and communication configuration of the extended IO module; 2) Please confirm that the communication physical connection between the control cabinet interface and the external extended IO module is normal; 3) Please confirm that the power supply of the extended IO module is normal; 4) You can try to use the Modbus Poll tool to connect Extended IO checks whether the extended IO module is abnormal.

## 0x3F0001 Torque sensor communication initialization failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Torque sensor connection initialization failed

### Reason
 When opening with the sensor, a connection will be established with the sensor according to the communication configuration. This error will be returned when the communication connection between the controller and the sensor fails.

### Action
 1) Please confirm the torque sensor type and communication configuration; 2) Please confirm that the communication physical connection between the control cabinet interface and the torque sensor is normal; 3) Please confirm that the power supply of the torque sensor is normal; 4) You can try to use the Modbus debugging tool or the network debugging assistant tool to connect Torque sensor Check whether the torque sensor is abnormal.

## 0x3F1001 Failed to receive torque sensor data 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Failed to receive torque sensor data

### Reason
 This error will be reported when the communication between the controller and the sensor is established and the connection is established normally, but the data is disconnected during operation.

### Action
 1) Please confirm the torque sensor type and communication configuration; 2) Please confirm that the communication physical connection between the control cabinet interface and the torque sensor is normal; 3) Please confirm that the power supply of the torque sensor is normal; 4) You can try to use the Modbus debugging tool or the network debugging assistant tool to connect Torque sensor Check whether the torque sensor is abnormal.

## 0x3F1002 Received torque sensor data format error 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Received torque sensor data format error

### Reason
 This error generally occurs when the torque sensor is extended through TIO, and an error is reported when the format of the received torque sensor data is wrong.

### Action
 1) Please confirm the torque sensor type and communication protocol; 2) You can try to use the Modbus debugging tool, network debugging assistant tool or serial port debugging tool to analyze the received torque sensor data to determine whether it conforms to the communication protocol of JAKA+ torque sensor .

## 0x304281 Abnormal PDU temperature 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Abnormal PDU temperature

### Reason
 The temperature inside the control cabinet exceeds 70°C

### Action
 1) Please check whether the temperature inside the control cabinet exceeds 70°C; 2) Please check whether the fan inside the control cabinet is working normally.

## 0x304282 Brake resistor overtemperature 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Brake resistor overtemperature

### Reason
 The temperature of the internal braking resistor of MiniCAB exceeds 80°C

### Action
  1) Please check the internal temperature of MiniCAB; 2) Please reduce the acceleration of the robot; 3) Please add a cooling fan;

## 0x303281 Abnormal 5V power supply voltage 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Abnormal 5V (fluctuation range of power supply voltage)

### Reason
 The 5V signal voltage value inside the control cabinet exceeds the internal preset value (3.5~6.1V), you can use a multimeter to test the 5V signal voltage value.

### Action
 1) Please check whether the firmware version is the latest version, if it is not updated to the latest version, check whether the problem still exists; 2) After the input power supply of the control cabinet is disconnected and powered on again, check whether the problem still exists, if it exists, please contact the technical staff 3) For the standard 220V power supply control cabinet, the fault will be reported when the 220V power supply is unplugged, which is a normal phenomenon.

## 0x303282  12V power supply voltage is abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 12V abnormality (fluctuation range of power supply voltage)

### Reason
 The 12V signal voltage value inside the control cabinet exceeds the internal preset value (9~14V), and the 12V signal voltage value can be measured with a multimeter.

### Action
 1) Please check whether the firmware version is the latest version, if it is not updated to the latest version, check whether the problem still exists; 2) After the input power supply of the control cabinet is disconnected and powered on again, check whether the problem still exists, if it exists, please contact the technical staff 3) For the standard 220V power supply control cabinet, the fault will be reported when the 220V power supply is unplugged, which is a normal phenomenon.

## 0x303283 Abnormal 24V power supply voltage 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 24V abnormality (fluctuation range of power supply voltage)

### Reason
 The 12V signal voltage inside the control cabinet exceeds the internal preset value (15~31V), you can use a multimeter to measure the 12V signal voltage value.

### Action
 1) Please check whether the firmware version is the latest version, if it is not updated to the latest version, check whether the problem still exists; 2) After the input power supply of the control cabinet is disconnected and powered on again, check whether the problem still exists, if it exists, please contact the technical staff 3) For the standard 220V power supply control cabinet, the fault will be reported when the 220V power supply is unplugged, which is a normal phenomenon.

## 0x303181 Abnormal 220V power supply voltage 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Abnormal 220V power supply

### Reason
 The control cabinet detects that the amplitude and frequency of the 220V signal are abnormal

### Action
 1) Please confirm the current power supply voltage and frequency of the control cabinet. Only the AC power above 110V and 50~60Hz can have the 220V power failure detection function. The control cabinet powered by 90~110V AC must use the firmware version with the words dis220v; 2) Please update to the latest version of the firmware to check whether the problem still exists; 3) If neither 1 nor 2 solves the problem, it is necessary to determine the amplitude and frequency of the power supply and the changes in amplitude and frequency during operation; 4) If 1 Neither 2 nor 2 solve this problem, and 3 cannot be measured. It is necessary to determine whether the power supply of the control cabinet will be cut off directly when the robot is running (including but not limited to unplugging the 220V plug, power failure in the factory, etc.), if not It is possible to update the firmware to a version with dis220V for temporary use.

## 0x303182 The main power supply relay is abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The main power supply relay is abnormal

### Reason
 The relay that controls the 48V output detects an output signal when it is not powered on, that is, the relay that controls the input signal of the 48V power supply is stuck.

### Action
 1) Please update the SCB firmware to the latest version to see if the problem still exists; 2) Please confirm the amplitude and frequency of the power supply voltage of the control cabinet, the control cabinet powered by 90~110V AC must use the firmware version with the words dis220v ; 3) After the previous two steps, the fault is still reported, please contact the technician to check whether the relay controlling the 48V power supply in the electric control cabinet is damaged.

## 0x303381 The main body output power supply voltage is abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Body voltage or voltage configuration is abnormal

### Reason
 The discharge voltage value set by MiniCAB is smaller than the input voltage value of MiniCAB.

### Action
 Please use the APP to reset the discharge voltage.

## 0x303387 PSCB relay abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 PSCB relay abnormal

### Reason
 After the main body power is turned off, the voltage values of the two relays that control the main body power detected by the PSCB are inconsistent.

### Action
 1) Please update to the latest version of the firmware to check whether the problem still exists; 2) If the problem still exists after the previous operation, please contact a technician to check whether the internal relay of the PSCB is damaged.

## 0x302384 User IO power supply current is abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 User IO power supply current is abnormal (2.3A)

### Reason
 The total current value of the 24V output on the control cabinet panel exceeds 1.5A

### Action
 1) Please remove the components on the panel of the control cabinet and check whether the fault is still reported; 2) If the fault is not reported after the first step, the user equipment cannot use the control cabinet for power supply and needs to be powered separately; 3) If the error is still reported after the first step, And if the error is still reported after shutdown and restart, please contact a technician to check whether the hardware is damaged.

## 0x302385 Abnormal IPC current 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The current of the industrial computer is abnormal (the current of the industrial computer exceeds 1.5A, it is considered that the industrial computer is short-circuited, and an error is reported)

### Reason
 The industrial computer is not connected after starting up or the current of the industrial computer exceeds 1.5A;

### Action
 Please contact a technician to check whether the hardware of the industrial computer is abnormal.

## 0x302380  Abnormal fan current 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Abnormal fan current

### Reason
 The control cabinet fan is not connected or the fan is short-circuited;

### Action
 Please check the fan failure status.

## 0x302381 Level 1 alarm for body current abnormality 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Output body power supply current abnormal level 1 warning: 25A robot body current consumption is abnormal

### Reason
 The current collected by the SCB exceeds the set threshold

### Action
 Please check whether the SCB is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x302382 Body current abnormal secondary alarm 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Output body power supply current abnormal level 2 early warning: 31.25A

### Reason
 The current collected by the SCB exceeds the set threshold

### Action
 Please check whether the SCB is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x302383 Three-level alarm for body current abnormality 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Output body power supply current abnormal level 3 early warning: 37.25A

### Reason
 The current collected by the SCB exceeds the set threshold

### Action
 Please check whether the SCB is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x302391 Abnormal body power 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Abnormal body power

### Reason
 The power of the main body calculated by the safety control board exceeds the set limit value

### Action
 1. Please re-adjust the power setting in the security settings in the APP. 2. Please contact technical service personnel to check whether there is a problem of power exceeding the limit on the hardware.

## 0x309081 The end of the robot is dragging and overspeeding 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Drag and drop TCP speed exceeded

### Reason
 The TCP dragging speed of the main body exceeds 1m/s.

### Action
 Please reduce the dragging speed, this alarm does not affect other functions, it is only a reminder.

## 0x309082 emergency stop trigger 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 emergency stop

### Reason
 Any one of the handle emergency stop, user emergency stop, and safety function IO emergency stop signals is triggered.

### Action
 Please check which one of the handle emergency stop, user emergency stop, and safety function IO emergency stop signal is triggered.

## 0x308181 Handle CAN communication interrupted 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Handle CAN communication interrupted

### Reason
 The data of the safety control board and the handle bus are wrong.

### Action
 1. Please check whether the cable connection between the handle and the electric control cabinet is normal. 2. Please contact a technician to check whether the CAN bus between SCB/PSCB and CAN2 of the control cabinet is abnormal.

## 0x308182 Controller CAN communication interrupted 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Controller CAN communication interrupted

### Reason
 After turning on the power of the robot, the command sent by the controller to the main body has not been received for a period of time.

### Action
 1) Please update the SCB and PSCB firmware to the latest version and check whether the fault exists; 2) Check whether the data of joints 1~6 has been refreshed on the APP monitoring or servo host computer monitoring page; 3) Please check whether the indicator light at the end of the body is On, if not on, please check whether the wiring is normal.

## 0x308183 Main body CAN communication interrupted 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Main body CAN communication interrupted

### Reason
 After turning on the power of the robot, the command sent by the controller to the main body has not been received for a period of time.

### Action
 1) Please update the SCB and PSCB firmware to the latest version and check whether the fault exists; 2) Check whether the data of joints 1~6 has been refreshed on the APP monitoring or servo host computer monitoring page; 3) Please check whether the indicator light at the end of the body is On, if not on, please check whether the wiring is normal.

## 0x308184 TIO CAN communication interrupted 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 TIO CAN communication interrupted

### Reason
 After turning on the power of the robot, the command sent by the controller to the main body has not been received for a period of time.

### Action
 1) Please update the SCB and PSCB firmware to the latest version and check whether the fault exists; 2) Check whether the data of joints 1~6 has been refreshed on the APP monitoring or servo host computer monitoring page; 3) Please check whether the indicator light at the end of the body is On, if not on, please check whether the wiring is normal.

## 0x308185 Waiting for CAN communication to time out normally 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Waiting for CAN communication to time out normally

### Reason
 After turning on the power of the robot, the command sent by the controller to the main body has not been received for a period of time.

### Action
 1) Please update the SCB and PSCB firmware to the latest version and check whether the fault exists; 2) Check whether the data of joints 1~6 has been refreshed on the APP monitoring or servo host computer monitoring page; 3) Please check whether the indicator light at the end of the body is On, if not on, please check whether the wiring is normal.

## 0x305081 The emergency stop signal of the handle is inconsistent 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 The emergency stop signal of the handle is inconsistent

### Reason
 The signal is a dual-link redundant channel, and an error will be reported if the two signals are inconsistent.

### Action
 Please try to replace the handle, or contact a technician to check the cabinet SCB circuit.

## 0x305082 Inconsistent user emergency stop signal input 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Inconsistent user emergency stop signal input

### Reason
 The signal is a dual-link redundant channel, and an error will be reported if the two signals are inconsistent.

### Action
 Please check whether the p8 terminal on the panel is in poor contact, and check whether the external circuit is normal

## 0x305083 Inconsistent input of protective stop signal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Inconsistent input of protective stop signal

### Reason
 The signal is a dual-link redundant channel, and an error will be reported if the two signals are inconsistent.

### Action
 Please check whether the p8 terminal on the panel is in poor contact, and check whether the external circuit is normal

## 0x305084 SCB relay abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 SCB relay abnormal

### Reason
 Unused

### Action
 Please check whether the SCB is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x305085 Brake resistor overtemperature 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Brake resistor overtemperature

### Reason
 Unused

### Action
 Please check whether the SCB is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x305086 Handle enable input is abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Handle enable input is abnormal

### Reason
 Unused

### Action
 Please check whether the SCB is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x305087 Additional emergency stop input abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Additional emergency stop input abnormal

### Reason
 The signal is a dual-link redundant channel, and an error will be reported if the two signals are inconsistent.

### Action
 Please check whether the DI interface terminals configured on the panel are in poor contact, and check whether the external circuit is normal.

## 0x305088 Additional protective stop input exception 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Additional protective stop input exception

### Reason
 The signal is a dual-link redundant channel, and an error will be reported if the two signals are inconsistent.

### Action
 Please check whether the DI interface terminals configured on the panel are in poor contact, and check whether the external circuit is normal.

## 0x305089 Protective stop reset input abnormal 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Protective stop reset input abnormal

### Reason
 The signal is a dual-link redundant channel, and an error will be reported if the two signals are inconsistent.

### Action
 Please check whether the DI interface terminals configured on the panel are in poor contact, and check whether the external circuit is normal.

## 0x30508A Reduced mode input exception 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Reduced mode input exception

### Reason
 The signal is a dual-link redundant channel, and an error will be reported if the two signals are inconsistent.

### Action
 Please check whether the DI interface terminals configured on the panel are in poor contact, and check whether the external circuit is normal.

## 0x309083 Robot machine power alarm threshold 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot machine power alarm threshold

### Reason
 Unused

### Action
 Please check whether the SCB is a debugging version, or contact technical service personnel to provide relevant error code description information.

## 0x0FFFFE other errors 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 other errors

### Reason
 

### Action
 

## 0x0FFFFF unknown mistake 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 unknown mistake

### Reason
 

### Action
 

## 0x10F0000 System emergency stop trigger 
 Type: Info 

 IsShowConfirm：No  

### Description 
 System emergency stop trigger

### Reason
 

### Action
 

## 0x10F0001 System emergency stop reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 System emergency stop reset

### Reason
 

### Action
 

## 0x10F0002 The robot is powered on 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The robot is powered on

### Reason
 

### Action
 

## 0x10F0003 The robot is powered off 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The robot is powered off

### Reason
 

### Action
 

## 0x10F0004 Robot servo enable complete 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot servo enable complete

### Reason
 

### Action
 

## 0x10F0005 Robot servo enable off 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot servo enable off

### Reason
 

### Action
 

## 0x10F0006 Robot exits magnification mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot exits magnification mode

### Reason
 

### Action
 

## 0x10F0007 The robot enters the first-level magnification mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The robot enters the first-level magnification mode

### Reason
 

### Action
 

## 0x10F0008 The robot enters the secondary magnification mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The robot enters the secondary magnification mode

### Reason
 

### Action
 

## 0x10F0009 The robot enters a protective stop 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The robot enters a protective stop

### Reason
 

### Action
 

## 0x10F000a Robot exits collision protective stop 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot exits collision protective stop

### Reason
 

### Action
 

## 0x10F000b The robot enters a crash-protective stop 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The robot enters a crash-protective stop

### Reason
 

### Action
 

## 0x10F000c Robot joint limit state recovery 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot joint limit state recovery

### Reason
 

### Action
 

## 0x10F000d Carousel feature is on 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Carousel feature is on

### Reason
 

### Action
 

## 0x10F000e Carousel feature is off 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Carousel feature is off

### Reason
 

### Action
 

## 0x10F000f Soft control is on 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Soft control is on

### Reason
 

### Action
 

## 0x10F0010 Softness control is off 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Softness control is off

### Reason
 

### Action
 

## 0x10F0011 The robot enters drag mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The robot enters drag mode

### Reason
 

### Action
 

## 0x10F0012 The robot exits drag mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The robot exits drag mode

### Reason
 

### Action
 

## 0x10F0013 The robot enters force-controlled traction mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The robot enters force-controlled traction mode

### Reason
 

### Action
 

## 0x10F0014 The robot exits force control traction mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The robot exits force control traction mode

### Reason
 

### Action
 

## 0x10F0015 Robot SERVO motion mode is on 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot SERVO motion mode is on

### Reason
 

### Action
 

## 0x10F0016 Robot SERVO motion mode is off 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot SERVO motion mode is off

### Reason
 

### Action
 

## 0x10F0017 The robot is outside the safety boundary 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The robot is outside the safety boundary

### Reason
 

### Action
 

## 0x10F0018 Robot returns within safe perimeter 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot returns within safe perimeter

### Reason
 

### Action
 

## 0x10F0019 Start Cartesian space rate limiting 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Start Cartesian space rate limiting

### Reason
 

### Action
 

## 0x10F0020 Robot goes into reduced mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot goes into reduced mode

### Reason
 

### Action
 

## 0x10F0021 Robot exits reduced mode 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot exits reduced mode

### Reason
 

### Action
 

## 0x10F001a Stop Cartesian space rate limiting 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Stop Cartesian space rate limiting

### Reason
 

### Action
 

## 0x10F001b The job program starts to execute 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The job program starts to execute

### Reason
 

### Action
 

## 0x10F001c The operating program is suspended 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The operating program is suspended

### Reason
 

### Action
 

## 0x10F001d Job program resumes execution 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Job program resumes execution

### Reason
 

### Action
 

## 0x10F001e The operating program stops executing 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The operating program stops executing

### Reason
 

### Action
 

## 0x10F0100 Torque sensor is on 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Torque sensor is on

### Reason
 

### Action
 

## 0x10F0101 Torque sensor is off 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Torque sensor is off

### Reason
 

### Action
 

## 0x10F0102 Expansion IO module is enabled 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Expansion IO module is enabled

### Reason
 

### Action
 

## 0x10F0103 Expansion IO module is closed 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Expansion IO module is closed

### Reason
 

### Action
 

## 0x10F0104 Control handle lock 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Control handle lock

### Reason
 

### Action
 

## 0x10F0200 Function DI (execute program) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (execute program) triggered

### Reason
 

### Action
 

## 0x10F0201 Function DI (pause program) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (pause program) triggered

### Reason
 

### Action
 

## 0x10F0202 Function DI (resume procedure) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (resume procedure) triggered

### Reason
 

### Action
 

## 0x10F0203 Function DI (stop program) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (stop program) triggered

### Reason
 

### Action
 

## 0x10F0204 Function DI (power on) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (power on) triggered

### Reason
 

### Action
 

## 0x10F0205 Function DI (power off) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (power off) triggered

### Reason
 

### Action
 

## 0x10F0206 Function DI (servo enable on) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (servo enable on) triggered

### Reason
 

### Action
 

## 0x10F0207 Function DI (servo enable off) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (servo enable off) triggered

### Reason
 

### Action
 

## 0x10F0208 Function DI (enter 1st override mode) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (enter 1st override mode) triggered

### Reason
 

### Action
 

## 0x10F0209 Function DI (Enter secondary override mode) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (Enter secondary override mode) triggered

### Reason
 

### Action
 

## 0x10F020a Function DI (entering protective stop) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (entering protective stop) triggered

### Reason
 

### Action
 

## 0x10F020b Function DI (return to initial position) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (return to initial position) triggered

### Reason
 

### Action
 

## 0x10F020c Function DI (clear error) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (clear error) triggered

### Reason
 

### Action
 

## 0x10F020d Function DI (Enter Drag Mode) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (Enter Drag Mode) triggered

### Reason
 

### Action
 

## 0x10F020e Function DI (exit drag mode) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DI (exit drag mode) triggered

### Reason
 

### Action
 

## 0x10F020f Function DI (stop program or suspend program) has been triggered, (run program) should not be executed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Function DI (stop program or suspend program) has been triggered, (run program) should not be executed

### Reason
 

### Action
 

## 0x10F0210 Function DI (pause program) triggered, (resume program) should not be executed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Function DI (pause program) triggered, (resume program) should not be executed

### Reason
 

### Action
 

## 0x10F0211 Function DI (power off) is triggered, (power on) should not be executed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Function DI (power off) is triggered, (power on) should not be executed

### Reason
 

### Action
 

## 0x10F0212 Function DI (Enable Down) has been triggered, (Enable Up) should not be executed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Function DI (Enable Down) has been triggered, (Enable Up) should not be executed

### Reason
 

### Action
 

## 0x10F0220 Function DO (job idle) is set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (job idle) is set

### Reason
 

### Action
 

## 0x10F0221 Function DO (job idle) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (job idle) reset

### Reason
 

### Action
 

## 0x10F0222 Function DO (job program pause) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (job program pause) set

### Reason
 

### Action
 

## 0x10F0223 Function DO (job program pause) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (job program pause) reset

### Reason
 

### Action
 

## 0x10F0224 Function DO (work program running) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (work program running) set

### Reason
 

### Action
 

## 0x10F0225 Function DO (working program running) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (working program running) reset

### Reason
 

### Action
 

## 0x10F0226 Function DO (control system failure) is set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (control system failure) is set

### Reason
 

### Action
 

## 0x10F0227 Function DO (control system failure) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (control system failure) reset

### Reason
 

### Action
 

## 0x10F0228 Function DO (robot powered on) is set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot powered on) is set

### Reason
 

### Action
 

## 0x10F0229 Function DO (robot powered on) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot powered on) reset

### Reason
 

### Action
 

## 0x10F022a Function DO (servo enable is on) is set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (servo enable is on) is set

### Reason
 

### Action
 

## 0x10F022b Function DO (servo enable is on) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (servo enable is on) reset

### Reason
 

### Action
 

## 0x10F022c Function DO (robot in motion) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot in motion) set

### Reason
 

### Action
 

## 0x10F022d Function DO (during robot motion) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (during robot motion) reset

### Reason
 

### Action
 

## 0x10F022e Function DO (robot stationary) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot stationary) set

### Reason
 

### Action
 

## 0x10F022f Function DO (robot stationary) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot stationary) reset

### Reason
 

### Action
 

## 0x10F0230 Function DO (control system ready) is set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (control system ready) is set

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
 

## 0x10F0233 Function DO (robot emergency stop) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot emergency stop) reset

### Reason
 

### Action
 

## 0x10F0234 Function DO (robot is in secondary override mode) is set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot is in secondary override mode) is set

### Reason
 

### Action
 

## 0x10F0235 Function DO (robot in secondary override mode) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot in secondary override mode) reset

### Reason
 

### Action
 

## 0x10F0236 Function DO (robot in protective stop) is set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot in protective stop) is set

### Reason
 

### Action
 

## 0x10F0237 Function DO (robot in protective stop) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot in protective stop) reset

### Reason
 

### Action
 

## 0x10F0238 Function DO (robot in initial position) is set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot in initial position) is set

### Reason
 

### Action
 

## 0x10F0239 Function DO (robot in initial position) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot in initial position) reset

### Reason
 

### Action
 

## 0x10F0240 Function DO (robot is in primary override mode) set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot is in primary override mode) set

### Reason
 

### Action
 

## 0x10F0241 Function DO (robot is in primary override mode) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Function DO (robot is in primary override mode) reset

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
 

## 0x10F0252 Safety function DI (protective stop reset) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (protective stop reset) triggered

### Reason
 

### Action
 

## 0x10F0253 Safety function DI (Reduced Mode) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (Reduced Mode) triggered

### Reason
 

### Action
 

## 0x10F0254 Safety function DI (three-position enable) triggered 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DI (three-position enable) triggered

### Reason
 

### Action
 

## 0x10F0260 Safety function DO (emergency stop triggered by pushbutton) is set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DO (emergency stop triggered by pushbutton) is set

### Reason
 

### Action
 

## 0x10F0261 Safety function DO (button emergency stop triggered) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DO (button emergency stop triggered) reset

### Reason
 

### Action
 

## 0x10F0262 The safety function DO (system emergency stop triggered) is set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The safety function DO (system emergency stop triggered) is set

### Reason
 

### Action
 

## 0x10F0263 Safety function DO (system emergency stop triggered) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DO (system emergency stop triggered) reset

### Reason
 

### Action
 

## 0x10F0264 The safety function DO (robot in protective stop) is set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The safety function DO (robot in protective stop) is set

### Reason
 

### Action
 

## 0x10F0265 Safety function DO (robot in protective stop) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DO (robot in protective stop) reset

### Reason
 

### Action
 

## 0x10F0266 The safety function DO (robot in motion) is set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The safety function DO (robot in motion) is set

### Reason
 

### Action
 

## 0x10F0267 The safety function DO (robot in motion) is set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The safety function DO (robot in motion) is set

### Reason
 

### Action
 

## 0x10F0268 The safety function DO (robot in reduced mode) is set 
 Type: Info 

 IsShowConfirm：No  

### Description 
 The safety function DO (robot in reduced mode) is set

### Reason
 

### Action
 

## 0x10F0269 Safety function DO (robot in reduced mode) reset 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Safety function DO (robot in reduced mode) reset

### Reason
 

### Action
 

## 0x10F0300 Login initialization failed 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Login initialization failed

### Reason
 There is an exception in reading data when logging in to the connection

### Action
 1. Please check whether there is a version mismatch between the current software APP version and the controller version. 2. Please check whether there is any abnormality in the network connection. 3. Please try to reconnect the robot or restart the APP operation.

