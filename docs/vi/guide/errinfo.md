# Code sự kiện và ý nghĩa

## 0x0F0001 Thân robot không được bật nguồn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Thân robot hiện không được bật nguồn

### Reason
 Đã phát hiện thấy tắt trạng thái nguồn trong khi bộ điều khiển đang thực thi trạng thái

### Action
 Xác nhận xem nguồn của thân robot đã được bật hay chưa; nếu nguồn của thân robot chưa được bật, vui lòng bật nguồn của thân robot trước

## 0x0F0002 Robot không được kích hoạt 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot hiện chưa được kích hoạt

### Reason
 Khi bộ điều khiển thực hiện lệnh, nó phát hiện ra rằng robot chưa được bật

### Action
 Xác nhận xem rô-bốt có được bật hay không; nếu không, vui lòng bật rô-bốt trước

## 0x0F0003 Thao tác này không thể được thực hiện trong chế độ hiện tại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Thao tác này không thể được thực hiện trong chế độ hiện tại. Hiện ở chế độ , lệnh  không được phép

### Reason
 Có nhiều chế độ bên trong bộ điều khiển và các hoạt động cụ thể được phép chạy ở các chế độ cụ thể. Việc chuyển đổi chế độ được tự động hoàn thành trong nội bộ và khi sự cố này xảy ra, nguyên nhân là do các quyền hoạt động được xử lý không đúng cách.

### Action
 Trước tiên hãy thoát khỏi chế độ hiện tại, sau đó vận hành, chẳng hạn như kích hoạt rô-bốt trước khi tiếp tục vận hành.

## 0x0F0004  (2) 手動ジョグ、ロボットのターゲットポイントまたはターゲットパスポーズが到達可能かどうかを確認し、到達可能であれば、ポーズを変更してキネマティックを実行してください逆解を計算します。 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tính toán nghịch đảo động học không thành công

### Reason
 Tính toán nghịch đảo động học không thành công

### Action
 Việc tính toán nghiệm động học nghịch đảo không thành công vì các lý do sau: (1) Tư thế không gian Descartes đã cho vượt quá không gian có thể tiếp cận của robot 

## 0x0F0005 Vị trí được đặt quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí được đặt quá lớn

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0F0006 Khớp robot đạt giới hạn cứng dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp rô-bốt không thể di chuyển khi đạt đến giới hạn cứng dương

### Reason
 Nói chung, trong quá trình di chuyển JOG, rô-bốt đã đạt đến giới hạn, nhưng lệnh vẫn di chuyển theo hướng của giới hạn và thông báo nhắc lỗi.

### Action
 Kiểm tra xem vị trí hiện tại của rô bốt đã đạt đến giới hạn chưa và rô bốt không thể di chuyển vượt quá giới hạn.

## 0x0F0007 Khớp robot đạt đến giới hạn cứng âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp robot đạt đến giới hạn cứng âm và không thể di chuyển

### Reason
 Nói chung, trong quá trình di chuyển JOG, rô-bốt đã đạt đến giới hạn, nhưng lệnh vẫn di chuyển theo hướng của giới hạn và thông báo nhắc lỗi.

### Action
 Kiểm tra xem vị trí hiện tại của rô bốt đã đạt đến giới hạn chưa và rô bốt không thể di chuyển vượt quá giới hạn.

## 0x0F0008 Khớp robot đạt giới hạn mềm dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Các khớp của robot không thể di chuyển khi chúng đạt đến giới hạn mềm dương

### Reason
 Nói chung, trong quá trình di chuyển JOG, rô-bốt đã đạt đến giới hạn, nhưng lệnh vẫn di chuyển theo hướng của giới hạn và thông báo nhắc lỗi.

### Action
 Kiểm tra xem vị trí hiện tại của rô bốt đã đạt đến giới hạn chưa và rô bốt không thể di chuyển vượt quá giới hạn.

## 0x0F0009 Khớp robot đạt đến giới hạn mềm âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp robot đạt đến giới hạn mềm âm và không thể di chuyển

### Reason
 Nói chung, trong quá trình di chuyển JOG, rô-bốt đã đạt đến giới hạn, nhưng lệnh vẫn di chuyển theo hướng của giới hạn và thông báo nhắc lỗi.

### Action
 Kiểm tra xem vị trí hiện tại của rô bốt đã đạt đến giới hạn chưa và rô bốt không thể di chuyển vượt quá giới hạn.

## 0x0F000A Vị trí mục tiêu Descartes vượt quá giới hạn vị trí tối đa dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu vượt quá giới hạn vị trí tối đa dương

### Reason
 Lỗi này thường được nhắc khi vị trí lệnh do chuyển động không gian Descartes đưa ra vượt quá giới hạn tối đa của trục.

### Action
 Hãy kiểm tra xem đối tượng không gian Descartes đã cho có nằm ngoài sải tay hay không.

## 0x0F000B Vị trí mục tiêu Descartes vượt quá giới hạn vị trí tối đa âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu vượt quá giới hạn vị trí tối đa âm

### Reason
 Lỗi này thường được nhắc khi vị trí lệnh do chuyển động không gian Descartes đưa ra vượt quá giới hạn tối đa của trục.

### Action
 Hãy kiểm tra xem đối tượng không gian Descartes đã cho có nằm ngoài sải tay hay không.

## 0x0F000E Không thể thực hiện các thao tác thủ công trong quá trình trả về điểm không chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Thao tác thủ công không thể thực hiện được trong quá trình Trang chủ

### Reason
  Lỗi này thường được nhắc khi điều khiển chuyển động thủ công của rô-bốt được thực hiện trong quá trình cài đặt quay về 0 của rô-bốt.

### Action
 Xác nhận xem rô-bốt hiện có đang trở về 0 hay không và nếu có, hãy đợi rô-bốt trở về 0 trước khi tiếp tục.

## 0x0F000F  コマンドが正しい場合は、ログをエクスポートして、JAKA 技術サービス担当者に連絡してください。 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Chỉ mục chung của lệnh không hợp lệ

### Reason
 Chỉ mục chung của lệnh không hợp lệ

### Action
 Sự cố này thường do chỉ số trục/khớp đã cho không hợp lệ gây ra khi điều khiển một trục đơn trong không gian Descartes hoặc một khớp đơn trong không gian khớp.

## 0x0F0010 Tốc độ lệnh chuyển động không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tốc độ lệnh chuyển động không hợp lệ

### Reason
 Dành riêng nội bộ

### Action
 Dành riêng nội bộ

## 0x0F0011 Vị trí mục tiêu của hướng dẫn chuyển động vượt quá giới hạn của máy 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu của hướng dẫn chuyển động vượt quá giới hạn của máy

### Reason
  Vị trí mục tiêu của chuyển động khớp hoặc chuyển động tuyến tính vượt quá giới hạn của robot.

### Action
 Chạy bộ thủ công, kiểm tra xem có thể tiếp cận vị trí mục tiêu hay không và liệu nó có vượt quá giới hạn khớp hay không.

## 0x0F0012 Chế độ không liên kết không thể thực hiện thao tác tại nhà 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Chế độ không liên kết không thể thực hiện thao tác tại nhà

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0F0013 nhà đang hoàn thiện 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 nhà đang hoàn thiện

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0F0014 Không thể thoát khỏi chế độ được bảo vệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể thoát khỏi chế độ được bảo vệ

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0F0015 Robot không khởi động 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot không khởi động

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0F0016 Khớp robot ở giới hạn mềm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp robot ở giới hạn mềm

### Reason
 Các khớp của robot ở trong giới hạn mềm và không thể hoàn thành thao tác hướng dẫn.

### Action
 Kiểm tra trạng thái hiện tại của các khớp của robot, xem nó đã đạt đến giới hạn khớp chưa, nếu đã đạt đến giới hạn, nó không thể tiếp tục di chuyển về hướng vượt mà chỉ có thể di chuyển theo hướng không vượt, vui lòng chạy nhanh tràn khớp trở lại phạm vi giới hạn khớp trên trang hướng dẫn hoặc sửa đổi giới hạn trên trang cài đặt.

## 0x0F0017 Vị trí đích của hướng dẫn chuyển động không thể truy cập được 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí đích của hướng dẫn chuyển động không thể truy cập được

### Reason
 Vị trí đích của hướng dẫn chuyển động không thể truy cập được.

### Action
 Vị trí mục tiêu nằm ngoài phạm vi làm việc hoặc tại một điểm kỳ dị. Thao tác thủ công kiểm tra xem khớp có thể di chuyển đến điểm mục tiêu hay không, nếu có thể, hãy xem xét thay đổi tư thế rô-bốt hiện tại để đến điểm mục tiêu từ các đường dẫn hoặc tư thế khác.

## 0x0F0018 Điểm kỳ dị đạt đến điểm dừng bảo vệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điểm kỳ dị đạt đến điểm dừng bảo vệ

### Reason
 Robot sắp đạt đến một cấu hình kỳ dị trên đường chuyển động và không thể tiếp tục di chuyển trong không gian Cartesian. Lỗi này thường được báo cáo khi xảy ra lỗi khi tính toán giải pháp nghịch đảo hoặc khi giải pháp nghịch đảo được tính toán nằm trong một không gian giải pháp khác với chu kỳ trước.

### Action
 Kiểm tra xem đường đi và tư thế hiện tại của robot có đến được không, nếu không, hãy thay đổi tư thế hoặc đường đi ban đầu để đến được vị trí mục tiêu. Nếu bạn xác nhận rằng không có vấn đề gì với đường dẫn lệnh, vui lòng thu thập dữ liệu liên quan và liên hệ với nhân viên dịch vụ kỹ thuật của JAKA.

## 0x0F0019 Khởi tạo thiết bị CAN không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khởi tạo thiết bị CAN không thành công

### Reason
 Khởi tạo thiết bị CAN không thành công.

### Action
 Trong môi trường mô phỏng ngoại tuyến, nếu không có thiết bị CAN, lỗi sẽ được báo cáo và quá trình tối ưu hóa tiếp theo sẽ được thực hiện. Trong môi trường máy thực tế, vui lòng khởi động lại rô-bốt, nếu tình trạng vẫn tiếp diễn, vui lòng liên hệ với nhân viên dịch vụ kỹ thuật của JAKA.

## 0x0F001A Hết thời gian chờ nâng cấp bằng một cú nhấp chuột 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hết thời gian chờ nâng cấp bằng một cú nhấp chuột

### Reason
 Nâng cấp bằng một cú nhấp chuột mất quá nhiều thời gian

### Action
 Vui lòng kiểm tra các điều kiện mạng và điều kiện thiết bị trước khi tiếp tục.

## 0x0F001B Ngoại lệ nâng cấp bằng một cú nhấp chuột 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Ngoại lệ nâng cấp bằng một cú nhấp chuột

### Reason
 Nâng cấp bằng một cú nhấp chuột không thành công

### Action
 Vui lòng kiểm tra nguồn gốc và tính hợp lệ của gói nâng cấp một phím.

## 0x0F0020 Chuyển động tuyến tính đến vị trí mục tiêu không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Chuyển động tuyến tính đến vị trí mục tiêu không thành công

### Reason
 Chuyển động tuyến tính đến vị trí mục tiêu không thành công. Nó được báo cáo khi điểm kỳ dị đi qua trong chuyển động Descartes chung (đường thẳng hoặc chuyển động cung), đặc biệt khi điểm đầu hoặc điểm cuối là một điểm kỳ dị.

### Action
 Nếu không thể tiếp cận điểm đường chuyển động tuyến tính hoặc điểm mục tiêu hoặc đi qua một điểm kỳ dị, hãy kiểm tra thủ công xem khớp có thể di chuyển đến điểm mục tiêu hay không. Nếu có thể, hãy cân nhắc thay đổi tư thế rô-bốt hiện tại để đến điểm mục tiêu từ các đường hoặc tư thế khác. Lưu ý: Vì con trỏ chương trình sẽ đi trước con trỏ hành động thực tế nên thông báo lỗi có thể được kích hoạt trước, tức là nó sẽ được báo khi nó được phân tích cú pháp nhưng không được thực thi tới dòng tương ứng. Khi xử lý sự cố này, vui lòng kiểm tra xem các lệnh tiếp theo trong chương trình vận hành có thể truy cập được hay không dựa trên vị trí hiện tại.

## 0x0F0021 Mô hình robot không hỗ trợ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mô hình robot không hỗ trợ

### Reason
 Mô hình robot không được hỗ trợ. Nói chung, phần mềm điều khiển mới nhất sẽ hỗ trợ tất cả các mẫu rô bốt hiện có, nhưng sự cố này sẽ xảy ra khi kết nối các mẫu rô bốt mới với phần mềm điều khiển cũ. Khi sự cố này xảy ra, các tham số DH, tham số động và các hạn chế khác nhau của rô-bốt có thể sai, vì vậy hãy kích hoạt điều khiển cẩn thận.

### Action
 Kiểm tra số sê-ri của rô bốt trên trang thông tin APP và liên hệ với JAKA để nhận phiên bản phần mềm được hỗ trợ.

## 0x0F0022 Số sê-ri robot không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Số sê-ri robot không hợp lệ

### Reason
 Số sê-ri robot không hợp lệ. Phần mềm điều khiển hỗ trợ các mô hình rô bốt cụ thể và các mô hình rô bốt cụ thể có các quy tắc mã hóa cụ thể. Số sê-ri của rô-bốt trên máy thực tế được đọc từ servo. Nếu số sê-ri không đáp ứng các kiểu máy và quy tắc được hỗ trợ, sẽ báo lỗi.

### Action
 Kiểm tra số sê-ri của rô bốt trên trang thông tin APP, kiểm tra số sê-ri thực tế của thân rô-bốt và kiểm tra xem số sê-ri có được cấu hình chính xác hay không. Nếu số sê-ri chính xác, vui lòng liên hệ với JAKA để nhận phiên bản mới nhất.

## 0x0F0023 システム内部送信エラー 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 負荷を再確認します。 コントローラーを更新します。 サポートについては JAKA にお問い合わせください

### Reason
 Chỉ số theo dõi nhận dạng tải không hợp lệ

### Action
 Chỉ số theo dõi nhận dạng tải không hợp lệ

## 0x0F0024 Không thể đặt độ phóng đại ở chế độ phóng đại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể đặt độ phóng đại ở chế độ phóng đại

### Reason
 Không thể đặt độ phóng đại ở chế độ phóng đại. Lỗi này thường được nhắc khi rô-bốt ở chế độ ghi đè hoặc ở chế độ dừng bảo vệ để đặt ghi đè.

### Action
 Vui lòng kiểm tra xem rô-bốt hiện có ở chế độ phóng đại hay không, nếu vậy, vui lòng thoát khỏi chế độ phóng đại trước rồi đặt độ phóng đại; nếu rô-bốt không ở chế độ phóng đại, vui lòng xác nhận phiên bản phần mềm hiện tại và liên hệ với nhân viên dịch vụ kỹ thuật của JAKA .

## 0x0F0025 Định nghĩa quỹ đạo nhận dạng tải không đáp ứng thông số kỹ thuật 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Định nghĩa quỹ đạo nhận dạng tải không đáp ứng thông số kỹ thuật

### Reason
 Định nghĩa quỹ đạo nhận dạng tải không đáp ứng thông số kỹ thuật. Robot nhận dạng tải cần đáp ứng một số ràng buộc nhất định để đảm bảo tính chính xác của kết quả nhận dạng. Khi đầu vào của người dùng không đáp ứng các yêu cầu nhanh chóng, câu hỏi sẽ được nhắc.

### Action
 Vui lòng vận hành theo thông số quỹ đạo được nhắc trên giao diện nhận dạng tải APP và thực hiện lại nhận dạng tải.

## 0x0F0026 Vui lòng kích hoạt nó trước khi tắt nguồn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Vui lòng kích hoạt nó trước khi tắt nguồn

### Reason
 Vui lòng kích hoạt nó trước khi tắt nguồn

### Action
 Vui lòng kích hoạt nó trước và sau đó tắt nguồn.

## 0x0F0027 Không thể được kích hoạt trong khi chương trình đang chạy 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể được kích hoạt trong khi chương trình đang chạy

### Reason
 Nó không thể được kích hoạt trong khi chạy chương trình.

### Action
 Vui lòng dừng chương trình trước, sau đó kích hoạt nó.

## 0x0F0028 2) ロボットのモデルとシリアル番号が正しく識別されているか確認してください。 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Có sự sai lệch trong cài đặt tải

### Reason
 Có sự sai lệch trong cài đặt tải, vui lòng kiểm tra

### Action
 Vui lòng kiểm tra xem có sai lệch trong cài đặt tải không. Thông báo lỗi này thường được kiểm tra khi quá trình kích hoạt hoàn tất. Nếu độ lệch giữa mô-men xoắn đầu ra thực tế của rô-bốt và mô-men xoắn tiến lên vượt quá một phạm vi nhất định, thì lỗi này sẽ được báo cáo và kích hoạt.

## 0x0F0029 Không thể thêm lệnh di chuyển vòng tròn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể thêm lệnh di chuyển vòng tròn

### Reason
 Thêm ba vị trí thẳng hàng hoặc ba điểm đối với bài dạy chuyển động tròn

### Action
 1) Vui lòng kiểm tra xem điểm đầu, điểm giữa và điểm cuối của chuyển động vòng cung có trùng nhau không; 2), vui lòng kiểm tra xem điểm đầu, điểm giữa và điểm cuối của chuyển động vòng cung có phải là các vị trí kỳ dị không;

## 0x0F0030 Giới hạn tốc độ khớp được đặt thành 0 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Giới hạn tốc độ khớp được đặt thành 0

### Reason
 Giá trị giới hạn của tốc độ khớp là 0

### Action
 Kiểm tra xem giá trị "giới hạn tốc độ chung" trong giao diện cài đặt bảo mật APP có được đặt thành 0°/s hay không

## 0x0F0031 Giới hạn kích hoạt ba vị trí 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Giới hạn kích hoạt ba vị trí

### Reason
 Định cấu hình và bật chức năng an toàn kích hoạt ba vị trí trong cài đặt an toàn.

### Action
 Chức năng an toàn kích hoạt ba vị trí có những hạn chế đối với việc điều khiển robot, vui lòng kiểm tra trạng thái của công tắc ba vị trí hoặc chọn tắt chức năng kích hoạt ba vị trí tùy theo tình huống an toàn.

## 0x0F0032 Không thể theo dõi các loại chuyển động khác với chuyển động tuyến tính hoặc vòng cung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể theo dõi các loại chuyển động khác với chuyển động tuyến tính hoặc vòng cung

### Reason
 Theo dõi băng chuyền chỉ có thể theo dõi loại chuyển động không gian Cartesian, trong khi các loại chuyển động khác của chuyển động phi tuyến tính và chuyển động trơn tru được lồng trong mô-đun theo dõi băng tải.

### Action
 Vui lòng kiểm tra xem các mô-đun loại chuyển động khác của chuyển động phi tuyến tính và chuyển động trơn tru có được lồng trong theo dõi băng tải hay không

## 0x0F0038 Không thể thêm hướng dẫn chuyển động chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể thêm hướng dẫn chuyển động chung

### Reason
 Cài đặt đoạn chuyển động khớp không hợp lý

### Action
 1) Vui lòng xác nhận xem vị trí khớp rô-bốt hiện tại và vị trí khớp mục tiêu có đúng không

## 0x0F0039 TCP を再調整して、重複する点がないことを確認してください。 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lặp lại điểm giảng dạy hiệu chuẩn TCP

### Reason
 Lặp lại điểm giảng dạy hiệu chuẩn TCP

### Action
 Có từ hai điểm dạy trở lên trùng nhau trong các điểm dạy

## 0x0F003A  Không cho phép robot di chuyển  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
  Không cho phép robot di chuyển 

### Reason
  Không cho phép robot di chuyển 

### Action
  Vui lòng dừng hoạt động của robot trước khi kích hoạt. 

## 0x0F003B Người máy đã được nạp năng lượng mà không cần phải lặp lại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Người máy đã được nạp năng lượng mà không cần phải lặp lại

### Reason
 Người máy đã được nạp năng lượng mà không cần phải lặp lại

### Action
 Người máy đã được nạp năng lượng mà không cần phải lặp lại

## 0x0F003C Robot đã được kích hoạt mà không cần lặp lại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot đã được kích hoạt mà không cần lặp lại

### Reason
 Robot đã được kích hoạt mà không cần lặp lại

### Action
 Robot đã được kích hoạt mà không cần lặp lại

## 0x0F003D Hiệu chuẩn của hệ tọa độ TCP có nghĩa là các điểm hướng dẫn nằm trên cùng một đường thẳng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hiệu chuẩn của hệ tọa độ TCP có nghĩa là các điểm hướng dẫn nằm trên cùng một đường thẳng

### Reason
 Các điểm giảng dạy trên cùng một đường thẳng có thể dẫn đến tư thế không thể tính toán TCP.

### Action
 Vui lòng thiết lập lại vị trí hướng dẫn thích hợp.

## 0x0F003E Lỗi hiệu chuẩn của hệ tọa độ TCP vượt quá ngưỡng đặt trước 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi hiệu chuẩn của hệ tọa độ TCP vượt quá ngưỡng đặt trước

### Reason
 Lỗi hiệu chuẩn của hệ tọa độ TCP vượt quá ngưỡng đặt trước

### Action
 Vui lòng thiết lập lại vị trí hướng dẫn thích hợp.

## 0x0F003F Tọa độ hiệu chuẩn của hệ tọa độ TCP vượt ra ngoài không gian làm việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tọa độ hiệu chuẩn của hệ tọa độ TCP vượt ra ngoài không gian làm việc

### Reason
 Tọa độ hiệu chuẩn của hệ tọa độ TCP vượt ra ngoài không gian làm việc

### Action
 Vui lòng thiết lập lại vị trí hướng dẫn thích hợp.

## 0x000030 Tốc độ di chuyển của khớp vượt quá giới hạn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tốc độ di chuyển của khớp vượt quá giới hạn

### Reason
 Tốc độ di chuyển của khớp một vượt quá giới hạn. Lỗi này thường được báo cáo khi lệnh do bộ điều khiển đưa ra vượt quá giới hạn tốc độ thực tế của khớp.

### Action
 1) Vui lòng xác nhận xem giới hạn tốc độ của rô-bốt hiện tại có bị sửa đổi và cải thiện một cách giả tạo hay không, nếu có, hãy liên hệ với nhân viên kỹ thuật của JAKA 2) Nếu chưa được sửa đổi nhưng vẫn báo lỗi, vui lòng xác nhận xem có thể giảm giới hạn tốc độ hoặc gia tốc hay không loại bỏ hiện tượng; nếu nó vẫn xảy ra, vui lòng liên hệ với Xuất thông tin chẩn đoán tương ứng và liên hệ với nhân viên dịch vụ kỹ thuật của JAKA.

## 0x010030 Tốc độ di chuyển của khớp 2 vượt quá giới hạn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tốc độ di chuyển của khớp 2 vượt quá giới hạn

### Reason
 Tốc độ di chuyển của khớp 2 vượt quá giới hạn. Lỗi này thường được báo cáo khi lệnh do bộ điều khiển đưa ra vượt quá giới hạn tốc độ thực tế của khớp.

### Action
 1) Vui lòng xác nhận xem giới hạn tốc độ của rô-bốt hiện tại có bị sửa đổi và cải thiện một cách giả tạo hay không, nếu có, hãy liên hệ với nhân viên kỹ thuật của JAKA 2) Nếu chưa được sửa đổi nhưng vẫn báo lỗi, vui lòng xác nhận xem có thể giảm giới hạn tốc độ hoặc gia tốc hay không loại bỏ hiện tượng; nếu nó vẫn xảy ra, vui lòng liên hệ với Xuất thông tin chẩn đoán tương ứng và liên hệ với nhân viên dịch vụ kỹ thuật của JAKA.

## 0x020030 Tốc độ di chuyển của khớp 3 vượt quá giới hạn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tốc độ di chuyển của khớp 3 vượt quá giới hạn

### Reason
 Tốc độ di chuyển của khớp 3 vượt quá giới hạn. Lỗi này thường được báo cáo khi lệnh do bộ điều khiển đưa ra vượt quá giới hạn tốc độ thực tế của khớp.

### Action
 1) Vui lòng xác nhận xem giới hạn tốc độ của rô-bốt hiện tại có bị sửa đổi và cải thiện một cách giả tạo hay không, nếu có, hãy liên hệ với nhân viên kỹ thuật của JAKA 2) Nếu chưa được sửa đổi nhưng vẫn báo lỗi, vui lòng xác nhận xem có thể giảm giới hạn tốc độ hoặc gia tốc hay không loại bỏ hiện tượng; nếu nó vẫn xảy ra, vui lòng liên hệ với Xuất thông tin chẩn đoán tương ứng và liên hệ với nhân viên dịch vụ kỹ thuật của JAKA.

## 0x030030 Tốc độ di chuyển của khớp 4 vượt quá giới hạn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tốc độ di chuyển của khớp 4 vượt quá giới hạn

### Reason
 Tốc độ di chuyển của khớp 4 vượt quá giới hạn. Lỗi này thường được báo cáo khi lệnh do bộ điều khiển đưa ra vượt quá giới hạn tốc độ thực tế của khớp.

### Action
 1) Vui lòng xác nhận xem giới hạn tốc độ của rô-bốt hiện tại có bị sửa đổi và cải thiện một cách giả tạo hay không, nếu có, hãy liên hệ với nhân viên kỹ thuật của JAKA 2) Nếu chưa được sửa đổi nhưng vẫn báo lỗi, vui lòng xác nhận xem có thể giảm giới hạn tốc độ hoặc gia tốc hay không loại bỏ hiện tượng; nếu nó vẫn xảy ra, vui lòng liên hệ với Xuất thông tin chẩn đoán tương ứng và liên hệ với nhân viên dịch vụ kỹ thuật của JAKA.

## 0x040030 Tốc độ di chuyển của khớp năm vượt quá giới hạn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tốc độ di chuyển của khớp năm vượt quá giới hạn

### Reason
 Tốc độ di chuyển của khớp năm vượt quá giới hạn. Lỗi này thường được báo cáo khi lệnh do bộ điều khiển đưa ra vượt quá giới hạn tốc độ thực tế của khớp.

### Action
 1) Vui lòng xác nhận xem giới hạn tốc độ của rô-bốt hiện tại có bị sửa đổi và cải thiện một cách giả tạo hay không, nếu có, hãy liên hệ với nhân viên kỹ thuật của JAKA 2) Nếu chưa được sửa đổi nhưng vẫn báo lỗi, vui lòng xác nhận xem có thể giảm giới hạn tốc độ hoặc gia tốc hay không loại bỏ hiện tượng; nếu nó vẫn xảy ra, vui lòng liên hệ với Xuất thông tin chẩn đoán tương ứng và liên hệ với nhân viên dịch vụ kỹ thuật của JAKA.

## 0x050030 Tốc độ di chuyển của khớp 6 vượt quá giới hạn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tốc độ di chuyển của khớp 6 vượt quá giới hạn

### Reason
 Tốc độ di chuyển của khớp sáu vượt quá giới hạn. Lỗi này thường được báo cáo khi lệnh do bộ điều khiển đưa ra vượt quá giới hạn tốc độ thực tế của khớp.

### Action
 1) Vui lòng xác nhận xem giới hạn tốc độ của rô-bốt hiện tại có bị sửa đổi và cải thiện một cách giả tạo hay không, nếu có, hãy liên hệ với nhân viên kỹ thuật của JAKA 2) Nếu chưa được sửa đổi nhưng vẫn báo lỗi, vui lòng xác nhận xem có thể giảm giới hạn tốc độ hoặc gia tốc hay không loại bỏ hiện tượng; nếu nó vẫn xảy ra, vui lòng liên hệ với Xuất thông tin chẩn đoán tương ứng và liên hệ với nhân viên dịch vụ kỹ thuật của JAKA.

## 0x000031 Ngay khi khớp đạt đến giới hạn mềm dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Ngay khi khớp đạt đến giới hạn mềm dương

### Reason
 Khi khớp đạt đến giới hạn mềm dương, lỗi này thường xuất hiện khi giới hạn rô bốt được kích hoạt trong quá trình di chuyển của rô bốt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng của rô-bốt đã đạt đến giới hạn chưa. Nếu vậy, vui lòng sửa đổi đường dẫn công việc.

## 0x010031 Khớp 2 đạt giới hạn mềm dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 2 đạt giới hạn mềm dương

### Reason
 Khớp 2 đạt đến giới hạn mềm dương. Lỗi này thường xảy ra khi giới hạn rô bốt được kích hoạt trong quá trình di chuyển của rô bốt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng của rô-bốt đã đạt đến giới hạn chưa. Nếu vậy, vui lòng sửa đổi đường dẫn công việc.

## 0x020031 Khớp 3 đạt giới hạn mềm dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 3 đạt giới hạn mềm dương

### Reason
 Khớp 3 đạt đến giới hạn mềm dương. Lỗi này thường xảy ra khi giới hạn rô bốt được kích hoạt trong quá trình di chuyển của rô bốt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng của rô-bốt đã đạt đến giới hạn chưa. Nếu vậy, vui lòng sửa đổi đường dẫn công việc.

## 0x030031 Khớp 4 đạt giới hạn mềm dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 4 đạt giới hạn mềm dương

### Reason
 Khớp 4 đạt đến giới hạn mềm dương. Lỗi này thường xảy ra khi giới hạn rô bốt được kích hoạt trong quá trình di chuyển của rô bốt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng của rô-bốt đã đạt đến giới hạn chưa. Nếu vậy, vui lòng sửa đổi đường dẫn công việc.

## 0x040031 Khớp 5 đạt giới hạn mềm dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 5 đạt giới hạn mềm dương

### Reason
 Khớp 5 đạt đến giới hạn mềm dương. Lỗi này thường xảy ra khi giới hạn rô bốt được kích hoạt trong quá trình di chuyển của rô bốt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng của rô-bốt đã đạt đến giới hạn chưa. Nếu vậy, vui lòng sửa đổi đường dẫn công việc.

## 0x050031 Khớp 6 đạt giới hạn mềm dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 6 đạt giới hạn mềm dương

### Reason
 Khớp 6 đạt đến giới hạn mềm dương. Lỗi này thường xảy ra khi giới hạn rô bốt được kích hoạt trong quá trình di chuyển của rô bốt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng của rô-bốt đã đạt đến giới hạn chưa. Nếu vậy, vui lòng sửa đổi đường dẫn công việc.

## 0x000032 Ngay khi khớp đạt đến giới hạn mềm âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Ngay khi khớp đạt đến giới hạn mềm âm

### Reason
 Khi khớp đạt đến giới hạn mềm âm, lỗi này thường xuất hiện khi giới hạn rô bốt được kích hoạt trong quá trình di chuyển của rô bốt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng của rô-bốt đã đạt đến giới hạn chưa. Nếu vậy, vui lòng sửa đổi đường dẫn công việc.

## 0x010032 Khớp 2 đạt đến giới hạn mềm âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 2 đạt đến giới hạn mềm âm

### Reason
 Khớp 2 đạt đến giới hạn mềm âm. Lỗi này thường xảy ra khi giới hạn rô bốt được kích hoạt trong quá trình di chuyển của rô bốt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng của rô-bốt đã đạt đến giới hạn chưa. Nếu vậy, vui lòng sửa đổi đường dẫn công việc.

## 0x020032 Khớp 3 đạt đến giới hạn mềm âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 3 đạt đến giới hạn mềm âm

### Reason
 Khớp 3 đạt đến giới hạn mềm âm. Lỗi này thường xảy ra khi giới hạn rô bốt được kích hoạt trong quá trình di chuyển của rô bốt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng của rô-bốt đã đạt đến giới hạn chưa. Nếu vậy, vui lòng sửa đổi đường dẫn công việc.

## 0x030032 Khớp 4 đạt đến giới hạn mềm âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 4 đạt đến giới hạn mềm âm

### Reason
 Khớp 4 đạt đến giới hạn mềm âm. Lỗi này thường xảy ra khi giới hạn rô bốt được kích hoạt trong quá trình di chuyển của rô bốt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng của rô-bốt đã đạt đến giới hạn chưa. Nếu vậy, vui lòng sửa đổi đường dẫn công việc.

## 0x040032 Khớp 5 đạt đến giới hạn mềm âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 5 đạt đến giới hạn mềm âm

### Reason
 Khớp 5 đạt đến giới hạn mềm âm. Lỗi này thường xảy ra khi giới hạn rô bốt được kích hoạt trong quá trình di chuyển của rô bốt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng của rô-bốt đã đạt đến giới hạn chưa. Nếu vậy, vui lòng sửa đổi đường dẫn công việc.

## 0x050032 Khớp 6 đạt đến giới hạn mềm âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 6 đạt đến giới hạn mềm âm

### Reason
 Khớp 6 đã đạt đến giới hạn mềm âm. Lỗi này thường xảy ra khi giới hạn rô bốt được kích hoạt trong quá trình di chuyển của rô bốt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng của rô-bốt đã đạt đến giới hạn chưa. Nếu vậy, vui lòng sửa đổi đường dẫn công việc.

## 0x000033 Khớp 1 sắp đạt đến giới hạn mềm dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 1 sắp đạt đến giới hạn mềm dương

### Reason
 Khớp 1 đến gần giới hạn mềm tích cực và nếu tiếp tục chạy robot, giới hạn robot sẽ được kích hoạt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng với điểm mục tiêu robot có đạt đến giới hạn hay không. Nếu có, hãy sửa đổi đường dẫn làm việc.

## 0x010033 Khớp 2 sắp đạt đến giới hạn mềm dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 2 sắp đạt đến giới hạn mềm dương

### Reason
 Khớp 2 đến gần giới hạn mềm tích cực và nếu tiếp tục chạy robot, giới hạn robot sẽ được kích hoạt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng với điểm mục tiêu robot có đạt đến giới hạn hay không. Nếu có, hãy sửa đổi đường dẫn làm việc.

## 0x020033 Khớp 3 sắp đạt đến giới hạn mềm dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 3 sắp đạt đến giới hạn mềm dương

### Reason
 Khớp 3 đến gần giới hạn mềm tích cực và nếu tiếp tục chạy robot, giới hạn robot sẽ được kích hoạt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng với điểm mục tiêu robot có đạt đến giới hạn hay không. Nếu có, hãy sửa đổi đường dẫn làm việc.

## 0x030033 Khớp 4 sắp đạt đến giới hạn mềm dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 4 sắp đạt đến giới hạn mềm dương

### Reason
 Khớp 4 đến gần giới hạn mềm tích cực và nếu tiếp tục chạy robot, giới hạn robot sẽ được kích hoạt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng với điểm mục tiêu robot có đạt đến giới hạn hay không. Nếu có, hãy sửa đổi đường dẫn làm việc.

## 0x040033 Khớp 5 sắp đạt đến giới hạn mềm dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 5 sắp đạt đến giới hạn mềm dương

### Reason
 Khớp 5 đến gần giới hạn mềm tích cực và nếu tiếp tục chạy robot, giới hạn robot sẽ được kích hoạt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng với điểm mục tiêu robot có đạt đến giới hạn hay không. Nếu có, hãy sửa đổi đường dẫn làm việc.

## 0x050033 Khớp 6 sắp đạt đến giới hạn mềm dương 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 6 sắp đạt đến giới hạn mềm dương

### Reason
 Khớp 6 đến gần giới hạn mềm tích cực và nếu tiếp tục chạy robot, giới hạn robot sẽ được kích hoạt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng với điểm mục tiêu robot có đạt đến giới hạn hay không. Nếu có, hãy sửa đổi đường dẫn làm việc.

## 0x000034 Khớp 1 sắp đạt đến giới hạn mềm âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 1 sắp đạt đến giới hạn mềm âm

### Reason
 Khớp 1 gần giới hạn mềm âm và nếu tiếp tục chạy robot, giới hạn robot sẽ được kích hoạt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng với điểm mục tiêu robot có đạt đến giới hạn hay không. Nếu có, hãy sửa đổi đường dẫn làm việc.

## 0x010034 Khớp 2 sắp đạt đến giới hạn mềm âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 2 sắp đạt đến giới hạn mềm âm

### Reason
 Khớp 2 gần giới hạn mềm âm và nếu tiếp tục chạy robot, giới hạn robot sẽ được kích hoạt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng với điểm mục tiêu robot có đạt đến giới hạn hay không. Nếu có, hãy sửa đổi đường dẫn làm việc.

## 0x020034 Khớp 3 sắp đạt đến giới hạn mềm âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 3 sắp đạt đến giới hạn mềm âm

### Reason
 Khớp 3 gần giới hạn mềm âm và nếu tiếp tục chạy robot, giới hạn robot sẽ được kích hoạt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng với điểm mục tiêu robot có đạt đến giới hạn hay không. Nếu có, hãy sửa đổi đường dẫn làm việc.

## 0x030034 Khớp 4 sắp đạt đến giới hạn mềm âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 4 sắp đạt đến giới hạn mềm âm

### Reason
 Khớp 4 gần giới hạn mềm âm và nếu tiếp tục chạy robot, giới hạn robot sẽ được kích hoạt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng với điểm mục tiêu robot có đạt đến giới hạn hay không. Nếu có, hãy sửa đổi đường dẫn làm việc.

## 0x040034 Khớp 5 sắp đạt đến giới hạn mềm âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 5 sắp đạt đến giới hạn mềm âm

### Reason
 Khớp 5 gần giới hạn mềm âm và nếu tiếp tục chạy robot, giới hạn robot sẽ được kích hoạt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng với điểm mục tiêu robot có đạt đến giới hạn hay không. Nếu có, hãy sửa đổi đường dẫn làm việc.

## 0x050034 Khớp 6 sắp đạt đến giới hạn mềm âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 6 sắp đạt đến giới hạn mềm âm

### Reason
 Khớp 6 gần giới hạn mềm âm và nếu tiếp tục chạy robot, giới hạn robot sẽ được kích hoạt.

### Action
 Vui lòng kiểm tra xem giá trị góc khớp tương ứng với điểm mục tiêu robot có đạt đến giới hạn hay không. Nếu có, hãy sửa đổi đường dẫn làm việc.

## 0x0F0033 Điểm kỳ dị đạt đến điểm dừng bảo vệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điểm kỳ dị đạt đến điểm dừng bảo vệ

### Reason
 Robot sắp đạt đến một cấu hình kỳ dị trên đường chuyển động và không thể tiếp tục di chuyển trong không gian Cartesian. Lỗi này thường xuất hiện khi giải pháp nghịch đảo bất thường trong quá trình di chuyển. Khi có theo dõi hoặc bồi thường bên ngoài, chẳng hạn như kiểm soát tuân thủ hoặc theo dõi băng tải, lỗi này cũng có thể do đầu vào bên ngoài bất thường gây ra.

### Action
 1) Kiểm tra xem đường đi và tư thế hiện tại của rô-bốt có thể tiếp cận được hay không. Nếu không, hãy thay thế tư thế hoặc đường đi ban đầu để đến vị trí mục tiêu hoặc thay đổi tư thế của điểm mục tiêu; 2) Nếu nó hiện đang nằm dưới sự kiểm soát của lực lượng kiểm soát tuân thủ, vui lòng kiểm tra xem có bất kỳ ngoại lực bất thường nào để loại bỏ Tác động hay không; 3) Nếu băng tải hiện đang ở trạng thái theo dõi, vui lòng kiểm tra xem tốc độ băng tải và phản hồi của bộ mã hóa có bình thường không, dao động lớn sẽ gây ra sự cố này

## 0x0F0034 Đã phát hiện va chạm dừng bảo vệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Đã phát hiện va chạm dừng bảo vệ

### Reason
 Một điểm dừng bảo vệ va chạm đã được phát hiện. Câu hỏi này thường được nhắc khi hệ thống phát hiện va chạm.

### Action
 1) Kiểm tra xem có nhiễu xung quanh rô-bốt và có va chạm hay không 2) Kiểm tra xem số sê-ri và kiểu của rô-bốt có được xác định chính xác không 3) Kiểm tra xem góc lắp đặt và tải của rô-bốt có được đặt chính xác hay không.

## 0x0F0035 Dừng bảo vệ vượt quá giới hạn thái độ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Dừng bảo vệ vượt quá giới hạn thái độ

### Reason
 Một điểm dừng bảo vệ đã được phát hiện ngoài giới hạn thái độ. Vấn đề này thường được nhắc khi phần cuối của robot kích hoạt giới hạn công cụ.

### Action
 Vui lòng kiểm tra xem quỹ đạo chuyển động của rô-bốt hiện tại có nằm trong phạm vi cài đặt giới hạn của công cụ hay không. Hoặc cố gắng sửa đổi kích thước của phạm vi hoạt động trong giới hạn công cụ.

## 0x0F0036 ロボット ツール エンドの実際の位置と指令位置の間の偏差が、設定された偏差制限値を超えています。 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 ロボットの動きが指令位置からずれていないか確認してください。

### Reason
 Đầu dao vượt quá giới hạn độ lệch vị trí tối đa

### Action
 Đầu dao vượt quá giới hạn độ lệch vị trí tối đa

## 0x0F0037 TCP 速度制限値に問題がない場合は、ジョイントモーションコマンドの速度と加速度を下げてください 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tốc độ dòng cuối của công cụ vượt quá giới hạn tốc độ tối đa

### Reason
 Tốc độ dòng cuối của công cụ vượt quá giới hạn tốc độ tối đa

### Action
 Vận tốc tuyến tính ở điểm cuối của rô-bốt vượt quá giới hạn vận tốc tuyến tính tối đa đã đặt ở điểm cuối trong quá trình chuyển động của khớp

## 0x000035 Vị trí mục tiêu JOG vượt quá giới hạn mềm dương của khớp 1 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu JOG vượt quá giới hạn mềm dương của khớp 1

### Reason
 Điều khiển thủ công (JOG) robot di chuyển, khi điểm mục tiêu của chuyển động vượt quá giá trị giới hạn do khớp robot đặt, cảnh báo này sẽ xuất hiện

### Action
 1) Vui lòng kiểm tra xem giá trị giới hạn khớp đã được sửa đổi trong cài đặt an toàn của rô-bốt chưa. 2) Vui lòng kiểm tra xem điểm mục tiêu có hợp lý không, nếu không, vui lòng sửa đổi vị trí của điểm mục tiêu.

## 0x010035 Vị trí mục tiêu JOG vượt quá giới hạn mềm dương của khớp 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu JOG vượt quá giới hạn mềm dương của khớp 2

### Reason
 Điều khiển thủ công (JOG) robot di chuyển, khi điểm mục tiêu của chuyển động vượt quá giá trị giới hạn do khớp robot đặt, cảnh báo này sẽ xuất hiện

### Action
 1) Vui lòng kiểm tra xem giá trị giới hạn khớp đã được sửa đổi trong cài đặt an toàn của rô-bốt chưa. 2) Vui lòng kiểm tra xem điểm mục tiêu có hợp lý không, nếu không, vui lòng sửa đổi vị trí của điểm mục tiêu.

## 0x020035 Vị trí mục tiêu JOG vượt quá ba giới hạn mềm dương của khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu JOG vượt quá ba giới hạn mềm dương của khớp

### Reason
 Điều khiển thủ công (JOG) robot di chuyển, khi điểm mục tiêu của chuyển động vượt quá giá trị giới hạn do khớp robot đặt, cảnh báo này sẽ xuất hiện

### Action
 1) Vui lòng kiểm tra xem giá trị giới hạn khớp đã được sửa đổi trong cài đặt an toàn của rô-bốt chưa. 2) Vui lòng kiểm tra xem điểm mục tiêu có hợp lý không, nếu không, vui lòng sửa đổi vị trí của điểm mục tiêu.

## 0x030035 Vị trí mục tiêu JOG vượt quá giới hạn mềm dương của khớp bốn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu JOG vượt quá giới hạn mềm dương của khớp bốn

### Reason
 Điều khiển thủ công (JOG) robot di chuyển, khi điểm mục tiêu của chuyển động vượt quá giá trị giới hạn do khớp robot đặt, cảnh báo này sẽ xuất hiện

### Action
 1) Vui lòng kiểm tra xem giá trị giới hạn khớp đã được sửa đổi trong cài đặt an toàn của rô-bốt chưa. 2) Vui lòng kiểm tra xem điểm mục tiêu có hợp lý không, nếu không, vui lòng sửa đổi vị trí của điểm mục tiêu.

## 0x040035 Vị trí mục tiêu JOG vượt quá năm giới hạn mềm dương của khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu JOG vượt quá năm giới hạn mềm dương của khớp

### Reason
 Điều khiển thủ công (JOG) robot di chuyển, khi điểm mục tiêu của chuyển động vượt quá giá trị giới hạn do khớp robot đặt, cảnh báo này sẽ xuất hiện

### Action
 1) Vui lòng kiểm tra xem giá trị giới hạn khớp đã được sửa đổi trong cài đặt an toàn của rô-bốt chưa. 2) Vui lòng kiểm tra xem điểm mục tiêu có hợp lý không, nếu không, vui lòng sửa đổi vị trí của điểm mục tiêu.

## 0x050035 Vị trí mục tiêu JOG vượt quá giới hạn mềm dương sáu khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu JOG vượt quá giới hạn mềm dương sáu khớp

### Reason
 Điều khiển thủ công (JOG) robot di chuyển, khi điểm mục tiêu của chuyển động vượt quá giá trị giới hạn do khớp robot đặt, cảnh báo này sẽ xuất hiện

### Action
 1) Vui lòng kiểm tra xem giá trị giới hạn khớp đã được sửa đổi trong cài đặt an toàn của rô-bốt chưa. 2) Vui lòng kiểm tra xem điểm mục tiêu có hợp lý không, nếu không, vui lòng sửa đổi vị trí của điểm mục tiêu.

## 0x000036 Vị trí mục tiêu JOG vượt quá giới hạn mềm âm của khớp 1 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu JOG vượt quá giới hạn mềm âm của khớp 1

### Reason
 Điều khiển thủ công (JOG) robot di chuyển, khi điểm mục tiêu của chuyển động vượt quá giá trị giới hạn do khớp robot đặt, cảnh báo này sẽ xuất hiện

### Action
 1) Vui lòng kiểm tra xem giá trị giới hạn khớp đã được sửa đổi trong cài đặt an toàn của rô-bốt chưa. 2) Vui lòng kiểm tra xem điểm mục tiêu có hợp lý không, nếu không, vui lòng sửa đổi vị trí của điểm mục tiêu.

## 0x010036 Vị trí mục tiêu JOG vượt quá giới hạn mềm âm của khớp 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu JOG vượt quá giới hạn mềm âm của khớp 2

### Reason
 Điều khiển thủ công (JOG) robot di chuyển, khi điểm mục tiêu của chuyển động vượt quá giá trị giới hạn do khớp robot đặt, cảnh báo này sẽ xuất hiện

### Action
 1) Vui lòng kiểm tra xem giá trị giới hạn khớp đã được sửa đổi trong cài đặt an toàn của rô-bốt chưa. 2) Vui lòng kiểm tra xem điểm mục tiêu có hợp lý không, nếu không, vui lòng sửa đổi vị trí của điểm mục tiêu.

## 0x020036 Vị trí mục tiêu JOG vượt quá giới hạn mềm âm ba khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu JOG vượt quá giới hạn mềm âm ba khớp

### Reason
 Điều khiển thủ công (JOG) robot di chuyển, khi điểm mục tiêu của chuyển động vượt quá giá trị giới hạn do khớp robot đặt, cảnh báo này sẽ xuất hiện

### Action
 1) Vui lòng kiểm tra xem giá trị giới hạn khớp đã được sửa đổi trong cài đặt an toàn của rô-bốt chưa. 2) Vui lòng kiểm tra xem điểm mục tiêu có hợp lý không, nếu không, vui lòng sửa đổi vị trí của điểm mục tiêu.

## 0x030036 Vị trí mục tiêu JOG vượt quá giới hạn mềm âm bốn khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu JOG vượt quá giới hạn mềm âm bốn khớp

### Reason
 Điều khiển thủ công (JOG) robot di chuyển, khi điểm mục tiêu của chuyển động vượt quá giá trị giới hạn do khớp robot đặt, cảnh báo này sẽ xuất hiện

### Action
 1) Vui lòng kiểm tra xem giá trị giới hạn khớp đã được sửa đổi trong cài đặt an toàn của rô-bốt chưa. 2) Vui lòng kiểm tra xem điểm mục tiêu có hợp lý không, nếu không, vui lòng sửa đổi vị trí của điểm mục tiêu.

## 0x040036 Vị trí mục tiêu JOG vượt quá giới hạn mềm âm năm khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu JOG vượt quá giới hạn mềm âm năm khớp

### Reason
 Điều khiển thủ công (JOG) robot di chuyển, khi điểm mục tiêu của chuyển động vượt quá giá trị giới hạn do khớp robot đặt, cảnh báo này sẽ xuất hiện

### Action
 1) Vui lòng kiểm tra xem giá trị giới hạn khớp đã được sửa đổi trong cài đặt an toàn của rô-bốt chưa. 2) Vui lòng kiểm tra xem điểm mục tiêu có hợp lý không, nếu không, vui lòng sửa đổi vị trí của điểm mục tiêu.

## 0x050036 Vị trí mục tiêu JOG vượt quá giới hạn mềm âm sáu khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vị trí mục tiêu JOG vượt quá giới hạn mềm âm sáu khớp

### Reason
 Điều khiển thủ công (JOG) robot di chuyển, khi điểm mục tiêu của chuyển động vượt quá giá trị giới hạn do khớp robot đặt, cảnh báo này sẽ xuất hiện

### Action
 1) Vui lòng kiểm tra xem giá trị giới hạn khớp đã được sửa đổi trong cài đặt an toàn của rô-bốt chưa. 2) Vui lòng kiểm tra xem điểm mục tiêu có hợp lý không, nếu không, vui lòng sửa đổi vị trí của điểm mục tiêu.

## 0x000037 Gia tốc khớp một quá lớn. 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc khớp một quá lớn.

### Reason
 Khi điều khiển robot bằng tay (JOG) thực hiện chuyển động không gian Descartes, gây ra gia tốc quá lớn ở khớp một.

### Action
 1）Hãy di chuyển các khớp của robot ra xa vị trí gây lỗi, sau đó thử lại việc điều khiển không gian Descartes bằng cách sử dụng phím JOG.

## 0x010037 Gia tốc khớp hai quá lớn. 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc khớp hai quá lớn.

### Reason
 Khi điều khiển robot bằng tay (JOG) thực hiện chuyển động không gian Descartes, gây ra gia tốc quá lớn ở khớp hai.

### Action
 1）Hãy di chuyển các khớp của robot ra xa vị trí gây lỗi, sau đó thử lại việc điều khiển không gian Descartes bằng cách sử dụng phím JOG.

## 0x020037 Gia tốc khớp ba quá lớn. 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc khớp ba quá lớn.

### Reason
 Khi điều khiển robot bằng tay (JOG) thực hiện chuyển động không gian Descartes, gây ra gia tốc quá lớn ở khớp ba.

### Action
 1）Hãy di chuyển các khớp của robot ra xa vị trí gây lỗi, sau đó thử lại việc điều khiển không gian Descartes bằng cách sử dụng phím JOG.

## 0x030037 Gia tốc khớp bốn quá lớn. 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc khớp bốn quá lớn.

### Reason
 Khi điều khiển robot bằng tay (JOG) thực hiện chuyển động không gian Descartes, gây ra gia tốc quá lớn ở khớp bốn.

### Action
 1）Hãy di chuyển các khớp của robot ra xa vị trí gây lỗi, sau đó thử lại việc điều khiển không gian Descartes bằng cách sử dụng phím JOG.

## 0x040037 Gia tốc khớp năm quá lớn. 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc khớp năm quá lớn.

### Reason
 Khi điều khiển robot bằng tay (JOG) thực hiện chuyển động không gian Descartes, gây ra gia tốc quá lớn ở khớp năm.

### Action
 1）Hãy di chuyển các khớp của robot ra xa vị trí gây lỗi, sau đó thử lại việc điều khiển không gian Descartes bằng cách sử dụng phím JOG.

## 0x050037 Gia tốc khớp sáu quá lớn. 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc khớp sáu quá lớn.

### Reason
 Khi điều khiển robot bằng tay (JOG) thực hiện chuyển động không gian Descartes, gây ra gia tốc quá lớn ở khớp sáu.

### Action
 1）Hãy di chuyển các khớp của robot ra xa vị trí gây lỗi, sau đó thử lại việc điều khiển không gian Descartes bằng cách sử dụng phím JOG.

## 0x0F0049 Chế độ kéo không thể chuyển trong chế độ mô phỏng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Chế độ kéo không thể chuyển trong chế độ mô phỏng

### Reason
 Chế độ kéo không thể chuyển trong chế độ mô phỏng

### Action
 Kiểm tra chế độ chạy robot và thoát khỏi mô phỏng và có thể chuyển sang chế độ kéo

## 0x0F0040 Không thể vào chế độ kéo trên giới hạn mềm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể vào chế độ kéo trên giới hạn mềm

### Reason
 Không thể vào chế độ kéo trên giới hạn mềm.

### Action
 Kiểm tra trạng thái hiện tại của các khớp của robot, xem nó đã đạt đến giới hạn khớp chưa, nếu đã đạt đến giới hạn, nó không thể tiếp tục di chuyển về hướng vượt mà chỉ có thể di chuyển theo hướng không vượt, vui lòng chạy nhanh tràn khớp trở lại phạm vi giới hạn khớp trên trang hướng dẫn hoặc sửa đổi giới hạn trên trang cài đặt.

## 0x0F0041 Kéo vượt quá giới hạn mềm sẽ ngừng kéo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Kéo vượt quá giới hạn mềm sẽ ngừng kéo

### Reason
 Kéo vượt quá giới hạn mềm sẽ ngừng kéo. Lời nhắc này thường được nhắc khi lực kéo vượt quá giới hạn.

### Action
 Kiểm tra trạng thái hiện tại của các khớp rô bốt. Robot không thể tiếp tục di chuyển về hướng bị tràn mà chỉ có thể di chuyển theo hướng không bị tràn. Bạn có thể kéo phần bị tràn trở lại phạm vi giới hạn của khớp hoặc thoát khỏi chế độ kéo và sửa đổi phần mềm trên trang cài đặt Giới hạn, tăng phạm vi giới hạn mềm của khớp, nhưng phạm vi cài đặt của giới hạn mềm không được vượt quá giới hạn cứng.

## 0x0F0042 Cài đặt tham số điều khiển cưỡng bức không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không đặt được thông số tuân thủ

### Reason
 Không thể đặt thông số mềm trong điều kiện kiểm soát lực mở

### Action
 Vui lòng kiểm tra xem kiểm soát lực hiện có được bật hay không. Vui lòng kiểm tra xem chương trình có sử dụng lệnh cài đặt linh hoạt hay không và đảm bảo kiểm soát lực không hoạt động trước khi thực hiện lệnh.

## 0x000042 Khớp một sắp đạt đến giới hạn mềm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp một sắp đạt đến giới hạn mềm

### Reason
 Phần một sắp đạt đến giới hạn mềm.

### Action
 Kiểm tra trạng thái khớp hiện tại của robot, xem nó có sắp đạt đến giới hạn khớp không, nên di chuyển theo hướng không chạy quá mức, vui lòng chạy nhanh khớp sắp vượt quá phạm vi giới hạn trên trang hướng dẫn, hoặc sửa đổi giới hạn mềm trên trang cài đặt, tăng Phạm vi giới hạn mềm của khớp, nhưng phạm vi cài đặt của giới hạn mềm không thể vượt quá giới hạn cứng.

## 0x010042 Khớp 2 sắp đạt đến giới hạn mềm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 2 sắp đạt đến giới hạn mềm

### Reason
 Phần 2 sắp đạt đến giới hạn mềm.

### Action
 Kiểm tra trạng thái khớp hiện tại của robot, xem nó có sắp đạt đến giới hạn khớp không, nên di chuyển theo hướng không chạy quá mức, vui lòng chạy nhanh khớp sắp vượt quá phạm vi giới hạn trên trang hướng dẫn, hoặc sửa đổi giới hạn mềm trên trang cài đặt, tăng Phạm vi giới hạn mềm của khớp, nhưng phạm vi cài đặt của giới hạn mềm không thể vượt quá giới hạn cứng.

## 0x020042 Khớp 3 sắp đạt đến giới hạn mềm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 3 sắp đạt đến giới hạn mềm

### Reason
 Phần ba sắp đạt đến giới hạn mềm.

### Action
 Kiểm tra trạng thái khớp hiện tại của robot, xem nó có sắp đạt đến giới hạn khớp không, nên di chuyển theo hướng không chạy quá mức, vui lòng chạy nhanh khớp sắp vượt quá phạm vi giới hạn trên trang hướng dẫn, hoặc sửa đổi giới hạn mềm trên trang cài đặt, tăng Phạm vi giới hạn mềm của khớp, nhưng phạm vi cài đặt của giới hạn mềm không thể vượt quá giới hạn cứng.

## 0x030042 Khớp 4 sắp đạt đến giới hạn mềm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 4 sắp đạt đến giới hạn mềm

### Reason
 Phần bốn sắp đạt đến giới hạn mềm.

### Action
 Kiểm tra trạng thái khớp hiện tại của robot, xem nó có sắp đạt đến giới hạn khớp không, nên di chuyển theo hướng không chạy quá mức, vui lòng chạy nhanh khớp sắp vượt quá phạm vi giới hạn trên trang hướng dẫn, hoặc sửa đổi giới hạn mềm trên trang cài đặt, tăng Phạm vi giới hạn mềm của khớp, nhưng phạm vi cài đặt của giới hạn mềm không thể vượt quá giới hạn cứng.

## 0x040042 Khớp 5 sắp đạt đến giới hạn mềm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 5 sắp đạt đến giới hạn mềm

### Reason
 Khớp năm sắp đạt đến giới hạn mềm.

### Action
 Kiểm tra trạng thái khớp hiện tại của robot, xem nó có sắp đạt đến giới hạn khớp không, nên di chuyển theo hướng không chạy quá mức, vui lòng chạy nhanh khớp sắp vượt quá phạm vi giới hạn trên trang hướng dẫn, hoặc sửa đổi giới hạn mềm trên trang cài đặt, tăng Phạm vi giới hạn mềm của khớp, nhưng phạm vi cài đặt của giới hạn mềm không thể vượt quá giới hạn cứng.

## 0x050042 Khớp 6 sắp đạt đến giới hạn mềm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 6 sắp đạt đến giới hạn mềm

### Reason
 Khớp sáu sắp đạt đến giới hạn mềm.

### Action
 Kiểm tra trạng thái khớp hiện tại của robot, xem nó có sắp đạt đến giới hạn khớp không, nên di chuyển theo hướng không chạy quá mức, vui lòng chạy nhanh khớp sắp vượt quá phạm vi giới hạn trên trang hướng dẫn, hoặc sửa đổi giới hạn mềm trên trang cài đặt, tăng Phạm vi giới hạn mềm của khớp, nhưng phạm vi cài đặt của giới hạn mềm không thể vượt quá giới hạn cứng.

## 0x0F0043 Robot không được kích hoạt và không thể vào kéo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Robot không được kích hoạt và không thể vào kéo

### Reason
 Robot không thể được kéo nếu nó không được kích hoạt. Sự cố này thường được nhắc khi rô-bốt phát hiện lệnh kéo được kích hoạt khi rô-bốt không được bật.

### Action
 Vui lòng kiểm tra xem robot đã được bật nguồn và kích hoạt hay chưa

## 0x0F0044 Robot đang di chuyển và không thể vào đường kéo 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot đang di chuyển và không thể vào đường kéo

### Reason
 Robot đang di chuyển và không thể đi vào đường kéo. Chế độ kéo yêu cầu bật rô-bốt khi ở chế độ thủ công và ở trạng thái đứng yên.

### Action
 Nếu rô-bốt đang chạy một chương trình, trước tiên hãy dừng chương trình hiện tại, sau đó bắt đầu kéo. Nếu rô bốt đang di chuyển theo cách thủ công, hãy dừng lại và thử lại.

## 0x0F0045 Nếu mô-men xoắn khớp vượt quá giới hạn, nó không thể được kéo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Nếu mô-men xoắn khớp vượt quá giới hạn, nó không thể được kéo

### Reason
 Nếu mô-men xoắn khớp vượt quá giới hạn, nó không thể được kéo. Nói chung là do kéo quá nhanh hoặc va chạm quá nhạy.

### Action
 Giảm tốc độ kéo hoặc đặt mức độ va chạm cao hơn trong giao diện cài đặt.

## 0x0F0046 Nút kéo bị chặn và không thể vào kéo 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Nút kéo bị chặn và không thể vào kéo

### Reason
 Chức năng của nút kéo (MIỄN PHÍ) ở cuối robot bị vô hiệu hóa và không thể thực hiện thao tác kéo bằng nút kết thúc (MIỄN PHÍ).

### Action
 Vui lòng kiểm tra xem chức năng kéo và thả có bị tắt trong cài đặt phần cứng phần mềm và phần cứng phụ trợ giao tiếp hay không, nếu bị tắt, vui lòng bật chức năng này.

## 0x0F0047 Nút tạm dừng/tiếp tục chương trình bị chặn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Nút tạm dừng/tiếp tục chương trình bị chặn

### Reason
 Chức năng tạm dừng/tiếp tục chương trình của nút trên cùng ở phần cuối của robot bị vô hiệu hóa và không thể thực hiện hoạt động tạm dừng/tiếp tục chương trình bằng cách sử dụng nút trên cùng.

### Action
 Vui lòng kiểm tra xem chức năng tạm dừng/tiếp tục chương trình có bị tắt trong cài đặt phần cứng phần mềm và phần cứng phụ trợ giao tiếp hay không, nếu bị tắt, vui lòng bật chức năng này.

## 0x0F0048 Nút điểm bị chặn và không thể ghi điểm 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Nút điểm bị chặn và không thể ghi điểm

### Reason
 Chức năng nút hướng dẫn điểm cuối robot (POINT) bị tắt và không thể sử dụng nút kết thúc (POINT) cho các hoạt động hướng dẫn điểm.

### Action
 Vui lòng kiểm tra xem chức năng ghi điểm có bị tắt trong cài đặt phần cứng phần mềm và phần cứng phụ trợ giao tiếp hay không, nếu bị tắt, vui lòng bật chức năng này.

## 0x0F0050 Cảm biến mô-men xoắn chưa sẵn sàng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Cảm biến mô-men xoắn chưa sẵn sàng Không thể kích hoạt kiểm soát lực kéo

### Reason
 Cảm biến mô-men xoắn chưa sẵn sàng để bật điều khiển lực kéo điều khiển bằng công suất. Sự cố này thường xảy ra khi điều khiển tiếp nhận hoặc điều khiển tuân thủ chương trình vận hành được bật và phát hiện ra rằng trạng thái của cảm biến mô-men xoắn không hoạt động.

### Action
 Vui lòng kiểm tra xem cảm biến mô-men xoắn đã được bật chưa.

## 0x0F0051 Chế độ cảm biến mô-men xoắn không thể được chuyển đổi trong chế độ kiểm soát lực kéo 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Chế độ cảm biến mô-men xoắn không thể được chuyển đổi trong chế độ kiểm soát lực kéo

### Reason
 Sau khi bật lực kéo kiểm soát lực, không thể tắt trực tiếp cảm biến mô-men xoắn để tránh kết quả không mong muốn.

### Action
 Nếu bạn cần tắt cảm biến, vui lòng thoát khỏi lực kéo điều khiển lực trước, sau đó tắt cảm biến

## 0x0F0052 Lỗi cảm biến mô-men xoắn trong quá trình kiểm soát lực kéo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cảm biến mô-men xoắn trong quá trình kiểm soát lực kéo

### Reason
 Cảm biến mô-men xoắn bị lỗi trong quá trình kiểm soát lực kéo. Nguyên nhân có thể là do liên kết giao tiếp giữa bộ điều khiển và cảm biến mô-men xoắn bên ngoài bị ngắt kết nối.

### Action
 Vui lòng kiểm tra xem trạng thái giao tiếp của cảm biến mô-men xoắn có bình thường không, bao gồm đường kết nối phần cứng và cấu hình phần mềm.

## 0x0F0054 Không thể thực hiện thao tác một bước trong khi chương trình đang chạy 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể thực hiện thao tác một bước trong khi chương trình đang chạy

### Reason
 Thao tác một bước không thể thực hiện được khi chương trình đang chạy.

### Action
 Nếu bạn muốn sử dụng chức năng gỡ lỗi một bước, trước tiên bạn có thể dừng chạy chương trình hiện tại, sau đó thực hiện gỡ lỗi một bước.

## 0x0F0055 Không thể đặt độ nhạy va chạm trong khi kéo 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể đặt độ nhạy va chạm trong khi kéo

### Reason
 Không thể đặt độ nhạy va chạm trong khi kéo.

### Action
 Trước tiên hãy thoát khỏi chế độ kéo, sau đó đặt độ nhạy.

## 0x0F0056 Mô-đun IO mở rộng không chạy 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mô-đun IO mở rộng không chạy và không thể truy cập được

### Reason
 Mô-đun IO mở rộng không chạy và không thể truy cập được.

### Action
 Kiểm tra xem mô-đun IO mở rộng có đang chạy trên giao diện giám sát IO hay không.

## 0x0F0057 Không thể đặt chuyển tiếp động 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Dynamics feedforward không thể bật hoặc tắt khi robot đang chuyển động

### Reason
 Không thể bật hoặc tắt tính năng chuyển tiếp động khi robot đang di chuyển. Lỗi này sẽ chỉ xuất hiện khi sử dụng giao diện phát triển phụ.

### Action
 Trước tiên hãy dừng chuyển động của rô-bốt hiện tại, sau đó đặt nguồn cấp dữ liệu động về phía trước của rô-bốt.

## 0x0F0058 Giấy phép tính năng không được phát hiện 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Giấy phép tính năng không được phát hiện

### Reason
 Không phát hiện thấy giấy phép sử dụng tính năng nào. Việc kích hoạt một số chức năng cần phải có sự cho phép của phần mềm, nếu trong quá trình sử dụng chức năng mà phát hiện phần mềm không được cấp phép thì sẽ báo lỗi này.

### Action
 Liên hệ với nhân viên JAKA để mua giấy phép chức năng.

## 0x0F0059 Đặt lại dừng bảo vệ không thành công 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đặt lại dừng bảo vệ không thành công

### Reason
 Thiết lập lại dừng bảo vệ không thành công. Lỗi này thường được nhắc khi phát hiện thấy rằng đầu vào chức năng dừng bảo vệ vẫn ở trạng thái kích hoạt trong quá trình đặt lại hoạt động dừng bảo vệ.

### Action
 Vui lòng kiểm tra xem chức năng IO có kích hoạt dừng bảo vệ hay không, nếu vậy, vui lòng thoát khỏi chế độ dừng bảo vệ trước rồi đặt lại dừng bảo vệ.

## 0x0F0060 Không thể đặt ghi đè ở chế độ dừng bảo vệ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể đặt ghi đè ở chế độ dừng bảo vệ

### Reason
 Ghi đè không thể được đặt ở chế độ dừng bảo vệ.

### Action
 Trước tiên hãy thoát khỏi chế độ dừng bảo vệ, sau đó đặt hệ số nhân tốc độ của rô-bốt.

## 0x0F0061 Hiệu chuẩn hệ tọa độ người dùng không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hiệu chuẩn hệ tọa độ người dùng không thành công

### Reason
 Vị trí hiệu chuẩn được chọn không phù hợp dẫn đến hiệu chuẩn hệ tọa độ người dùng không thành công.

### Action
 Vui lòng thiết lập lại vị trí hướng dẫn thích hợp.

## 0x000061 Các khớp dừng bảo vệ ngay khi phát hiện va chạm 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Các khớp dừng bảo vệ ngay khi phát hiện va chạm

### Reason
 Các khớp dừng bảo vệ ngay khi phát hiện va chạm

### Action
 1) Kiểm tra môi trường tại chỗ để xem có xảy ra va chạm thực sự hay không. Nếu có, vui lòng tối ưu hóa quy trình vận hành; 2) Nếu xảy ra va chạm giả, vui lòng kiểm tra xem tải trọng và góc lắp đặt có được đặt chính xác hay không; 3) Điều khiển thủ công chuyển động của khớp báo lỗi và kiểm tra xem có kẹt bên trong không trong khớp tương ứng.

## 0x010061 Khớp dừng bảo vệ hai phát hiện va chạm 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Khớp dừng bảo vệ hai phát hiện va chạm

### Reason
 Khớp dừng bảo vệ hai phát hiện va chạm

### Action
 1) Kiểm tra môi trường tại chỗ để xem có xảy ra va chạm thực sự hay không. Nếu có, vui lòng tối ưu hóa quy trình vận hành; 2) Nếu xảy ra va chạm giả, vui lòng kiểm tra xem tải trọng và góc lắp đặt có được đặt chính xác hay không; 3) Điều khiển thủ công chuyển động của khớp báo lỗi và kiểm tra xem có kẹt bên trong không trong khớp tương ứng.

## 0x020061 Đã phát hiện ba va chạm liên kết dừng bảo vệ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đã phát hiện ba va chạm liên kết dừng bảo vệ

### Reason
 Đã phát hiện ba va chạm liên kết dừng bảo vệ

### Action
 1) Kiểm tra môi trường tại chỗ để xem có xảy ra va chạm thực sự hay không. Nếu có, vui lòng tối ưu hóa quy trình vận hành; 2) Nếu xảy ra va chạm giả, vui lòng kiểm tra xem tải trọng và góc lắp đặt có được đặt chính xác hay không; 3) Điều khiển thủ công chuyển động của khớp báo lỗi và kiểm tra xem có kẹt bên trong không trong khớp tương ứng.

## 0x030061 Phát hiện va chạm liên kết dừng bảo vệ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Phát hiện va chạm liên kết dừng bảo vệ

### Reason
 Phát hiện va chạm liên kết dừng bảo vệ

### Action
 1) Kiểm tra môi trường tại chỗ để xem có xảy ra va chạm thực sự hay không. Nếu có, vui lòng tối ưu hóa quy trình vận hành; 2) Nếu xảy ra va chạm giả, vui lòng kiểm tra xem tải trọng và góc lắp đặt có được đặt chính xác hay không; 3) Điều khiển thủ công chuyển động của khớp báo lỗi và kiểm tra xem có kẹt bên trong không trong khớp tương ứng.

## 0x040061 Đã phát hiện va chạm liên kết dừng bảo vệ năm 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đã phát hiện va chạm liên kết dừng bảo vệ năm

### Reason
 Đã phát hiện va chạm liên kết dừng bảo vệ năm

### Action
 1) Kiểm tra môi trường tại chỗ để xem có xảy ra va chạm thực sự hay không. Nếu có, vui lòng tối ưu hóa quy trình vận hành; 2) Nếu xảy ra va chạm giả, vui lòng kiểm tra xem tải trọng và góc lắp đặt có được đặt chính xác hay không; 3) Điều khiển thủ công chuyển động của khớp báo lỗi và kiểm tra xem có kẹt bên trong không trong khớp tương ứng.

## 0x050061 Đã phát hiện va chạm liên kết dừng bảo vệ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đã phát hiện va chạm liên kết dừng bảo vệ

### Reason
 Đã phát hiện va chạm liên kết dừng bảo vệ

### Action
 1) Kiểm tra môi trường tại chỗ để xem có xảy ra va chạm thực sự hay không. Nếu có, vui lòng tối ưu hóa quy trình vận hành; 2) Nếu xảy ra va chạm giả, vui lòng kiểm tra xem tải trọng và góc lắp đặt có được đặt chính xác hay không; 3) Điều khiển thủ công chuyển động của khớp báo lỗi và kiểm tra xem có kẹt bên trong không trong khớp tương ứng.

## 0x0F0062 Chế độ cảm biến mô-men xoắn kênh TIO RS485 không được bật 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Chế độ cảm biến mô-men xoắn kênh TIO RS485 không được bật

### Reason
 Chế độ cảm biến mô-men xoắn kênh TIO RS485 không được bật. Sự cố này thường được nhắc khi phát hiện cấu hình ghép kênh chân bất thường khi cảm biến mô-men xoắn TIO+ được bật.

### Action
 Khi loại cảm biến VI được chọn trong cài đặt cảm biến mô-men xoắn, việc bật cảm biến mô-men xoắn tại thời điểm này sẽ phát hiện xem có bất kỳ kênh nào của TIO được đặt chính xác ở chế độ cảm biến mô-men xoắn hay không. Nếu nó không được đặt chính xác, thông tin trên sẽ sai, vui lòng kiểm tra cấu hình có liên quan.

## 0x0F0063 Hỗ trợ tối đa một kênh TIO RS485 để kích hoạt chế độ cảm biến mô-men xoắn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Hỗ trợ tối đa một kênh TIO RS485 để kích hoạt chế độ cảm biến mô-men xoắn

### Reason
 Nó hỗ trợ tối đa một kênh TIO RS485 để được kích hoạt ở chế độ cảm biến mô-men xoắn. Do giới hạn băng thông của kênh CAN, tối đa chỉ một trong hai kênh RS485 của TIO+ có thể được sử dụng làm cảm biến mô-men xoắn.

### Action
 Bị giới hạn bởi băng thông giao tiếp CAN, hai kênh RS485 có thể tái sử dụng của TIO chỉ cho phép một trong số chúng được sử dụng làm chế độ cảm biến mô-men xoắn. Nếu bạn cần sửa đổi cấu hình kênh của cảm biến mô-men xoắn, vui lòng thay đổi chế độ của kênh RS485 hiện được đặt làm chế độ cảm biến mô-men xoắn trước khi tiếp tục.

## 0x0F0064 Không thể sửa đổi các tham số giao tiếp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Sửa đổi tham số giao tiếp không thành công Cảm biến mô-men xoắn sử dụng kênh này đang chạy

### Reason
 Sửa đổi các thông số giao tiếp TIO RS485 không thành công. Cảm biến mô-men xoắn sử dụng kênh này đang chạy.

### Action
 Cấm sửa đổi các thông số giao tiếp của nó khi cảm biến mô-men xoắn đang chạy. Vui lòng dừng chạy trước, sau đó sửa đổi các tham số giao tiếp.

## 0x0F0065 Định nghĩa semaphore không hợp lệ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Định nghĩa semaphore không hợp lệ

### Reason
 Định nghĩa semaphore không hợp lệ. Trạng thái của bộ kẹp Modbus ở cuối được truy vấn thông qua cơ chế semaphore và định nghĩa của semaphore cần đáp ứng các thông số kỹ thuật nhất định, bao gồm tên, mã chức năng, địa chỉ, v.v. Lỗi này sẽ được nhắc khi thông số định nghĩa không được đáp ứng.

### Action
 Vui lòng kiểm tra xem ID kênh TIO RS485 hiện tại có chính xác hay không, cài đặt chế độ kênh được chỉ định có phải là Modbus RTU hay không và mã chức năng có được hỗ trợ hay không (hiện chỉ hỗ trợ các mã chức năng 01, 02, 03 và 04).

## 0x0F0066 Semaphore vượt quá số lượng tối đa được hỗ trợ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Semaphore vượt quá số lượng tối đa được hỗ trợ (8)

### Reason
 Bị giới hạn bởi băng thông, có giới hạn về số lượng semaphores được hỗ trợ, hỗ trợ tối đa là 8 và sẽ báo lỗi nếu vượt quá con số này.

### Action
 Hiện tại, có thể xác định tối đa 8 semaphore, vui lòng xóa các định nghĩa semaphore không cần thiết.

## 0x0F0067 Semaphore được chỉ định không tồn tại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Semaphore được chỉ định không tồn tại

### Reason
 Semaphore được chỉ định không tồn tại. Lỗi này thường đề cập đến một semaphore không tồn tại trong chương trình công việc.

### Action
 Vui lòng kiểm tra các lệnh gọi chương trình liên quan đến semaphore và định nghĩa semaphore để xem liệu có bất kỳ tham chiếu nào đến một semaphore không xác định hay không.

## 0x0F0068 Không thể gửi lệnh TIO RS485 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể gửi lệnh TIO RS485 Hàng đợi lệnh đã đầy

### Reason
 Hàng đợi lệnh đã đầy và việc gửi lệnh TIO RS485 không thành công. Sự cố này thường xảy ra khi gọi làm mới semaphore với tần suất cao hoặc gửi hướng dẫn.

### Action
 Bị giới hạn bởi băng thông giao tiếp CAN, các lệnh cài đặt và truy vấn liên quan đến TIO+ sẽ được lưu vào bộ đệm. Nếu tốc độ làm mới của lớp ứng dụng cao hơn băng thông, thông tin này sẽ được nhắc. Vui lòng giảm tần suất gọi lệnh của chương trình hoặc ứng dụng đang điều hành.

## 0x0F0069 関連する TIO+ の通信設定が正しいかどうか、コントローラとロボット間の通信リンクが正常かどうかを確認してください。 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Nhận thời gian chờ phản hồi lệnh TIO RS485

### Reason
 Nhận thời gian chờ phản hồi lệnh TIO RS485

### Action
 Đã hết thời gian nhận phản hồi lệnh TIO RS485. Sự cố này thường xảy ra khi bộ điều khiển gửi lệnh RS 485 và chờ hết thời gian phản hồi.

## 0x0F0070 Ngoại lệ xác minh đọc tham số Robot DH 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Ngoại lệ xác minh đọc tham số Ontology DH

### Reason
 Lỗi CRC khi đọc thông số DH của máy chủ khi bật nguồn

### Action
 Vui lòng bật lại nguồn, nếu không khắc phục được hoặc xảy ra thường xuyên, vui lòng nâng cấp servo

## 0x0F0071 Việc đọc và xác minh các thông số động của robot là bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Ngoại lệ xác minh đọc thông số động học

### Reason
 Lỗi CRC khi đọc các thông số động của đầu servo khi bật nguồn

### Action
 Vui lòng bật lại nguồn, nếu không khắc phục được hoặc xảy ra thường xuyên, vui lòng nâng cấp servo

## 0x0F0072 Đọc thông số từ servo 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đọc thông số DH hoặc Kinetic từ servo không thể kích hoạt robot

### Reason
 Việc đọc các thông số DH hoặc Kinetic từ servo không thể kích hoạt rô-bốt. Sự cố này thường xảy ra khi bật nguồn rô-bốt ngay sau khi bật nguồn. Nếu các tham số DH được lưu trữ và kích hoạt trong servo tại thời điểm này, có khả năng cao là lỗi này sẽ được báo cáo.

### Action
 Sau khi bật nguồn, bộ điều khiển sẽ đọc các thông số DH từ servo, trong thời gian đó rô-bốt bị vô hiệu hóa. Nếu nó vẫn xuất hiện khi kích hoạt sau khi chờ đợi, vui lòng kiểm tra liên kết giao tiếp giữa bộ điều khiển và robot. Nếu lỗi vẫn tiếp diễn, hãy liên hệ với nhân viên kỹ thuật của JAKA.

## 0x0F0073 Đã đạt đến giới hạn động lượng của rô-bốt 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đã đạt đến giới hạn động lượng của rô-bốt

### Reason
 Đã đạt đến giới hạn động lượng của rô-bốt. Giao diện an toàn của rô bốt có thể đặt giới hạn động lượng của rô bốt và cảnh báo sẽ được kích hoạt khi đạt đến giới hạn.

### Action
 Lỗi này là lỗi cảnh báo và không cần xử lý, khi giá trị tuyệt đối xung lượng của robot lớn hơn ngưỡng do người dùng đặt, robot sẽ tự động giảm tốc.

## 0x0F0074 Đã đạt đến giới hạn tốc độ Robot TCP 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Đã đạt đến giới hạn tốc độ Robot TCP

### Reason
 Đã đạt đến giới hạn tốc độ Robot TCP. Giao diện an toàn của rô bốt có thể đặt giới hạn tốc độ TCP của rô bốt và cảnh báo sẽ được kích hoạt khi đạt đến giới hạn.

### Action
 Đây là cảnh báo bật lên thông báo, có thể bỏ qua. Bạn có thể kiểm tra xem giới hạn tốc độ TCP đã được triển khai trong bảo vệ va chạm trong giao diện cài đặt bảo mật hay chưa.

## 0x0F0075 調査中に安全面機能をオフにするか、コントローラ ロボットが安全面に向かって移動する可能性があります。 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Sắp vượt mặt phẳng an toàn

### Reason
 Sắp vượt mặt phẳng an toàn

### Action
 Nó sắp vượt quá mặt phẳng an toàn và robot chỉ có thể hoạt động trong phạm vi mặt phẳng an toàn đã đặt.

## 0x0F0076 Số phiên bản của tham số DH ở phía máy chủ không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Số phiên bản của tham số DH ở phía máy chủ không hợp lệ

### Reason
 Phiên bản thông số động học của robot không tương thích với bộ điều khiển

### Action
 Vui lòng nâng cấp servo hoặc hạ cấp bộ điều khiển

## 0x0F0077 Số phiên bản của các tham số động của máy chủ không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Số phiên bản của các tham số động của máy chủ không hợp lệ

### Reason
 Phiên bản tham số động lực học của robot không tương thích với bộ điều khiển

### Action
 Vui lòng nâng cấp servo hoặc hạ cấp bộ điều khiển

## 0x0F0078 Hoạt động kích hoạt servo quá thường xuyên 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hoạt động kích hoạt servo quá thường xuyên

### Reason
 Nhấp liên tục vào nút bật trên thân giao diện chính của Ứng dụng

### Action
 Sau khi nhấn nút bật trên giao diện chính của ứng dụng, hãy quan sát xem đèn thở ở cuối thân chính có chuyển từ xanh dương sang xanh lục sau 1 giây hay không. Thông thường, đèn chuyển từ xanh dương sang xanh lục và âm thanh phanh phát ra cùng với khớp "chụp"

## 0x0F0079 Không thể chuyển chế độ giả lập/máy thật, vui lòng tắt nguồn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể chuyển chế độ giả lập/máy thật, vui lòng tắt nguồn

### Reason
 Khi rô bốt được bật và bật, hãy sử dụng APP để chuyển đổi chức năng chế độ mô phỏng rô bốt/chế độ máy thật, gây ra lỗi

### Action
 Vui lòng sửa đổi chức năng chuyển đổi chế độ mô phỏng/máy thực sau khi tắt và bật rô-bốt.

## 0x0F007A Không hỗ trợ đặt IP của 2 cổng mạng trong cùng một phân đoạn mạng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không hỗ trợ đặt IP của 2 cổng mạng trong cùng một phân đoạn mạng

### Reason
 Địa chỉ IP của giao diện cấu hình mạng của giao diện cài đặt Ứng dụng được đặt thành phân đoạn mạng 10.5.5.X, xung đột với phân đoạn mạng của địa chỉ IP mạng riêng của bộ điều khiển.

### Action
 Cài đặt IP của giao diện cấu hình mạng của giao diện cài đặt Ứng dụng không được phép trong phân đoạn IP mạng 10.5.5.X. Địa chỉ IP đã sửa đổi của cổng mạng dưới cùng của bộ điều khiển tiêu chuẩn và cổng LAN2 của MinCab là địa chỉ IP tĩnh sau khi sửa đổi: Định dạng cài đặt tham chiếu cấu hình mạng: IP: 192.168.10.120 Mặt nạ phụ: 255.255.255.0 Cổng mặc định: 192.168.10.1

## 0x0F007B Giới hạn an toàn tư thế sắp bị vượt quá 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Giới hạn an toàn tư thế sắp bị vượt quá

### Reason
 Tiệm cận điểm kỳ dị của robot hoặc bán kính làm việc lớn nhất của loại robot này

### Action
 Điểm thái độ của rô bốt quay trở lại và di chuyển về vị trí gần bệ rô bốt

## 0x0F007C Không thể chuyển chế độ giả lập/máy thật 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể chuyển chế độ giả lập/máy thật

### Reason
 Máy ảo không hỗ trợ chức năng này

### Action
 Máy ảo không hỗ trợ chức năng này

## 0x0F0080 Không được phép chuyển đổi mô hình rô-bốt ở trạng thái bật nguồn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không được phép chuyển đổi mô hình rô-bốt ở trạng thái bật nguồn

### Reason
 Khi rô bốt được bật nguồn, hãy sử dụng chức năng chế độ mô phỏng rô bốt/chế độ máy thực của APP để chuyển đổi mô hình mô hình rô bốt, gây ra lỗi

### Action
 Sau khi tắt nguồn và bật rô-bốt, hãy thực hiện thao tác chuyển đổi mô hình chức năng mô phỏng/chế độ máy thực.

## 0x0F0081 Không được phép đặt lại mật khẩu trong quá trình di chuyển của rô-bốt 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không được phép đặt lại mật khẩu trong quá trình di chuyển của rô-bốt

### Reason
 Khi robot ở trạng thái chạy chương trình, thao tác sửa mật khẩu cấp quyền người dùng sẽ báo lỗi

### Action
 Vui lòng dừng trạng thái chuyển động của chương trình robot, sau đó thử sửa đổi mật khẩu quyền của người dùng.

## 0x0F0082 Vui lòng kiểm tra xem nút đặt lại mật khẩu có bình thường không 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Vui lòng kiểm tra xem nút đặt lại mật khẩu có bình thường không

### Reason
 Nút đặt lại mật khẩu không hoạt động bình thường.

### Action
 Vui lòng kiểm tra xem nút đặt lại mật khẩu có bình thường không hoặc liên hệ với nhân viên dịch vụ kỹ thuật.

## 0x0F0083 Giảm tốc chung không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Giảm tốc chung không thành công

### Reason
 Không thể tự động điều chỉnh tốc độ khớp cho chuyển động hiện tại dưới tốc độ giới hạn

### Action
 Vui lòng tăng tốc độ giới hạn trong cài đặt an toàn hoặc giảm tốc độ lệnh

## 0x0F0084  Băng tải tròn P1, P2, P3 Ba điểm đồng tuyến  
 Type: Error 

 IsShowConfirm：Yes  

### Description 
  Băng tải tròn P1, P2, P3 Ba điểm đồng tuyến 

### Reason
 

### Action
 

## 0x0F0085   
 Type: Error 

 IsShowConfirm：Yes  

### Description 
  

### Reason
  

### Action
  

## 0x0F0086 Nhận kết quả nhận dạng thất bại 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Nhận kết quả nhận dạng thất bại

### Reason
 Tài liệu nhận dạng có thể bị mất, hãy thử lại

### Action
 L'obtention des résultats d'identification a échoué

## 0x0F0087 Không thể tìm thấy kết quả tối ưu về thời gian 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể tìm thấy kết quả tối ưu về thời gian

### Reason
 Không thể tìm thấy kết quả tối ưu về thời gian

### Action
 Hãy thử lại hoặc sử dụng một công cụ lập kế hoạch khác để lập kế hoạch chuyển động sau khi bạn giảm tốc độ hướng dẫn

## 0x0F0100 Vượt quá giới hạn sức mạnh của robot 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vượt quá giới hạn sức mạnh của robot

### Reason
 Cài đặt năng lượng của giao diện cài đặt va chạm ứng dụng nhỏ hơn năng lượng mà chuyển động của rô-bốt yêu cầu

### Action
 Giao diện cài đặt xung đột ứng dụng tăng giá trị cài đặt nguồn, mô hình JAKA tải 3kg giá trị tham chiếu 1000, tải 5kg \ 7kg giá trị tham chiếu 1500, tải 12kg giá trị tham chiếu 2000, tải 18kg giá trị tham chiếu 2000

## 0x0F0101 Động lượng robot vượt quá 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Động lượng robot vượt quá

### Reason
 Cài đặt động lượng của giao diện cài đặt va chạm Ứng dụng nhỏ hơn động lượng mà chuyển động của rô-bốt yêu cầu

### Action
 Giao diện cài đặt va chạm ứng dụng tăng giá trị cài đặt động lượng. Giá trị tham chiếu tải 3kg của mô hình JAKA là 5, giá trị tham chiếu tải 5kg \ 7kg là 10, giá trị tham chiếu 12kg tải là 30 và giá trị tham chiếu 18kg tải là 50.

## 0x0F0102 Cảm biến cơ sở đã phát hiện va chạm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Cảm biến cơ sở đã phát hiện va chạm

### Reason
 Đối với rô-bốt kiểu SP, khi rô-bốt ở trạng thái kích hoạt, tín hiệu cảm biến cơ sở tăng bất thường và vượt quá ngưỡng đã đặt, dẫn đến cảnh báo.

### Action
 1. Kiểm tra xem máy có bị va chạm với thiết bị ngoại vi nào không. 2. Kiểm tra xem rô-bốt có được kéo bằng dây cáp trong quá trình di chuyển không. 3. Giảm gia tốc của rô bốt một cách hợp lý 4. Kiểm tra xem tải ở cuối rô bốt có đúng không 5. Cố gắng tăng mức độ va chạm của rô bốt

## 0x0F0103 Vượt quá lực cuối, phát hiện va chạm 1 trục 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vượt quá lực cuối, phát hiện va chạm 1 trục

### Reason
 Khi robot ở trạng thái chạy chương trình, dòng điện chung đột ngột tăng lên và vượt quá ngưỡng đã đặt và cảnh báo sẽ được nhắc.

### Action
 1. Kiểm tra xem máy có bị va chạm với thiết bị ngoại vi nào không. 2. Kiểm tra xem rô-bốt có được kéo bằng dây cáp trong quá trình di chuyển không. 3. Giảm gia tốc của rô bốt một cách hợp lý 4. Kiểm tra xem tải ở cuối rô bốt có đúng không 5. Cố gắng tăng mức độ va chạm của rô bốt

## 0x0F0104 Vượt quá lực cuối, phát hiện va chạm 2 trục 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vượt quá lực cuối, phát hiện va chạm 2 trục

### Reason
 Khi robot ở trạng thái chạy chương trình, dòng điện chung đột ngột tăng lên và vượt quá ngưỡng đã đặt và cảnh báo sẽ được nhắc.

### Action
 1. Kiểm tra xem máy có bị va chạm với thiết bị ngoại vi nào không. 2. Kiểm tra xem rô-bốt có được kéo bằng dây cáp trong quá trình di chuyển không. 3. Giảm gia tốc của rô bốt một cách hợp lý 4. Kiểm tra xem tải ở cuối rô bốt có đúng không 5. Cố gắng tăng mức độ va chạm của rô bốt

## 0x0F0105 Lực cuối vượt quá, phát hiện va chạm 3 trục 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lực cuối vượt quá, phát hiện va chạm 3 trục

### Reason
 Khi robot ở trạng thái chạy chương trình, dòng điện chung đột ngột tăng lên và vượt quá ngưỡng đã đặt và cảnh báo sẽ được nhắc.

### Action
 1. Kiểm tra xem máy có bị va chạm với thiết bị ngoại vi nào không. 2. Kiểm tra xem rô-bốt có được kéo bằng dây cáp trong quá trình di chuyển không. 3. Giảm gia tốc của rô bốt một cách hợp lý 4. Kiểm tra xem tải ở cuối rô bốt có đúng không 5. Cố gắng tăng mức độ va chạm của rô bốt

## 0x0F0106 Lực cuối vượt quá, phát hiện va chạm 4 trục 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lực cuối vượt quá, phát hiện va chạm 4 trục

### Reason
 Khi robot ở trạng thái chạy chương trình, dòng điện chung đột ngột tăng lên và vượt quá ngưỡng đã đặt và cảnh báo sẽ được nhắc.

### Action
 1. Kiểm tra xem máy có bị va chạm với thiết bị ngoại vi nào không. 2. Kiểm tra xem rô-bốt có được kéo bằng dây cáp trong quá trình di chuyển không. 3. Giảm gia tốc của rô bốt một cách hợp lý 4. Kiểm tra xem tải ở cuối rô bốt có đúng không 5. Cố gắng tăng mức độ va chạm của rô bốt

## 0x0F0107 Lực cuối vượt quá, phát hiện va chạm 5 trục 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lực cuối vượt quá, phát hiện va chạm 5 trục

### Reason
 Khi robot ở trạng thái chạy chương trình, dòng điện chung đột ngột tăng lên và vượt quá ngưỡng đã đặt và cảnh báo sẽ được nhắc.

### Action
 1. Kiểm tra xem máy có bị va chạm với thiết bị ngoại vi nào không. 2. Kiểm tra xem rô-bốt có được kéo bằng dây cáp trong quá trình di chuyển không. 3. Giảm gia tốc của rô bốt một cách hợp lý 4. Kiểm tra xem tải ở cuối rô bốt có đúng không 5. Cố gắng tăng mức độ va chạm của rô bốt

## 0x0F0108 Lực cuối vượt quá giới hạn và trục 6 phát hiện va chạm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lực cuối vượt quá giới hạn và trục 6 phát hiện va chạm

### Reason
 Khi robot ở trạng thái chạy chương trình, dòng điện chung đột ngột tăng lên và vượt quá ngưỡng đã đặt và cảnh báo sẽ được nhắc.

### Action
 1. Kiểm tra xem máy có bị va chạm với thiết bị ngoại vi nào không. 2. Kiểm tra xem rô-bốt có được kéo bằng dây cáp trong quá trình di chuyển không. 3. Giảm gia tốc của rô bốt một cách hợp lý 4. Kiểm tra xem tải ở cuối rô bốt có đúng không 5. Cố gắng tăng mức độ va chạm của rô bốt

## 0x0F0109 Lỗi cài đặt điểm mặt phẳng an toàn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Các điểm đặt mặt phẳng an toàn không được phép thẳng hàng hoặc trùng nhau

### Reason
 Cài đặt mặt phẳng an toàn yêu cầu ba điểm bề mặt và một điểm an toàn. Ba điểm này là tọa độ Descartes. Khi ba điểm bề mặt trùng nhau hoặc thẳng hàng, sẽ báo lỗi. Khi điểm an toàn nằm trên mặt phẳng an toàn, lỗi sẽ được báo báo cáo.

### Action
 Vui lòng kiểm tra xem các điểm an toàn trùng nhau hay thẳng hàng và các điểm an toàn có nằm trên mặt phẳng an toàn hay không.

## 0x0F0110  
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x0F0111  
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x0F0112  
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x0F0113  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x0F0114 Không thể nhận dạng trong trạng thái kích hoạt  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể nhận dạng trong trạng thái kích hoạt 

### Reason
 Không thể nhận dạng trong trạng thái kích hoạt 

### Action
  Vui lòng cho phép robot nhận dạng trước. 

## 0x0F0115 Nhận ip thất bại 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Nhận ip thất bại

### Reason
 Nhận ip thất bại

### Action
 Vui lòng kiểm tra trạng thái kết nối cổng ở phía dưới

## 0x0F0140 1.ロボットの端部が外部と衝突していないか確認してください。 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x0F0141 1.ロボットの端部が外部と衝突していないか確認してください。センサーが激突した後に不可逆的な損傷が発生する可能性がある 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x0F0116 AddOn vượt quá giới hạn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 số lượng AddOn hiện đang được cài đặt đã đạt đến giới hạn trên< 10 >

### Reason
 số lượng AddOn hiện đang được cài đặt đã đạt đến giới hạn trên< 10 >

### Action
 vui lòng xóa một số AdMan trước khi tiếp tục cài đặt

## 0x0F0117 Dịch vụ AddOn không tồn tại 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 tệp tương ứngservice trong hồ sơ AddOn không tồn tại

### Reason
 các tập tin tương ứng service trong hồ sơ AddOn không tồn tại

### Action
 Vui lòng kiểm tra xem các tệp tương ứng service trong gói cài đặt Adcon có tồn tại hay không

## 0x0F0118 AddOn không tìm thấy port 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tìm số cổng miễn phí AddOn không thành công

### Reason
 Tìm số cổng miễn phí AddOn không thành công

### Action
 Vui lòng lưu nhật ký chẩn đoán kịp thời, liên hệ với kỹ thuật viên để xử lý

## 0x0F0119 Lỗi gán số cổng AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi gán số cổng AddOn

### Reason
 Lỗi gán số cổng AddOn

### Action
 1. Vui lòng thử khởi động lại sau khi khởi động lại tủ điều khiển

## 0x0F011A Thao tác AddOn đang chạy không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể thực hiện hành động hiện tại trên AddOn đang chạy

### Reason
 Không thể thực hiện hành động hiện tại trên AddOn đang chạy

### Action
 Không thể thực hiện hành động hiện tại trên AddOn đang chạy

## 0x0F011B Không thể thực hiện thao tác AddOn đã dừng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể thực hiện hành động hiện tại trên AddOn đã dừng

### Reason
 Không thể thực hiện hành động hiện tại trên AddOn đã dừng

### Action
 Không thể thực hiện hành động hiện tại trên AddOn đã dừng

## 0x0F011C Hành động AddOn không rõ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hướng dẫn thao tác AddOn không được hỗ trợ

### Reason
 Bộ điều khiển có lệnh AddOn không được hỗ trợ

### Action
 Nâng cấp bộ điều khiển phiên bản tương ứng của AddOn Manager

## 0x0F011D Cổng AddOn hệ thống trùng lặp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Có dấu chân cổng trùng lặp trong AddOn hệ thống

### Reason
 Có dấu chân cổng trùng lặp trong AddOn hệ thống

### Action
 Thử khởi động lại bộ điều khiển xem có giải quyết được không
2. Vui lòng lưu nhật ký chẩn đoán kịp thời, liên hệ với kỹ thuật viên để xử lý

## 0x0F011E AddOn Lỗi không rõ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 AddOn Lỗi không rõ

### Reason
 AddOn Lỗi không rõ

### Action
 Vui lòng lưu nhật ký chẩn đoán kịp thời, liên hệ với kỹ thuật viên để xử lý

## 0x0F011F Không thể thao tác bổ trợ tích hợp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể thực hiện thao tác hiện tại trên AddOn hệ thống

### Reason
 Không thể thực hiện thao tác hiện tại trên AddOn hệ thống

### Action
 Không thể thực hiện thao tác hiện tại trên AddOn hệ thống

## 0x0F0120 Thao tác thất bại AddOn thất bại 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể thao tác AddOn mà phiên bản hiện tại không nhận ra

### Reason
 1.Phiên bản Addon quá thấp
2.Lỗi định dạng gói AddOn

### Action
 Vui lòng kiểm tra gói cài đặt AddOn sau khi cài đặt lại

## 0x0F0121 Tập tin cấu hình bên trong AddOn không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tập tin config.ini bên trong AddOn không hợp lệ

### Reason
 Tập tin config.ini bên trong AddOn không hợp lệ

### Action
 Vui lòng liên hệ với nhà phát triển AddOn và kiểm tra gói cài đặt AddOn để cài đặt lại

## 0x0F0122 Tập tin cấu hình bên trong AddOn không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 AddOn thiếu các mục cấu hình cần thiết

### Reason
 1.AddOn convention 2.0/3.0 Các cấu hình cần thiết [convention, description, version, type, languagetype, service, serviceenabled]
2.AddOn convention 1.0 Các cấu hình cần thiết [binname,description,version,enabled,type]

### Action
 Liên hệ với nhà phát triển AddOn để kiểm tra xem Addon thiếu mục cấu hình tương ứng

## 0x0F0123 Tập tin cấu hình bên trong AddOn không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cổng AddOn

### Reason
 Lỗi hiện tại không được sử dụng

### Action
 Lỗi hiện tại không được sử dụng

## 0x0F0124 Tập tin cấu hình bên trong AddOn không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Language không hợp lệ trong tập tin cấu hình AddOn

### Reason
 1.AddOn convention 3.0 hỗ trợ ngôn ngữ [python2, python, node-red]
2.AddOn convention 2.0 hỗ trợ ngôn ngữ [python2, python]
3.AddOn convention 1.0 hỗ trợ ngôn ngữ [python]

### Action
 Kiểm tra xem convention trong gói cài đặt AddOn có hỗ trợ languageType không

## 0x0F0125 Tập tin cấu hình bên trong AddOn không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi type trong hồ sơ AddOn

### Reason
 1. AddOn convention 2.0/3.0 hỗ trợ loại [1. hướng dẫn tùy chỉnh, 2. dịch vụ tùy chỉnh, 3. giao diện người dùng tùy chỉnh]

### Action
 Vui lòng liên hệ với nhà phát triển AddOn để kiểm tra xem gói cài đặt AddOn có hỗ trợ loại tương ứng không

## 0x0F0126 Tập tin cấu hình bên trong AddOn không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi serviceenabled trong tập tin cấu hình AddOn

### Reason
 ServiceEnabled là 0 hoặc 1.

### Action
 Vui lòng liên hệ với nhà phát triển AddOn để kiểm tra xem cấu hình gói cài đặt AddOn có đáp ứng các yêu cầu không

## 0x0F0127 Tập tin cấu hình bên trong AddOn không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi dịch vụ trong hồ sơ AddOn

### Reason
 1. Thiếu mục cấu hình dịch vụ trong cấu hình
2.Dịch vụ không rỗng và không vượt quá 50

### Action
 1. Kiểm tra cấu hình dịch vụ tồn tại trong hồ sơ
2. Kiểm tra độ dài số byte dịch vụ trong cấu hình

## 0x0F0128 Tập tin cấu hình không hợp lệ trong AddOn hoặc tên thư mục AddOn không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tập tin cấu hình không hợp lệ trong AddOn hoặc tên thư mục AddOn không hợp lệ

### Reason
 Name trong file cấu hình Addon không được để trống và không được vượt quá 40 byte
2. Tên thư mục trong AddOn không được vượt quá 40 byte

### Action
 Liên hệ với nhà phát triển AddOn để thay đổi tên trong cấu hình AddOn hoặc thay đổi tên thư mục AddOn

## 0x0F0129 Tập tin cấu hình bên trong AddOn không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Description

### Reason
 Mô tả trong tập tin cấu hình bên trong AddOn không được vượt quá 40 byte

### Action
 Vui lòng liên hệ với nhà phát triển AddOn để sửa đổi mô tả trong cấu hình AddOn

## 0x0F012A Tập tin cấu hình bên trong AddOn không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 URL không hợp lệ trong tập tin cấu hình bên trong AddOn

### Reason
 URL không đúng trong tập tin cấu hình bên trong AddOn

### Action
 Liên hệ với nhà phát triển AddOn để sửa đổi URL trong cấu hình AddOn

## 0x0F012B Tập tin cấu hình bên trong AddOn không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tập tin cấu hình bên trong AddOn không hợp lệ

### Reason
 Bộ điều khiển phiên bản hiện tại không hỗ trợ phiên bản convention tương ứng AddOn

### Action
 1. Vui lòng liên hệ với nhà phát triển AddOn để kiểm tra xem cấu hình convention có chính xác không

## 0x0F012C Lỗi cài đặt gói AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gói cài đặt AddOn bị hỏng hoặc không được nhận dạng

### Reason
 Gói cài đặt AddOn bị hỏng hoặc không được nhận dạng

### Action
 Cài đặt lại sau khi kiểm tra gói cài đặt AddOn

## 0x0F012D Lỗi cài đặt gói AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cài đặt gói AddOn

### Reason
 Lỗi cấu hình hệ thống hoặc mã tồn tại

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để thay đổi phiên bản điều khiển
2. Vui lòng liên hệ với kỹ thuật viên để thay thế hệ thống gương

## 0x0F012E Lỗi cài đặt gói AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Giải nén gói AddOn thất bại

### Reason
 Hiện tại chỉ hỗ trợ gói nén định dạng AddOn.tar.gz

### Action
 1. Kiểm tra định dạng gói chính xác
2. Kiểm tra xem gói có bị hỏng không

## 0x0F012F Lỗi cài đặt gói AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Đang cài đặt Addon khác

### Reason
 Đang cài đặt Addon khác

### Action
 1. Vui lòng chờ cài đặt hoàn tất
2. Thử lại sau khi khởi động lại tủ điều khiển

## 0x0F0130 Không có tác vụ cài đặt hiện tại 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không có tác vụ cài đặt hiện tại

### Reason
 Không có tác vụ cài đặt hiện tại

### Action
 Không có tác vụ cài đặt hiện tại

## 0x0F0131 Lỗi cài đặt gói AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi nén gói cài đặt AddOn

### Reason
 Hệ thống bận rộn bên trong và không thể đọc các tập tin tương ứng

### Action
 1. Vui lòng thử lại sau một thời gian
2. Liên hệ với kỹ thuật viên để xử lý

## 0x0F0132 Lỗi cài đặt gói AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Nén AddOn không thành công

### Reason
 Quá nhiều tập tin trong gói AddOn hoặc quá nhiều tập tin AddOn

### Action
 1. Vui lòng chờ một lúc để thử lại
2. Thay thế phiên bản điều khiển khác để xuất khẩu

## 0x0F0133 Lỗi cài đặt gói AddOn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Thiếu tập tin trong gói cài đặt AddOn

### Reason
 1.Xác nhận sự tồn tại của file config.ini
2.Xác nhận sự tồn tại của các tài liệu cần thiết khác
3. Xác định xem cấu trúc thư mục tệp có thể được xác định hay không

### Action
 Vui lòng liên hệ với nhà phát triển AddOn để thử lại sau khi xác nhận gói cài đặt là chính xác

## 0x0F0134 Chương trình đã được chia sẻ thành công. 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Chương trình đã được chia sẻ thành công.

### Reason
 

### Action
 From: 
To : 

## 0x0F0135 Chương trình không thể được chia sẻ. 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Chương trình không thể được chia sẻ.

### Reason
 From: 
To : 
Các nguyên nhân có thể gồm:
    1、Đường dẫn tệp chương trình đã chia sẻ không chính xác hoặc tệp chương trình không hoàn chỉnh.
    2、Các tệp chương trình đã chia sẻ đã tồn tại trong bộ điều khiển đích.
    3、Bộ điều khiển không thể truy cập vào địa chỉ IP của bộ điều khiển đích.

### Action
 1、Xác nhận rằng không có tệp chương trình cùng tên trên bộ điều khiển đích.
2、Đảm bảo bộ điều khiển hiện tại có thể truy cập vào bộ điều khiển đích một cách chính xác (máy chủ chứa ứng dụng có thể truy cập vào bộ điều khiển đích).
3、Kiểm tra xem các tệp chương trình đã chia sẻ có nội dung hoàn chỉnh không (có tồn tại các tệp tương ứng với các thư mục và thư mục con hay không).



## 0x0F1001 Kích hoạt thời gian chờ, vui lòng bật lại nguồn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Kích hoạt thời gian chờ, vui lòng bật lại nguồn

### Reason
 Khi rô-bốt đang trong quá trình được kích hoạt, nam châm điện chung không hoạt động và sẽ xảy ra lỗi

### Action
 1. Vui lòng thử tắt nguồn robot, sau đó bật nguồn và bật lại. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong nam châm điện của khớp rô-bốt hay không hoặc liên hệ với kỹ thuật viên.

## 0x0F1002 Đã hết thời gian truy vấn số phiên bản máy chủ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Đã hết thời gian truy vấn số phiên bản máy chủ

### Reason
 Khi có sự bất thường trong giao tiếp CAN giữa robot và tủ điều khiển điện, thông báo lỗi sẽ được nhắc

### Action
 1. Vui lòng thử tắt nguồn robot rồi bật lại. 2. Vui lòng kiểm tra xem có bất kỳ kết nối bất thường nào trong đường kết nối hạng nặng giữa robot và tủ điều khiển điện không.

## 0x001002 Kết nối chung-CAN là bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Kết nối chung-CAN là bất thường

### Reason
 Nối một bus CAN bất thường dẫn đến lỗi thu thập dữ liệu hoặc hết thời gian chờ dẫn đến lỗi nhắc nhở

### Action
 1. Tắt nguồn rô-bốt và kích hoạt nó, mở nắp khớp đã báo lỗi và kiểm tra xem có bất kỳ sự bất thường nào ở đường CAN bên trong khớp không. 2. Vui lòng liên hệ với nhân viên kỹ thuật để được tư vấn.

## 0x011002 Kết nối chung 2 CAN không bình thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Kết nối chung 2 CAN không bình thường

### Reason
 Khớp 2 CAN bus bất thường dẫn đến lỗi thu thập dữ liệu hoặc hết thời gian chờ dẫn đến lỗi nhắc nhở

### Action
 1. Tắt nguồn rô-bốt và kích hoạt nó, mở nắp khớp đã báo lỗi và kiểm tra xem có bất kỳ sự bất thường nào ở đường CAN bên trong khớp không. 2. Vui lòng liên hệ với nhân viên kỹ thuật để được tư vấn.

## 0x021002 Khớp nối 3 CAN không bình thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp nối 3 CAN không bình thường

### Reason
 Kết nối ba bus CAN bất thường dẫn đến lỗi thu thập dữ liệu hoặc hết thời gian chờ dẫn đến lỗi nhắc nhở

### Action
 1. Tắt nguồn rô-bốt và kích hoạt nó, mở nắp khớp đã báo lỗi và kiểm tra xem có bất kỳ sự bất thường nào ở đường CAN bên trong khớp không. 2. Vui lòng liên hệ với nhân viên kỹ thuật để được tư vấn.

## 0x031002 Kết nối chung 4 CAN không bình thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Kết nối chung 4 CAN không bình thường

### Reason
 Khớp nối 4 CAN bus bất thường dẫn đến lỗi thu thập dữ liệu hoặc hết thời gian chờ dẫn đến lỗi nhắc nhở

### Action
 1. Tắt nguồn rô-bốt và kích hoạt nó, mở nắp khớp đã báo lỗi và kiểm tra xem có bất kỳ sự bất thường nào ở đường CAN bên trong khớp không. 2. Vui lòng liên hệ với nhân viên kỹ thuật để được tư vấn.

## 0x041002 Khớp 5 Kết nối CAN không bình thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 5 Kết nối CAN không bình thường

### Reason
 Khớp nối 5 CAN bus bất thường dẫn đến lỗi thu thập dữ liệu hoặc hết thời gian chờ dẫn đến lỗi nhắc nhở

### Action
 1. Tắt nguồn rô-bốt và kích hoạt nó, mở nắp khớp đã báo lỗi và kiểm tra xem có bất kỳ sự bất thường nào ở đường CAN bên trong khớp không. 2. Vui lòng liên hệ với nhân viên kỹ thuật để được tư vấn.

## 0x051002 Khớp 6 Kết nối CAN không bình thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 6 Kết nối CAN không bình thường

### Reason
 Liên kết sáu bus CAN bất thường dẫn đến lỗi thu thập dữ liệu hoặc hết thời gian chờ dẫn đến lỗi nhắc nhở

### Action
 1. Tắt nguồn rô-bốt và kích hoạt nó, mở nắp khớp đã báo lỗi và kiểm tra xem có bất kỳ sự bất thường nào ở đường CAN bên trong khớp không. 2. Vui lòng liên hệ với nhân viên kỹ thuật để được tư vấn.

## 0x001003 thất bại ổ đĩa chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 thất bại ổ đĩa chung

### Reason
 Sau khi thân chính được bật nguồn, không có tín hiệu nào từ bảng điều khiển của khớp một để quay lại bộ điều khiển

### Action
 Trên giao diện giám sát ứng dụng, kiểm tra xem điện áp, dòng điện và nhiệt độ của khớp 1 theo dõi có hiển thị dữ liệu hay không. Khi thân chính được cấp nguồn bình thường, sẽ có màn hình số. Nếu không có màn hình số, vui lòng liên hệ với nhân viên kỹ thuật để được hỗ trợ.

## 0x011003 Ổ đĩa chung 2 thất bại 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Ổ đĩa chung 2 thất bại

### Reason
 Sau khi thân chính được bật nguồn, không có tín hiệu nào từ bảng truyền động thứ hai của khớp quay trở lại bộ điều khiển

### Action
 Trên giao diện giám sát Ứng dụng, kiểm tra xem có hiển thị dữ liệu cho điện áp giám sát, dòng điện và nhiệt độ của khớp 2. Khi thân chính được cấp nguồn bình thường, sẽ có màn hình số. Nếu không có màn hình số, vui lòng liên hệ với nhân viên kỹ thuật để được hỗ trợ.

## 0x021003 Thất bại chung ba ổ đĩa 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Thất bại chung ba ổ đĩa

### Reason
 Sau khi thân chính được bật nguồn, không có tín hiệu nào từ ba bảng điều khiển chung để quay lại bộ điều khiển

### Action
 Trên giao diện giám sát ứng dụng, kiểm tra xem điện áp, dòng điện và nhiệt độ của khớp 3 theo dõi có hiển thị dữ liệu hay không. Khi thân chính được cấp nguồn bình thường, sẽ có màn hình số. Nếu không có màn hình số, vui lòng liên hệ với nhân viên kỹ thuật để được hỗ trợ.

## 0x031003 Thất bại ổ đĩa chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Thất bại ổ đĩa chung

### Reason
 Sau khi thân chính được bật nguồn, bảng truyền động bốn khớp không có tín hiệu và quay trở lại bộ điều khiển

### Action
 Trên giao diện giám sát ứng dụng, kiểm tra xem điện áp, dòng điện và nhiệt độ của khớp 4 theo dõi có hiển thị dữ liệu hay không. Khi thân chính được cấp nguồn bình thường, sẽ có màn hình số. Nếu không có màn hình số, vui lòng liên hệ với nhân viên kỹ thuật để được hỗ trợ.

## 0x041003 Thất bại chung năm ổ đĩa 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Thất bại chung năm ổ đĩa

### Reason
 Sau khi thân chính được bật nguồn, không có tín hiệu nào từ bảng truyền động năm khớp để quay lại bộ điều khiển

### Action
 Trên giao diện giám sát Ứng dụng, kiểm tra xem điện áp, dòng điện và nhiệt độ của khớp 5 theo dõi có hiển thị dữ liệu hay không. Khi thân chính được cấp nguồn bình thường, sẽ có màn hình số. Nếu không có màn hình số, vui lòng liên hệ với nhân viên kỹ thuật để được hỗ trợ.

## 0x051003 Thất bại chung sáu ổ đĩa 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Thất bại chung sáu ổ đĩa

### Reason
 Sau khi thân chính được bật nguồn, không có tín hiệu nào từ bảng truyền động sáu khớp để quay lại bộ điều khiển

### Action
 Trên giao diện giám sát ứng dụng, kiểm tra xem điện áp, dòng điện và nhiệt độ của khớp 6 theo dõi có hiển thị dữ liệu hay không. Khi thân chính được cấp nguồn bình thường, có màn hình số. Nếu không có màn hình số, vui lòng liên hệ với nhân viên kỹ thuật để được hỗ trợ.

## 0x001004 Khớp 1 sau lỗi quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 1 sau lỗi quá lớn

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x011004 Khớp 2 lỗi sau quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 2 lỗi sau quá lớn

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x021004 Lỗi sau khớp 3 quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi sau khớp 3 quá lớn

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x031004 Lỗi sau khớp 4 quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi sau khớp 4 quá lớn

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x041004 Lỗi khớp 5 sau quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi khớp 5 sau quá lớn

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x051004 Lỗi sau khớp 6 quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi sau khớp 6 quá lớn

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0F2000 lỗi cú pháp tập tin lập trình 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 lỗi cú pháp tập tin lập trình

### Reason
 Có một tham số bất thường hoặc không xác định trong chương trình, khiến bộ điều khiển xử lý bất thường

### Action
 1. Vui lòng kiểm tra xem giá trị ban đầu của định nghĩa biến được sử dụng trong chương trình hiện tại có bất thường không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong dữ liệu tương tác của các biến kết nối truyền thông hay không.

## 0x0F2001 không có tập tin lập trình mở 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 không có tập tin lập trình mở

### Reason
 không có chương trình đang chạy nào được tải

### Action
 1. Đặt chương trình tải mặc định khi khởi động 2. Mở chương trình tương ứng trên giao diện lập trình và nhấp để chạy

## 0x0F2002 Không thể mở tập tin lập trình 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể mở tập tin lập trình

### Reason
 Các chương trình được tải theo mặc định khi khởi động bị thiếu

### Action
 1. Chọn lại bộ tải khởi động mặc định trong giao diện cài đặt. 2. Mở lại chương trình trong giao diện lập trình.

## 0x0F2003 Đóng tập tin lập trình không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Đóng tập tin lập trình không thành công

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0F2010 lỗi phân tích cú pháp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 lỗi phân tích cú pháp

### Reason
 Không khớp nếu, trong khi, kết thúc, ngắt, tiếp tục và các từ khóa khác. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra các tệp tập lệnh, đặc biệt là các chương trình con tập lệnh được viết thủ công, để tìm các từ khóa chưa khớp.

## 0x0F2011 PyCall() không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 PyCall() không thành công

### Reason
 Tập lệnh Python được gọi có lỗi cú pháp. Tệp lỗi là:  Số dòng của lỗi là: 

### Action
 Kiểm tra chương trình tập lệnh Python được gọi.

## 0x0F2012 xác nhận phân tích cú pháp không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 xác nhận phân tích cú pháp không thành công

### Reason
 Cài đặt thông số chuyển động không hợp lý. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra cài đặt tham số chuyển động

## 0x0F2013 Phân tích cú pháp không thành công, bán kính cung bằng 0 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Phân tích cú pháp không thành công, bán kính cung bằng 0

### Reason
 Có một ngoại lệ trong việc thiết lập điểm chuyển động vòng cung và lập kế hoạch quỹ đạo chuyển động của robot không thành công. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt điểm của rô bốt trong quá trình chuyển động tròn không và vui lòng định cấu hình lại thông tin điểm của chuyển động tròn

## 0x0F2014 phân tích cú pháp không thành công, lỗi cú pháp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 phân tích cú pháp không thành công, lỗi cú pháp

### Reason
 Có một ngoại lệ về định dạng dữ liệu trong lệnh tương tác biến (lệnh gán). Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Vui lòng kiểm tra xem có bất kỳ định dạng dữ liệu bất thường nào trong lệnh tương tác thay đổi (lệnh gán) liên quan đến chương trình hay không.

## 0x0F2015 Kết nối mạng không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Kết nối mạng không thành công

### Reason
 Không thể tạo ổ cắm. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra lệnh script tương ứng với lỗi theo thông báo lỗi

## 0x0F2016 kết nối thất bại 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 kết nối thất bại

### Reason
 Máy chủ ngắt kết nối trong quá trình giao tiếp Socket. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 1. Vui lòng kiểm tra xem máy chủ giao tiếp Socket đã đóng chưa. 2. Vui lòng thử thực hiện kiểm tra kết nối mạng (ping pass) với máy chủ truyền thông Socket. 3. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong kết nối cáp mạng giữa tủ điều khiển điện và máy chủ truyền thông Ổ cắm không. 4. Vui lòng kiểm tra xem tường lửa của máy chủ giao tiếp Socket đã được đóng chưa.

## 0x0F2017 Giao tiếp không thành công không kết nối với máy chủ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Giao tiếp không thành công không kết nối với máy chủ

### Reason
 Camera không được kết nối khi thực hiện lệnh đọc thông số tầm nhìn. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 1. Vui lòng kiểm tra xem máy chủ giao tiếp Socket đã đóng chưa. 2. Vui lòng thử thực hiện kiểm tra kết nối mạng (ping pass) với máy chủ truyền thông Socket. 3. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong kết nối cáp mạng giữa tủ điều khiển điện và máy chủ truyền thông Ổ cắm không. 4. Vui lòng kiểm tra xem tường lửa của máy chủ giao tiếp Socket đã được đóng chưa.

## 0x0F2018 2. コントローラとカメラ間の物理的な接続を確認する 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 TCP/IP không nhận được dữ liệu

### Reason
 TCP/IP không nhận được dữ liệu

### Action
 Bộ điều khiển không thể nhận dữ liệu từ máy ảnh. Tệp lỗi là:  Số dòng lỗi là: 

## 0x0F2019 TCP/IP không thể gửi dữ liệu 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 TCP/IP không thể gửi dữ liệu

### Reason
 Bộ điều khiển không thể gửi dữ liệu đến máy ảnh. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 1. Vui lòng kiểm tra xem máy chủ giao tiếp Socket đã đóng chưa. 2. Vui lòng thử thực hiện kiểm tra kết nối mạng (ping pass) với máy chủ truyền thông Socket. 3. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong kết nối cáp mạng giữa tủ điều khiển điện và máy chủ truyền thông Ổ cắm không. 4. Vui lòng kiểm tra xem tường lửa của máy chủ giao tiếp Socket đã được đóng chưa.

## 0x0F201A Không thể tải cấu hình tầm nhìn 2D 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể tải cấu hình tầm nhìn 2D

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0F201B Lỗi bên trong 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi bên trong

### Reason
 Lỗi nội bộ trong trình phân tích tập lệnh. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra các tình huống sau theo thông tin nhật ký lỗi: 1. Ngoại lệ tham số lệnh sscanf 2. Thao tác ghi vào các biến chỉ đọc

## 0x0F201C Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0F201D Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0F201E Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 Tham số mã sai. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Vui lòng kiểm tra xem các tham số mã có chính xác hay không trước khi tiến hành thao tác.

## 0x0F201F Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 Lệnh chuyển động không được công nhận. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra các tập lệnh, đặc biệt là các tập lệnh được viết thủ công, để tìm các lệnh Di chuyển

## 0x0F2020 Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 Các thông số của lệnh chuyển động bị sai. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra lệnh chuyển động tương ứng theo thông báo lỗi

## 0x0F2021 phương pháp không nên được gọi 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 phương pháp không nên được gọi

### Reason
 Lệnh mã G không được hỗ trợ được sử dụng trong chuyển động tròn. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Vui lòng kiểm tra xem chức năng io có luôn được kết nối hay không. Thông thường, nút chức năng bên ngoài có thể bị ngắt kết nối sau 1 giây.

## 0x0F2022 hoạt động không xác định 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 hoạt động không xác định

### Reason
 Một toán tử không được hỗ trợ đã được sử dụng trong tập lệnh. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra xem các ký hiệu khác với các toán tử sau có được sử dụng theo thông báo lỗi hay không: +, -, /, *, **, and, mod, or, xor,]

## 0x0F2023 định dạng dữ liệu sai 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 định dạng dữ liệu sai

### Reason
 Định dạng dữ liệu biến được xác định không chính xác. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Vui lòng kiểm tra định dạng dữ liệu của biến và tiến hành thao tác sau khi sửa đổi chính xác.

## 0x0F2024 tham số không xác định 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 tham số không xác định

### Reason
 1. Ổ cắm được xác định trong quá trình giao tiếp ổ cắm không phù hợp với ổ cắm được sử dụng trong quá trình gửi. 2. Tệp có lỗi không ở định dạng được chỉ định trong quá trình gán dữ liệu là:  và số dòng lỗi là: 

### Action
 1. Kiểm tra hướng dẫn giao tiếp trong chương trình. Đảm bảo rằng tất cả các cổng được sử dụng đều được mở 2. Kiểm tra hướng dẫn gán dữ liệu. Chuỗi cần thêm dấu ngoặc kép và mảng cần thêm dấu ngoặc vuông

## 0x0F2025 không mở được tệp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 không mở được tệp

### Reason
 1. Định dạng tệp không bình thường 2. Tên tệp sai được đặt quá dài:  Số dòng lỗi là: 

### Action
 1. Kiểm tra xem định dạng tệp có đúng không, nếu không, hãy đặt nó về đúng định dạng tệp. 2. Vui lòng kiểm tra xem tên tệp có dài quá không, nếu dài quá thì hãy đặt trong khoảng hợp lý

## 0x0F2026 Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 Tham số ini trong chương trình không được xác định trong tệp ini. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra xem tên tham số ini trong chương trình có đúng theo thông báo lỗi không

## 0x0F2027 Không đủ chỗ trong kho 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không đủ chỗ trong kho

### Reason
 Không đủ bộ nhớ, lỗi lưu trữ chuỗi. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 1. Khởi động lại chương trình vận hành của tủ điều khiển. 2. Nếu lỗi này xảy ra thường xuyên: 1) Xác nhận xem có rò rỉ bộ nhớ hay không, ghi lại sự cố và liên hệ với nhà sản xuất 2) Liên hệ với quản trị viên để tăng dung lượng vùng hoán đổi của hệ thống;

## 0x0F2028 loại trả lại sai 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 loại trả lại sai

### Reason
 Kiểu trả về của hàm không khớp. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Vui lòng kiểm tra loại định nghĩa biến và loại giá trị trả về để đảm bảo rằng loại giá trị trả về là chính xác trước khi tiếp tục.

## 0x0F2029 Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 Có quá nhiều lớp lệnh gọi chương trình con lồng nhau. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra xem các lệnh gọi chương trình con trong chương trình công việc có được lồng vào nhau theo từng lớp hay không (khuyến nghị rằng số lượng lớp lồng nhau nên nhỏ hơn 10)

## 0x0F202a không thể thêm tham số 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 không thể thêm tham số

### Reason
 Ngoại lệ gán tham số. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra theo thông báo lỗi: 1. Tên tham số có đúng không 2. Loại tham số có đúng không

## 0x0F202B lỗi do người dùng xác định 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 lỗi do người dùng xác định

### Reason
 Lỗi biến do người dùng xác định. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Vui lòng kiểm tra các tham số biến theo lỗi.

## 0x0F202C Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 Một số nguyên dự kiến sẽ được đọc (chẳng hạn như chỉ mục mảng), nhưng một tham số không phải số nguyên thực sự đã được đưa ra trong tập lệnh. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Có một cài đặt tham số giá trị bước bất thường trong hướng dẫn liên quan đến ký tự, vui lòng đặt giá trị bước hợp lý. (Giá trị bước chỉ có thể được đặt thành số nguyên)

## 0x0F202D Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 Một ký tự không xác định xuất hiện sau từ hoạt động. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra các từ khóa trong chương trình vận hành theo thông báo lỗi.

## 0x0F202E Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 Lỗi toán tử không xác định trong tệp:  Số dòng lỗi là: 

### Action
 Vui lòng kiểm tra cú pháp chương trình công việc: Biểu thức trong () không hỗ trợ riêng lẻ &, |, !, = phải là: &&, ||, !=, ==

## 0x0F202F Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 diễn đạt không đầy đủ. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra xem biểu thức tương ứng với dòng viết sai có được viết đúng không

## 0x0F2030 Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0F2031 Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0F2032 Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0F2033 lệnh quá dài 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 lệnh quá dài

### Reason
 Lệnh script và tham số quá dài. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Các tham số và hướng dẫn tập lệnh một dòng, tổng độ dài không được vượt quá 255 byte (phiên bản mới nhất không được vượt quá 512 byte)

## 0x0F2034 Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 Đã xảy ra lỗi khi lưu các biến hệ thống. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 1. Kiểm tra tệp biến hệ thống jaka_user.var 2. Kiểm tra tệp biến hệ thống, xem các chỉ mục biến có được lưu trữ theo thứ tự hay không;

## 0x0F2035 Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 Tham số chỉ thị không xác định. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra xem các tham số lệnh tập lệnh tại vị trí lỗi có chính xác không

## 0x0F2036 tập tin không mở 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 tập tin không mở

### Reason
 Không thể mở tệp hoặc thư mục. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 1. Đường dẫn tên thư mục hoặc tệp có đúng không 2. Quyền mở thư mục hoặc tệp có đúng không 3. Tệp có bị hỏng hay không.

## 0x0F2037 Định nghĩa trùng lặp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Định nghĩa trùng lặp

### Reason
 Lỗi trong ánh xạ từ khóa trình thông dịch tập lệnh. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Lỗi hệ thống nội bộ. Ghi nhật ký lỗi và quy trình vận hành và liên hệ với nhà sản xuất

## 0x0F2038 Lỗi cú pháp chương trình công việc 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cú pháp chương trình công việc

### Reason
 Lỗi trong ánh xạ từ khóa trình thông dịch tập lệnh. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Lỗi hệ thống nội bộ. Ghi nhật ký lỗi và quy trình vận hành và liên hệ với nhà sản xuất

## 0x0F2039 Không thể mở tệp nhiều lần 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể mở tệp nhiều lần

### Reason
 Không thể mở tập tin.
Tệp bị lỗi là: 
Số dòng lỗi là: 

### Action
 1. Đường dẫn tên thư mục hoặc tệp có đúng không;
2. Quyền mở thư mục, tệp có đúng không;
3. Tập tin có bị hỏng hay không.

## 0x0F203A Từ khóa 'kết thúc' chưa từng có 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Từ khóa 'kết thúc' chưa từng có trong tập lệnh

### Reason
 Từ khóa 'kết thúc' chưa từng có trong tập lệnh. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra từ khóa kết thúc trong chương trình kịch bản

## 0x0F203B Lỗi tạo thread 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá nhiều thread được tạo

### Reason
 Cho phép tối đa 5 luồng chạy đồng thời. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Chờ thread kết thúc hoặc hủy trước khi tạo

## 0x0F203C Lỗi tạo thread 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi tạo thread

### Reason
 Thread đang chạy Không cho phép tạo thread lặp lại. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Chờ thread kết thúc hoặc hủy trước khi tạo

## 0x0F203D Từ khóa chưa khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không khớp'elif'

### Reason
 'elif'được phát hiện nhưng không có'if' khớp với nó.Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra khối lệnh 'if' của chương trình script

## 0x0F203E Từ khóa chưa khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không khớp'else'

### Reason
 'else'được phát hiện nhưng không có'if' khớp với nó.Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra khối lệnh 'if' của chương trình script

## 0x0F203F Từ khóa chưa khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không khớp'break'

### Reason
 'break'được phát hiện nhưng không có'while' khớp với nó.Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra khối lệnh 'while' của chương trình script

## 0x0F2040 Từ khóa chưa khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không khớp'continue'

### Reason
 'continue'được phát hiện nhưng không có'while' khớp với nó.Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra khối lệnh 'while' của chương trình script

## 0x0F2041 Từ khóa chưa khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không khớp'return'

### Reason
 'return'được phát hiện nhưng không có'sub' khớp với nó.Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra khối lệnh sub của chương trình script

## 0x0F2042 Lỗi đọc tín hiệu TIO 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi đọc tín hiệu TIO

### Reason
 Lượng tín hiệu không xác định

### Action
 Vui lòng xác định trước khi truy cập hoặc kiểm tra chính tả chính xác

## 0x0F2043 Lỗi thêm biến hệ thống 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi thêm biến hệ thống

### Reason
 Chỉ mục biến nằm ngoài phạm vi

### Action
 Đảm bảo rằng chỉ số biến nằm trong khoảng từ 1 đến 5601

## 0x0F2050 invalid SOCKET id 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 invalid SOCKET id

### Reason
 

### Action
 

## 0x0F2051 Giải pháp nghịch đảo không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Giải pháp nghịch đảo không thành công

### Reason
 Đảo ngược không thành công. Sự cố này thường xảy ra khi tính toán giải pháp nghịch đảo không thành công trong chương trình công việc. Nó có thể liên quan đến góc khớp tham chiếu đã cho và tư thế kết thúc được giải quyết. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Chạy bộ thủ công kiểm tra xem chuyển động khớp tham chiếu có thể di chuyển đến điểm mục tiêu thông qua không gian Descartes hay không. Nếu có thể, hãy cân nhắc thay đổi tư thế rô-bốt hiện tại, đến điểm mục tiêu từ các đường dẫn hoặc tư thế khác hoặc thay đổi tư thế của điểm mục tiêu.

## 0x0F2052 Giải pháp đúng không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Giải pháp đúng không thành công

### Reason
 Giải pháp đúng không thành công. Sự cố này thường xảy ra khi tính toán giải pháp tích cực không thành công trong chương trình công việc. Nó có thể liên quan đến các tham số cài đặt giá trị góc khớp. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Chạy bộ thủ công kiểm tra xem chuyển động khớp tham chiếu có thể di chuyển đến điểm mục tiêu thông qua không gian Descartes hay không. Nếu có thể, hãy cân nhắc thay đổi tư thế rô-bốt hiện tại, đến điểm mục tiêu từ các đường dẫn hoặc tư thế khác hoặc thay đổi tư thế của điểm mục tiêu.

## 0x0F2053 Giao tiếp TCP/IP nhận dữ liệu sai 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Giao tiếp TCP/IP nhận dữ liệu sai

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem bộ điều khiển có phải là phiên bản sửa lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0F2054 Biến mảng không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Biến mảng không hợp lệ

### Reason
 Biến mảng không xác định hoặc biến không thuộc kiểu mảng. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Vui lòng kiểm tra xem việc sử dụng biến mảng tương ứng với dòng lỗi của chương trình script có đúng không

## 0x0F2055 Chỉ mục phần tử mảng không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Chỉ mục phần tử mảng không hợp lệ

### Reason
 Giá trị chỉ mục mảng nằm ngoài giới hạn của mảng. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Vui lòng kiểm tra xem chỉ số mảng tương ứng với dòng lỗi trong chương trình script có đúng không

## 0x0F2056 Hệ số nội suy tư thế không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hệ số nội suy tư thế không hợp lệ

### Reason
 Hệ số nội suy được truyền bởi lệnh nội suy tư thế không hợp lệ. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra các tham số lệnh nội suy vị trí cho các vị trí lỗi

## 0x0F2057 bộ kết thúc khối điều khiển không khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 bộ kết thúc khối điều khiển không khớp

### Reason
 Các khối điều khiển if và while thiếu các đầu cuối phù hợp. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra xem các khối câu lệnh if và while trong chương trình con tập lệnh tùy chỉnh có dấu kết thúc không

## 0x0F2058 Ký tự thoát không được hỗ trợ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Ký tự thoát không được hỗ trợ

### Reason
 Đầu vào ký tự dịch không được hỗ trợ đã được sử dụng trong tập lệnh. Hiện chỉ được hỗ trợ: \n, \r, \t, \", \', \\, tệp lỗi là:  số dòng lỗi là: 

### Action
 Các ký tự thoát hiện được hỗ trợ là: \\ dấu gạch chéo ngược \' dấu nháy đơn \" dấu nháy kép \n dòng mới \t tab ngang \r dấu xuống dòng

## 0x0F2059 Tham số khoảng cách cắt mảng không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tham số khoảng cách cắt mảng không hợp lệ

### Reason
 Sải bước không hợp lệ được sử dụng khi truy cập các điểm ảnh ba chiều ở chế độ lát cắt. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra chương trình script theo thông báo lỗi: Khi truy cập nhóm phần tử ở chế độ lát, kích thước bước phải là số nguyên lớn hơn 0

## 0x0F2060 Việc lồng mảng không được hỗ trợ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Việc lồng mảng không được hỗ trợ

### Reason
 Biến mảng không hỗ trợ mảng dưới dạng phần tử. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra chương trình script theo thông báo lỗi: Biến mảng không hỗ trợ mảng làm phần tử

## 0x0F2061 Mảng chuỗi không được hỗ trợ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mảng chuỗi không được hỗ trợ

### Reason
 Các chuỗi không được hỗ trợ trong các biến mảng. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Kiểm tra chương trình script theo thông báo lỗi: Các chuỗi không được hỗ trợ trong các biến mảng

## 0x0F2062 Quá nhiều tài nguyên ổ cắm được phân bổ nhưng không được giải phóng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá nhiều tài nguyên ổ cắm được phân bổ nhưng không được giải phóng

### Reason
 Quá nhiều ổ cắm đã được tạo và chưa đóng. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 1. Hãy đảm bảo rằng sau khi sử dụng lệnh open SOCKET, hãy đóng nó kịp thời khi không sử dụng; 2. Tránh mở SOCKET trong một câu lệnh lặp, nếu bạn mở nó, bạn phải đóng nó kịp thời trước khi tạo tiếp theo; 3. Nếu không đóng thì tối đa hiện tại cho phép tạo 256 SOCKET

## 0x0F2063 Ổ cắm nhận dữ liệu không hợp lệ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Ổ cắm nhận dữ liệu không hợp lệ

### Reason
 Ổ cắm nhận hướng dẫn thay đổi và định dạng của dữ liệu nhận được không chính xác. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Khi chương trình tập lệnh sử dụng ổ cắm để nhận biến và nhận hướng dẫn mảng, vui lòng đảm bảo rằng định dạng dữ liệu do máy chủ gửi được kết hợp với định dạng dữ liệu trả về được xác định trong hướng dẫn lập trình tập lệnh.

## 0x0F2064 Độ dài của mảng mà Socket nhận được không khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Độ dài của mảng mà Socket nhận được không khớp

### Reason
 Độ dài của mảng dữ liệu mà Socket nhận được không khớp với độ dài của mảng do máy chủ gửi. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Khi ổ cắm được sử dụng trong chương trình tập lệnh để nhận hướng dẫn mảng, vui lòng đảm bảo rằng độ dài của mảng do máy chủ trả về là chính xác

## 0x0F2065 Loại dữ liệu mà Socket nhận được không khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Loại dữ liệu mà Socket nhận được không khớp

### Reason
 Loại biến của dữ liệu mà Socket nhận được không khớp với loại dữ liệu do máy chủ gửi. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 Khi sử dụng ổ cắm để nhận biến và nhận lệnh mảng trong tập lệnh, vui lòng đảm bảo rằng loại dữ liệu do máy chủ gửi lại là chính xác.

## 0x0F2066 Thiết lập mức độ nhạy va chạm Chức năng không được bật 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Thiết lập mức độ nhạy va chạm Chức năng không được bật

### Reason
 Thiết lập mức độ nhạy va chạm Chức năng không được bật. Tệp lỗi là:  Số dòng lỗi là: 

### Action
 

## 0x0F2067 Không thể so sánh các loại dữ liệu khác nhau 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Các loại biến khác nhau không thể so sánh'<'>'<='

### Reason
 Các loại biến khác nhau không thể so sánh'<'>'<='
Tệp lỗi là: 
Số dòng lỗi là: 

### Action
 Vui lòng kiểm tra kiểu biến script tương ứng dựa trên thông báo lỗi.

## 0x0F3001 Không thể kết nối với thiết bị trực quan được chỉ định 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể kết nối với thiết bị trực quan được chỉ định

### Reason
 Bộ điều khiển không kết nối được với thiết bị tầm nhìn

### Action
 Kiểm tra xem hệ thống dây điện phần cứng trực quan có bình thường không và kiểm tra xem bộ dây điện âm và dương DC24V của nguồn điện trực quan có đúng không. Nếu vẫn không kết nối được vui lòng liên hệ kỹ sư nhà cung cấp để xử lý nhé!

## 0x0F3002 không có thiết bị tầm nhìn nào được kết nối 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 không có thiết bị tầm nhìn nào được kết nối

### Reason
 Bộ điều khiển không thể phát hiện tầm nhìn đang trực tuyến

### Action
 Kiểm tra xem hệ thống dây điện phần cứng trực quan có bình thường không và kiểm tra xem bộ dây điện âm và dương DC24V của nguồn điện trực quan có đúng không. Nếu vẫn không kết nối được vui lòng liên hệ kỹ sư nhà cung cấp để xử lý nhé!

## 0x0F4001 Lỗi máy trạng thái servo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi máy trạng thái servo

### Reason
 

### Action
 

## 0x0F4002 Nâng cấp chương trình cơ sở không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Nâng cấp chương trình cơ sở không thành công

### Reason
 Nâng cấp gói chương trình cơ sở rô-bốt không thành công

### Action
 Kiểm tra xem hậu tố của tên tệp chương trình cơ sở có định dạng .tar.gz và không có nội dung dư thừa Không tắt hoặc tắt ứng dụng trong quá trình nâng cấp giao diện Ứng dụng.

## 0x0F4003 Phần cứng hiện tại không hỗ trợ chức năng này 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Phần cứng hiện tại không hỗ trợ chức năng này

### Reason
 Thân robot hoặc bộ điều khiển không thể hỗ trợ các chức năng hiện đang được sử dụng

### Action
 Vui lòng chụp ảnh chức năng sử dụng báo lỗi bất thường và thông tin phiên bản của bộ điều khiển đang sử dụng, đồng thời liên hệ kỹ sư hỗ trợ kỹ thuật để xử lý.

## 0x0F4004 Robot tự chẩn đoán bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Có rủi ro tiềm ẩn trong khớp rô-bốt 

### Reason
 Tự kiểm tra tham số bên trong của khớp là bất thường. Lưu ý: Thông báo này là thông báo cảnh báo và không ảnh hưởng đến chương trình đang chạy.

### Action
 Vui lòng liên hệ với kỹ sư hỗ trợ kỹ thuật để kiểm tra các mối nối.

## 0x102230 Bus chung 1 quá dòng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Bus chung 1 quá dòng

### Reason
 Phản hồi động cơ hiện tại vượt quá ngưỡng

### Action
 Vui lòng chụp ảnh chức năng sử dụng báo lỗi bất thường và thông tin phiên bản của bộ điều khiển đang sử dụng, đồng thời lưu nhật ký chẩn đoán lỗi và liên hệ kỹ sư hỗ trợ kỹ thuật để xử lý.

## 0x112230 Bus chung 2 quá dòng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Bus chung 2 quá dòng

### Reason
 Phản hồi động cơ hiện tại vượt quá ngưỡng

### Action
 Vui lòng chụp ảnh chức năng sử dụng báo lỗi bất thường và thông tin phiên bản của bộ điều khiển đang sử dụng, đồng thời lưu nhật ký chẩn đoán lỗi và liên hệ kỹ sư hỗ trợ kỹ thuật để xử lý.

## 0x122230 Quá dòng thanh cái nối 3 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá dòng thanh cái nối 3

### Reason
 Phản hồi động cơ hiện tại vượt quá ngưỡng

### Action
 Vui lòng chụp ảnh chức năng sử dụng báo lỗi bất thường và thông tin phiên bản của bộ điều khiển đang sử dụng, đồng thời lưu nhật ký chẩn đoán lỗi và liên hệ kỹ sư hỗ trợ kỹ thuật để xử lý.

## 0x132230 Bus chung 4 quá dòng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Bus chung 4 quá dòng

### Reason
 Phản hồi động cơ hiện tại vượt quá ngưỡng

### Action
 Vui lòng chụp ảnh chức năng sử dụng báo lỗi bất thường và thông tin phiên bản của bộ điều khiển đang sử dụng, đồng thời lưu nhật ký chẩn đoán lỗi và liên hệ kỹ sư hỗ trợ kỹ thuật để xử lý.

## 0x142230 Quá dòng thanh cái nối 5 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá dòng thanh cái nối 5

### Reason
 Phản hồi động cơ hiện tại vượt quá ngưỡng

### Action
 Vui lòng chụp ảnh chức năng sử dụng báo lỗi bất thường và thông tin phiên bản của bộ điều khiển đang sử dụng, đồng thời lưu nhật ký chẩn đoán lỗi và liên hệ kỹ sư hỗ trợ kỹ thuật để xử lý.

## 0x152230 Quá dòng thanh cái nối 6 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá dòng thanh cái nối 6

### Reason
 Phản hồi động cơ hiện tại vượt quá ngưỡng

### Action
 Vui lòng chụp ảnh chức năng sử dụng báo lỗi bất thường và thông tin phiên bản của bộ điều khiển đang sử dụng, đồng thời lưu nhật ký chẩn đoán lỗi và liên hệ kỹ sư hỗ trợ kỹ thuật để xử lý.

## 0x102320 Khớp 1 đầu ra quá dòng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 1 đầu ra quá dòng

### Reason
 Dòng điện của động cơ UVW được phát hiện, vượt quá ngưỡng quá dòng của bảng điều khiển phần cứng

### Action
 1. Vui lòng giảm tải cho robot trước khi sử dụng.
2. Vui lòng giảm tốc độ hoặc gia tốc của robot. để sử dụng;
3. Bảng điều khiển chung hoặc bộ giảm tốc của rô-bốt không bình thường, vui lòng liên hệ với nhân viên hỗ trợ kỹ thuật;
4. Giao tiếp bất thường: Vui lòng thay thế dây kết nối nặng hoặc tủ điều khiển điện, hoặc liên hệ với nhân viên hỗ trợ kỹ thuật;

## 0x112320 Khớp 2 đầu ra quá dòng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 2 đầu ra quá dòng

### Reason
 Dòng điện của động cơ UVW được phát hiện, vượt quá ngưỡng quá dòng của bảng điều khiển phần cứng

### Action
 1. Vui lòng giảm tải cho robot trước khi sử dụng.
2. Vui lòng giảm tốc độ hoặc gia tốc của robot. để sử dụng;
3. Bảng điều khiển chung hoặc bộ giảm tốc của rô-bốt không bình thường, vui lòng liên hệ với nhân viên hỗ trợ kỹ thuật;
4. Giao tiếp bất thường: Vui lòng thay thế dây kết nối nặng hoặc tủ điều khiển điện, hoặc liên hệ với nhân viên hỗ trợ kỹ thuật;

## 0x122320 Khớp ba đầu ra quá dòng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp ba đầu ra quá dòng

### Reason
 Dòng điện của động cơ UVW được phát hiện, vượt quá ngưỡng quá dòng của bảng điều khiển phần cứng

### Action
 1. Vui lòng giảm tải cho robot trước khi sử dụng.
2. Vui lòng giảm tốc độ hoặc gia tốc của robot. để sử dụng;
3. Bảng điều khiển chung hoặc bộ giảm tốc của rô-bốt không bình thường, vui lòng liên hệ với nhân viên hỗ trợ kỹ thuật;
4. Giao tiếp bất thường: Vui lòng thay thế dây kết nối nặng hoặc tủ điều khiển điện, hoặc liên hệ với nhân viên hỗ trợ kỹ thuật;

## 0x132320 Khớp bốn đầu ra quá dòng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp bốn đầu ra quá dòng

### Reason
 Dòng điện của động cơ UVW được phát hiện, vượt quá ngưỡng quá dòng của bảng điều khiển phần cứng

### Action
 1. Vui lòng giảm tải cho robot trước khi sử dụng.
2. Vui lòng giảm tốc độ hoặc gia tốc của robot. để sử dụng;
3. Bảng điều khiển chung hoặc bộ giảm tốc của rô-bốt không bình thường, vui lòng liên hệ với nhân viên hỗ trợ kỹ thuật;
4. Giao tiếp bất thường: Vui lòng thay thế dây kết nối nặng hoặc tủ điều khiển điện, hoặc liên hệ với nhân viên hỗ trợ kỹ thuật;

## 0x142320 Khớp năm đầu ra quá dòng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp năm đầu ra quá dòng

### Reason
 Dòng điện của động cơ UVW được phát hiện, vượt quá ngưỡng quá dòng của bảng điều khiển phần cứng

### Action
 1. Vui lòng giảm tải cho robot trước khi sử dụng.
2. Vui lòng giảm tốc độ hoặc gia tốc của robot. để sử dụng;
3. Bảng điều khiển chung hoặc bộ giảm tốc của rô-bốt không bình thường, vui lòng liên hệ với nhân viên hỗ trợ kỹ thuật;
4. Giao tiếp bất thường: Vui lòng thay thế dây kết nối nặng hoặc tủ điều khiển điện, hoặc liên hệ với nhân viên hỗ trợ kỹ thuật;

## 0x152320 Khớp sáu đầu ra quá dòng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp sáu đầu ra quá dòng

### Reason
 Dòng điện của động cơ UVW được phát hiện, vượt quá ngưỡng quá dòng của bảng điều khiển phần cứng

### Action
 1. Vui lòng giảm tải cho robot trước khi sử dụng.
2. Vui lòng giảm tốc độ hoặc gia tốc của robot. để sử dụng;
3. Bảng điều khiển chung hoặc bộ giảm tốc của rô-bốt không bình thường, vui lòng liên hệ với nhân viên hỗ trợ kỹ thuật;
4. Giao tiếp bất thường: Vui lòng thay thế dây kết nối nặng hoặc tủ điều khiển điện, hoặc liên hệ với nhân viên hỗ trợ kỹ thuật;

## 0x102321 Quá dòng tự học chung một 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá dòng tự học chung một

### Reason
 Trong quá trình kích hoạt khớp, một dòng điện lớn được phát ra, nhưng không phát hiện thấy vòng quay của động cơ

### Action
 1. Vui lòng kích hoạt rô-bốt, nhả khớp nam châm điện theo cách thủ công và kiểm tra xem có thể đẩy khớp báo động hay không. 2. Sau khi tắt nguồn thân chính của rô-bốt, hãy tháo nắp sau, kiểm tra xem cáp có tiếp xúc bất thường không hoặc liên hệ với nhân viên hỗ trợ kỹ thuật.

## 0x112321 Khớp 2 quá dòng tự học 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 2 quá dòng tự học

### Reason
 Trong quá trình kích hoạt khớp, một dòng điện lớn được phát ra, nhưng không phát hiện thấy vòng quay của động cơ

### Action
 1. Vui lòng kích hoạt rô-bốt, nhả khớp nam châm điện theo cách thủ công và kiểm tra xem có thể đẩy khớp báo động hay không. 2. Sau khi tắt nguồn thân chính của rô-bốt, hãy tháo nắp sau, kiểm tra xem cáp có tiếp xúc bất thường không hoặc liên hệ với nhân viên hỗ trợ kỹ thuật.

## 0x122321 Phần ba quá dòng tự học 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Phần ba quá dòng tự học

### Reason
 Trong quá trình kích hoạt khớp, một dòng điện lớn được phát ra, nhưng không phát hiện thấy vòng quay của động cơ

### Action
 1. Vui lòng kích hoạt rô-bốt, nhả khớp nam châm điện theo cách thủ công và kiểm tra xem có thể đẩy khớp báo động hay không. 2. Sau khi tắt nguồn thân chính của rô-bốt, hãy tháo nắp sau, kiểm tra xem cáp có tiếp xúc bất thường không hoặc liên hệ với nhân viên hỗ trợ kỹ thuật.

## 0x132321 Khớp bốn quá dòng tự học 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp bốn quá dòng tự học

### Reason
 Trong quá trình kích hoạt khớp, một dòng điện lớn được phát ra, nhưng không phát hiện thấy vòng quay của động cơ

### Action
 1. Vui lòng kích hoạt rô-bốt, nhả khớp nam châm điện theo cách thủ công và kiểm tra xem có thể đẩy khớp báo động hay không. 2. Sau khi tắt nguồn thân chính của rô-bốt, hãy tháo nắp sau, kiểm tra xem cáp có tiếp xúc bất thường không hoặc liên hệ với nhân viên hỗ trợ kỹ thuật.

## 0x142321 Khớp năm quá dòng tự học 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp năm quá dòng tự học

### Reason
 Trong quá trình kích hoạt khớp, một dòng điện lớn được phát ra, nhưng không phát hiện thấy vòng quay của động cơ

### Action
 1. Vui lòng kích hoạt rô-bốt, nhả khớp nam châm điện theo cách thủ công và kiểm tra xem có thể đẩy khớp báo động hay không. 2. Sau khi tắt nguồn thân chính của rô-bốt, hãy tháo nắp sau, kiểm tra xem cáp có tiếp xúc bất thường không hoặc liên hệ với nhân viên hỗ trợ kỹ thuật.

## 0x152321 Khớp sáu quá dòng tự học 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp sáu quá dòng tự học

### Reason
 Trong quá trình kích hoạt khớp, một dòng điện lớn được phát ra, nhưng không phát hiện thấy vòng quay của động cơ

### Action
 1. Vui lòng kích hoạt rô-bốt, nhả khớp nam châm điện theo cách thủ công và kiểm tra xem có thể đẩy khớp báo động hay không. 2. Sau khi tắt nguồn thân chính của rô-bốt, hãy tháo nắp sau, kiểm tra xem cáp có tiếp xúc bất thường không hoặc liên hệ với nhân viên hỗ trợ kỹ thuật.

## 0x108480 Lỗi theo dõi vận tốc chuyển tiếp chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi theo dõi vận tốc chuyển tiếp chung

### Reason
 Khi tốc độ thực tế cùng hướng với tốc độ cài đặt, lỗi tốc độ vượt quá ngưỡng báo động đã cài đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không.

## 0x118480 Lỗi theo dõi vận tốc chuyển tiếp chung 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi theo dõi vận tốc chuyển tiếp chung 2

### Reason
 Khi tốc độ thực tế cùng hướng với tốc độ cài đặt, lỗi tốc độ vượt quá ngưỡng báo động đã cài đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không.

## 0x128480 Khớp ba lỗi theo dõi vận tốc phía trước 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp ba lỗi theo dõi vận tốc phía trước

### Reason
 Khi tốc độ thực tế cùng hướng với tốc độ cài đặt, lỗi tốc độ vượt quá ngưỡng báo động đã cài đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không.

## 0x138480 Khớp bốn lỗi theo dõi vận tốc về phía trước 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp bốn lỗi theo dõi vận tốc về phía trước

### Reason
 Khi tốc độ thực tế cùng hướng với tốc độ cài đặt, lỗi tốc độ vượt quá ngưỡng báo động đã cài đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không.

## 0x148480 Lỗi theo dõi vận tốc chuyển tiếp chung năm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi theo dõi vận tốc chuyển tiếp chung năm

### Reason
 Khi tốc độ thực tế cùng hướng với tốc độ cài đặt, lỗi tốc độ vượt quá ngưỡng báo động đã cài đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không.

## 0x158480 Khớp sáu lỗi theo dõi tốc độ phía trước 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp sáu lỗi theo dõi tốc độ phía trước

### Reason
 Khi tốc độ thực tế cùng hướng với tốc độ cài đặt, lỗi tốc độ vượt quá ngưỡng báo động đã cài đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không.

## 0x108481 Khớp một lỗi theo dõi vận tốc âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp một lỗi theo dõi vận tốc âm

### Reason
 Khi tốc độ thực ngược lại với tốc độ cài đặt, lỗi tốc độ vượt quá ngưỡng cảnh báo đã cài đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không.

## 0x118481 Lỗi theo dõi vận tốc âm chung 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi theo dõi vận tốc âm chung 2

### Reason
 Khi tốc độ thực ngược lại với tốc độ cài đặt, lỗi tốc độ vượt quá ngưỡng cảnh báo đã cài đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không.

## 0x128481 Khớp ba lỗi theo dõi vận tốc âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp ba lỗi theo dõi vận tốc âm

### Reason
 Khi tốc độ thực ngược lại với tốc độ cài đặt, lỗi tốc độ vượt quá ngưỡng cảnh báo đã cài đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không.

## 0x138481 Lỗi theo dõi vận tốc âm chung 4 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi theo dõi vận tốc âm chung 4

### Reason
 Khi tốc độ thực ngược lại với tốc độ cài đặt, lỗi tốc độ vượt quá ngưỡng cảnh báo đã cài đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không.

## 0x148481 Khớp năm lỗi theo dõi vận tốc âm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp năm lỗi theo dõi vận tốc âm

### Reason
 Khi tốc độ thực ngược lại với tốc độ cài đặt, lỗi tốc độ vượt quá ngưỡng cảnh báo đã cài đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không.

## 0x158481 Khớp sáu lỗi theo dõi tốc độ tiêu cực 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp sáu lỗi theo dõi tốc độ tiêu cực

### Reason
 Khi tốc độ thực ngược lại với tốc độ cài đặt, lỗi tốc độ vượt quá ngưỡng cảnh báo đã cài đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không.

## 0x108482 giới hạn tốc độ chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 giới hạn tốc độ chung

### Reason
 Tốc độ thực tế của khớp vượt quá tốc độ định mức của khớp

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x118482 Vượt quá tốc độ khớp 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Vượt quá tốc độ khớp 2

### Reason
 Tốc độ thực tế của khớp vượt quá tốc độ định mức của khớp

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x128482 Phần ba tốc độ vượt quá 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Phần ba tốc độ vượt quá

### Reason
 Tốc độ thực tế của khớp vượt quá tốc độ định mức của khớp

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x138482 Phần bốn tốc độ tràn ngập 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Phần bốn tốc độ tràn ngập

### Reason
 Tốc độ thực tế của khớp vượt quá tốc độ định mức của khớp

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x148482 Khớp 5 tốc độ tràn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 5 tốc độ tràn

### Reason
 Tốc độ thực tế của khớp vượt quá tốc độ định mức của khớp

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x158482 Phần sáu tốc độ tràn ngập 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Phần sáu tốc độ tràn ngập

### Reason
 Tốc độ thực tế của khớp vượt quá tốc độ định mức của khớp

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x108483 Lỗi theo dõi tốc độ khớp quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi theo dõi tốc độ khớp quá lớn

### Reason
 Độ lệch giữa tốc độ khớp thực tế và tốc độ yêu cầu vượt quá ngưỡng báo động

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x118483 Lỗi theo dõi tốc độ khớp 2 quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi theo dõi tốc độ khớp 2 quá lớn

### Reason
 Độ lệch giữa tốc độ khớp thực tế và tốc độ yêu cầu vượt quá ngưỡng báo động

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x128483 Lỗi theo dõi ba tốc độ chung quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi theo dõi ba tốc độ chung quá lớn

### Reason
 Độ lệch giữa tốc độ khớp thực tế và tốc độ yêu cầu vượt quá ngưỡng báo động

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x138483 Lỗi theo dõi tốc độ khớp 4 quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi theo dõi tốc độ khớp 4 quá lớn

### Reason
 Độ lệch giữa tốc độ khớp thực tế và tốc độ yêu cầu vượt quá ngưỡng báo động

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x148483 Lỗi theo dõi tốc độ khớp 5 quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi theo dõi tốc độ khớp 5 quá lớn

### Reason
 Độ lệch giữa tốc độ khớp thực tế và tốc độ yêu cầu vượt quá ngưỡng báo động

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x158483 Lỗi theo dõi tốc độ khớp 6 quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi theo dõi tốc độ khớp 6 quá lớn

### Reason
 Độ lệch giữa tốc độ khớp thực tế và tốc độ yêu cầu vượt quá ngưỡng báo động

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x108484 tăng tốc khớp ngoài khả năng chịu đựng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 tăng tốc khớp ngoài khả năng chịu đựng

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x118484 Gia tốc khớp 2 ngoài dung sai 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc khớp 2 ngoài dung sai

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x128484 Gia tốc của ba khớp nằm ngoài khả năng chịu đựng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc của ba khớp nằm ngoài khả năng chịu đựng

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x138484 Gia tốc của bốn khớp nằm ngoài khả năng chịu đựng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc của bốn khớp nằm ngoài khả năng chịu đựng

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x148484 Gia tốc của năm khớp ngoài sức chịu đựng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc của năm khớp ngoài sức chịu đựng

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x158484 Gia tốc của sáu khớp nằm ngoài khả năng chịu đựng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc của sáu khớp nằm ngoài khả năng chịu đựng

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x108485 Kiểm soát tốc độ khớp bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Kiểm soát tốc độ khớp bất thường

### Reason
 Độ lệch giữa tốc độ khớp thực tế và tốc độ lệnh vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x118485 Kiểm soát tốc độ bất thường của khớp 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Kiểm soát tốc độ bất thường của khớp 2

### Reason
 Độ lệch giữa tốc độ khớp thực tế và tốc độ lệnh vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x128485 Điều khiển ba tốc độ khớp bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điều khiển ba tốc độ khớp bất thường

### Reason
 Độ lệch giữa tốc độ khớp thực tế và tốc độ lệnh vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x138485 Điều khiển bốn tốc độ khớp bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điều khiển bốn tốc độ khớp bất thường

### Reason
 Độ lệch giữa tốc độ khớp thực tế và tốc độ lệnh vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x148485 Điều khiển năm tốc độ khớp bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điều khiển năm tốc độ khớp bất thường

### Reason
 Độ lệch giữa tốc độ khớp thực tế và tốc độ lệnh vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x158485 Điều khiển sáu tốc độ khớp bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điều khiển sáu tốc độ khớp bất thường

### Reason
 Độ lệch giữa tốc độ khớp thực tế và tốc độ lệnh vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x107380 Hết thời gian chờ kết nối bộ mã hóa chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hết thời gian chờ kết nối bộ mã hóa chung

### Reason
 Lỗi trạng thái đọc bộ mã hóa tuyệt đối

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không. 2. Vui lòng liên hệ với kỹ thuật viên để thay thế cáp kết nối bộ mã hóa để kiểm tra xem lỗi đã được loại bỏ chưa. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bộ mã hóa có bị hỏng không đèn trạng thái không bình thường.

## 0x117380 Đã hết thời gian kết nối bộ mã hóa chung 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Đã hết thời gian kết nối bộ mã hóa chung 2

### Reason
 Lỗi trạng thái đọc bộ mã hóa tuyệt đối

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không. 2. Vui lòng liên hệ với kỹ thuật viên để thay thế cáp kết nối bộ mã hóa để kiểm tra xem lỗi đã được loại bỏ chưa. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bộ mã hóa có bị hỏng không đèn trạng thái không bình thường.

## 0x127380 Hết thời gian chờ kết nối bộ mã hóa chung ba 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hết thời gian chờ kết nối bộ mã hóa chung ba

### Reason
 Lỗi trạng thái đọc bộ mã hóa tuyệt đối

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không. 2. Vui lòng liên hệ với kỹ thuật viên để thay thế cáp kết nối bộ mã hóa để kiểm tra xem lỗi đã được loại bỏ chưa. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bộ mã hóa có bị hỏng không đèn trạng thái không bình thường.

## 0x137380 Hết thời gian chờ kết nối bộ mã hóa chung bốn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hết thời gian chờ kết nối bộ mã hóa chung bốn

### Reason
 Lỗi trạng thái đọc bộ mã hóa tuyệt đối

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không. 2. Vui lòng liên hệ với kỹ thuật viên để thay thế cáp kết nối bộ mã hóa để kiểm tra xem lỗi đã được loại bỏ chưa. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bộ mã hóa có bị hỏng không đèn trạng thái không bình thường.

## 0x147380 Hết thời gian chờ kết nối bộ mã hóa chung năm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hết thời gian chờ kết nối bộ mã hóa chung năm

### Reason
 Lỗi trạng thái đọc bộ mã hóa tuyệt đối

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không. 2. Vui lòng liên hệ với kỹ thuật viên để thay thế cáp kết nối bộ mã hóa để kiểm tra xem lỗi đã được loại bỏ chưa. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bộ mã hóa có bị hỏng không đèn trạng thái không bình thường.

## 0x157380 Hết thời gian chờ kết nối bộ mã hóa chung sáu 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hết thời gian chờ kết nối bộ mã hóa chung sáu

### Reason
 Lỗi trạng thái đọc bộ mã hóa tuyệt đối

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không. 2. Vui lòng liên hệ với kỹ thuật viên để thay thế cáp kết nối bộ mã hóa để kiểm tra xem lỗi đã được loại bỏ chưa. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bộ mã hóa có bị hỏng không đèn trạng thái không bình thường.

## 0x107381 Điện áp thấp của pin bộ mã hóa chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điện áp thấp của pin bộ mã hóa chung

### Reason
 Bộ mã hóa pin bên trong điện áp thấp

### Action
 1. Xác nhận các thông số sản xuất: liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số sản xuất của khớp báo động có chính xác không
2. Kiểm tra cáp: tháo nắp đầu nối, kiểm tra xem cáp encoder có bị lỏng không và liên hệ kỹ thuật viên để thay thế
3. Bộ mã hóa bị lỗi, thay thế bộ mã hóa khớp hoặc thay thế khớp

## 0x117381 Điện áp thấp của pin bộ mã hóa chung 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điện áp thấp của pin bộ mã hóa chung 2

### Reason
 Bộ mã hóa pin bên trong điện áp thấp

### Action
 1. Xác nhận các thông số sản xuất: liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số sản xuất của khớp báo động có chính xác không
2. Kiểm tra cáp: tháo nắp đầu nối, kiểm tra xem cáp encoder có bị lỏng không và liên hệ kỹ thuật viên để thay thế
3. Bộ mã hóa bị lỗi, thay thế bộ mã hóa khớp hoặc thay thế khớp

## 0x127381 Liên kết ba pin mã hóa điện áp thấp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên kết ba pin mã hóa điện áp thấp

### Reason
 Bộ mã hóa pin bên trong điện áp thấp

### Action
 1. Xác nhận các thông số sản xuất: liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số sản xuất của khớp báo động có chính xác không
2. Kiểm tra cáp: tháo nắp đầu nối, kiểm tra xem cáp encoder có bị lỏng không và liên hệ kỹ thuật viên để thay thế
3. Bộ mã hóa bị lỗi, thay thế bộ mã hóa khớp hoặc thay thế khớp

## 0x137381 Liên kết bốn pin mã hóa điện áp thấp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên kết bốn pin mã hóa điện áp thấp

### Reason
 Bộ mã hóa pin bên trong điện áp thấp

### Action
 1. Xác nhận các thông số sản xuất: liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số sản xuất của khớp báo động có chính xác không
2. Kiểm tra cáp: tháo nắp đầu nối, kiểm tra xem cáp encoder có bị lỏng không và liên hệ kỹ thuật viên để thay thế
3. Bộ mã hóa bị lỗi, thay thế bộ mã hóa khớp hoặc thay thế khớp

## 0x147381 Điện áp thấp của pin bộ mã hóa chung năm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điện áp thấp của pin bộ mã hóa chung năm

### Reason
 Bộ mã hóa pin bên trong điện áp thấp

### Action
 1. Xác nhận các thông số sản xuất: liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số sản xuất của khớp báo động có chính xác không
2. Kiểm tra cáp: tháo nắp đầu nối, kiểm tra xem cáp encoder có bị lỏng không và liên hệ kỹ thuật viên để thay thế
3. Bộ mã hóa bị lỗi, thay thế bộ mã hóa khớp hoặc thay thế khớp

## 0x157381 Liên kết sáu pin mã hóa điện áp thấp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên kết sáu pin mã hóa điện áp thấp

### Reason
 Bộ mã hóa pin bên trong điện áp thấp

### Action
 1. Xác nhận các thông số sản xuất: liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số sản xuất của khớp báo động có chính xác không
2. Kiểm tra cáp: tháo nắp đầu nối, kiểm tra xem cáp encoder có bị lỏng không và liên hệ kỹ thuật viên để thay thế
3. Bộ mã hóa bị lỗi, thay thế bộ mã hóa khớp hoặc thay thế khớp

## 0x107382 Kết nối một pin mã hóa bị ngắt kết nối 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Kết nối một pin mã hóa bị ngắt kết nối

### Reason
 Lỗi nguồn điện bộ mã hóa

### Action
 1. Nếu lỗi chỉ xảy ra trong quá trình bật tắt nguồn của robot thì không ảnh hưởng đến việc sử dụng và không cần xử lý gì thêm
2. Bộ mã hóa bị hỏng, nếu lỗi vẫn còn và ảnh hưởng đến việc sử dụng, hãy liên hệ với kỹ thuật viên để thay thế.

## 0x117382 Pin bộ mã hóa chung 2 bị ngắt kết nối 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Pin bộ mã hóa chung 2 bị ngắt kết nối

### Reason
 Lỗi nguồn điện bộ mã hóa

### Action
 1. Nếu lỗi chỉ xảy ra trong quá trình bật tắt nguồn của robot thì không ảnh hưởng đến việc sử dụng và không cần xử lý gì thêm
2. Bộ mã hóa bị hỏng, nếu lỗi vẫn còn và ảnh hưởng đến việc sử dụng, hãy liên hệ với kỹ thuật viên để thay thế.

## 0x127382 Pin bộ mã hóa chung ba bị ngắt kết nối 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Pin bộ mã hóa chung ba bị ngắt kết nối

### Reason
 Lỗi nguồn điện bộ mã hóa

### Action
 1. Nếu lỗi chỉ xảy ra trong quá trình bật tắt nguồn của robot thì không ảnh hưởng đến việc sử dụng và không cần xử lý gì thêm
2. Bộ mã hóa bị hỏng, nếu lỗi vẫn còn và ảnh hưởng đến việc sử dụng, hãy liên hệ với kỹ thuật viên để thay thế.

## 0x137382 Liên kết bốn pin mã hóa bị ngắt kết nối 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên kết bốn pin mã hóa bị ngắt kết nối

### Reason
 Lỗi nguồn điện bộ mã hóa

### Action
 1. Nếu lỗi chỉ xảy ra trong quá trình bật tắt nguồn của robot thì không ảnh hưởng đến việc sử dụng và không cần xử lý gì thêm
2. Bộ mã hóa bị hỏng, nếu lỗi vẫn còn và ảnh hưởng đến việc sử dụng, hãy liên hệ với kỹ thuật viên để thay thế.

## 0x147382 Pin bộ mã hóa chung năm bị ngắt kết nối 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Pin bộ mã hóa chung năm bị ngắt kết nối

### Reason
 Lỗi nguồn điện bộ mã hóa

### Action
 1. Nếu lỗi chỉ xảy ra trong quá trình bật tắt nguồn của robot thì không ảnh hưởng đến việc sử dụng và không cần xử lý gì thêm
2. Bộ mã hóa bị hỏng, nếu lỗi vẫn còn và ảnh hưởng đến việc sử dụng, hãy liên hệ với kỹ thuật viên để thay thế.

## 0x157382 Liên kết sáu pin mã hóa bị ngắt kết nối 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên kết sáu pin mã hóa bị ngắt kết nối

### Reason
 Lỗi nguồn điện bộ mã hóa

### Action
 1. Nếu lỗi chỉ xảy ra trong quá trình bật tắt nguồn của robot thì không ảnh hưởng đến việc sử dụng và không cần xử lý gì thêm
2. Bộ mã hóa bị hỏng, nếu lỗi vẫn còn và ảnh hưởng đến việc sử dụng, hãy liên hệ với kỹ thuật viên để thay thế.

## 0x107383 Lỗi góc lưu trữ bộ mã hóa chung 1 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi góc lưu trữ bộ mã hóa chung 1

### Reason
 Lỗi cân chỉnh vị trí động cơ khớp

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không.
2. Vui lòng liên hệ với kỹ thuật viên để hiệu chỉnh lại giá trị Z của khớp.

## 0x117383 Lỗi góc lưu trữ bộ mã hóa chung 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi góc lưu trữ bộ mã hóa chung 2

### Reason
 Lỗi cân chỉnh vị trí động cơ khớp

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không.
2. Vui lòng liên hệ với kỹ thuật viên để hiệu chỉnh lại giá trị Z của khớp.

## 0x127383 Lỗi góc lưu trữ ba bộ mã hóa chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi góc lưu trữ ba bộ mã hóa chung

### Reason
 Lỗi cân chỉnh vị trí động cơ khớp

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không.
2. Vui lòng liên hệ với kỹ thuật viên để hiệu chỉnh lại giá trị Z của khớp.

## 0x137383 Lỗi góc lưu trữ chung bốn bộ mã hóa 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi góc lưu trữ chung bốn bộ mã hóa

### Reason
 Lỗi cân chỉnh vị trí động cơ khớp

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không. 2. Vui lòng liên hệ với kỹ thuật viên để hiệu chỉnh lại giá trị Z của khớp.

## 0x147383 Lỗi góc lưu trữ bộ mã hóa chung năm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi góc lưu trữ bộ mã hóa chung năm

### Reason
 Lỗi cân chỉnh vị trí động cơ khớp

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không. 2. Vui lòng liên hệ với kỹ thuật viên để hiệu chỉnh lại giá trị Z của khớp.

## 0x157383 Lỗi góc lưu trữ sáu bộ mã hóa chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi góc lưu trữ sáu bộ mã hóa chung

### Reason
 Lỗi cân chỉnh vị trí động cơ khớp

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không. 2. Vui lòng liên hệ với kỹ thuật viên để hiệu chỉnh lại giá trị Z của khớp.

## 0x107384 Lỗi đếm bộ mã hóa chung 1 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi đếm bộ mã hóa chung 1

### Reason
 Số lượng bộ mã hóa tương đối bất thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra việc cài đặt bộ mã hóa hoặc kiểm tra độ bẩn của đĩa mã

## 0x117384 Lỗi đếm bộ mã hóa chung 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi đếm bộ mã hóa chung 2

### Reason
 Số lượng bộ mã hóa tương đối bất thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra việc cài đặt bộ mã hóa hoặc kiểm tra độ bẩn của đĩa mã

## 0x127384 Lỗi đếm ba bộ mã hóa chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi đếm ba bộ mã hóa chung

### Reason
 Số lượng bộ mã hóa tương đối bất thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra việc cài đặt bộ mã hóa hoặc kiểm tra độ bẩn của đĩa mã

## 0x137384 Lỗi đếm bốn bộ mã hóa chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi đếm bốn bộ mã hóa chung

### Reason
 Số lượng bộ mã hóa tương đối bất thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra việc cài đặt bộ mã hóa hoặc kiểm tra độ bẩn của đĩa mã

## 0x147384 Lỗi đếm năm bộ mã hóa chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi đếm năm bộ mã hóa chung

### Reason
 Số lượng bộ mã hóa tương đối bất thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra việc cài đặt bộ mã hóa hoặc kiểm tra độ bẩn của đĩa mã

## 0x157384 Lỗi đếm sáu bộ mã hóa chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi đếm sáu bộ mã hóa chung

### Reason
 Số lượng bộ mã hóa tương đối bất thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra việc cài đặt bộ mã hóa hoặc kiểm tra độ bẩn của đĩa mã

## 0x107385 Khớp một lỗi xác minh bộ mã hóa kép 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp một lỗi xác minh bộ mã hóa kép

### Reason
 Vị trí được ghi bởi bộ mã hóa kép chung bị lệch và vượt quá một ngưỡng nhất định

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng xác nhận xem có va chạm nghiêm trọng hoặc lỗi cơ học hay không và liên hệ với kỹ thuật viên. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra việc cài đặt bộ mã hóa hoặc kiểm tra độ bẩn của đĩa mã.

## 0x117385 Lỗi xác minh bộ mã hóa kép chung 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi xác minh bộ mã hóa kép chung 2

### Reason
 Vị trí được ghi bởi bộ mã hóa kép chung bị lệch và vượt quá một ngưỡng nhất định

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng xác nhận xem có va chạm nghiêm trọng hoặc lỗi cơ học hay không và liên hệ với kỹ thuật viên. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra việc cài đặt bộ mã hóa hoặc kiểm tra độ bẩn của đĩa mã.

## 0x127385 Lỗi xác minh bộ mã hóa kép ba lần chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi xác minh bộ mã hóa kép ba lần chung

### Reason
 Vị trí được ghi bởi bộ mã hóa kép chung bị lệch và vượt quá một ngưỡng nhất định

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng xác nhận xem có va chạm nghiêm trọng hoặc lỗi cơ học hay không và liên hệ với kỹ thuật viên. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra việc cài đặt bộ mã hóa hoặc kiểm tra độ bẩn của đĩa mã.

## 0x137385 Lỗi xác minh bộ mã hóa kép chung bốn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi xác minh bộ mã hóa kép chung bốn

### Reason
 Vị trí được ghi bởi bộ mã hóa kép chung bị lệch và vượt quá một ngưỡng nhất định

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng xác nhận xem có va chạm nghiêm trọng hoặc lỗi cơ học hay không và liên hệ với kỹ thuật viên. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra việc cài đặt bộ mã hóa hoặc kiểm tra độ bẩn của đĩa mã.

## 0x147385 Lỗi xác minh bộ mã hóa kép chung năm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi xác minh bộ mã hóa kép chung năm

### Reason
 Vị trí được ghi bởi bộ mã hóa kép chung bị lệch và vượt quá một ngưỡng nhất định

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng xác nhận xem có va chạm nghiêm trọng hoặc lỗi cơ học hay không và liên hệ với kỹ thuật viên. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra việc cài đặt bộ mã hóa hoặc kiểm tra độ bẩn của đĩa mã.

## 0x157385 Lỗi xác minh bộ mã hóa kép liên sáu 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi xác minh bộ mã hóa kép liên sáu

### Reason
 Vị trí được ghi bởi bộ mã hóa kép chung bị lệch và vượt quá một ngưỡng nhất định

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng xác nhận xem có va chạm nghiêm trọng hoặc lỗi cơ học hay không và liên hệ với kỹ thuật viên. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra việc cài đặt bộ mã hóa hoặc kiểm tra độ bẩn của đĩa mã.

## 0x107387 Lỗi chụp đường nối Z 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi chụp đường nối Z

### Reason
 Ngoại lệ chụp dòng Z của bộ mã hóa tương đối

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra và sửa chữa bộ mã hóa tương đối của khớp

## 0x117387 Lỗi chụp đường liên kết 2 Z 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi chụp đường liên kết 2 Z

### Reason
 Ngoại lệ chụp dòng Z của bộ mã hóa tương đối

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra và sửa chữa bộ mã hóa tương đối của khớp

## 0x127387 Khớp ba đường Z thất bại Snap 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp ba đường Z thất bại Snap

### Reason
 Ngoại lệ chụp dòng Z của bộ mã hóa tương đối

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra và sửa chữa bộ mã hóa tương đối của khớp

## 0x137387 Khớp nối 4 đường Z bị lỗi 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp nối 4 đường Z bị lỗi

### Reason
 Ngoại lệ chụp dòng Z của bộ mã hóa tương đối

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra và sửa chữa bộ mã hóa tương đối của khớp

## 0x147387 Thất bại liên kết năm đường Z-line 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Thất bại liên kết năm đường Z-line

### Reason
 Ngoại lệ chụp dòng Z của bộ mã hóa tương đối

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra và sửa chữa bộ mã hóa tương đối của khớp

## 0x157387 Liên kết sáu dòng Z thất bại chụp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên kết sáu dòng Z thất bại chụp

### Reason
 Ngoại lệ chụp dòng Z của bộ mã hóa tương đối

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số sản xuất của khớp báo động có đúng không 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra và sửa chữa bộ mã hóa tương đối của khớp

## 0x108611 Độ lệch vị trí khớp quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Độ lệch vị trí khớp quá lớn

### Reason
 Độ lệch giữa phản hồi vị trí thực tế và vị trí lệnh vượt quá ngưỡng đã đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x118611 Sai lệch vị trí khớp 2 quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Sai lệch vị trí khớp 2 quá lớn

### Reason
 Độ lệch giữa phản hồi vị trí thực tế và vị trí lệnh vượt quá ngưỡng đã đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x128611 Độ lệch vị trí ba khớp quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Độ lệch vị trí ba khớp quá lớn

### Reason
 Độ lệch giữa phản hồi vị trí thực tế và vị trí lệnh vượt quá ngưỡng đã đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x138611 Độ lệch vị trí khớp bốn quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Độ lệch vị trí khớp bốn quá lớn

### Reason
 Độ lệch giữa phản hồi vị trí thực tế và vị trí lệnh vượt quá ngưỡng đã đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x148611 Độ lệch vị trí năm khớp quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Độ lệch vị trí năm khớp quá lớn

### Reason
 Độ lệch giữa phản hồi vị trí thực tế và vị trí lệnh vượt quá ngưỡng đã đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x158611 Khớp sáu vị trí sai lệch quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp sáu vị trí sai lệch quá lớn

### Reason
 Độ lệch giữa phản hồi vị trí thực tế và vị trí lệnh vượt quá ngưỡng đã đặt

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng kiểm tra xem có va chạm hay không và cài đặt tải có đúng không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x108612 Gia số lệnh vị trí chung 1 quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia số lệnh vị trí chung 1 quá lớn

### Reason
 Gia số lệnh vị trí quá lớn, vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x118612 Gia số lệnh vị trí liên kết 2 quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia số lệnh vị trí liên kết 2 quá lớn

### Reason
 Gia số lệnh vị trí quá lớn, vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x128612 Gia số lệnh liên kết ba vị trí quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia số lệnh liên kết ba vị trí quá lớn

### Reason
 Gia số lệnh vị trí quá lớn, vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x138612 Gia số lệnh liên kết bốn vị trí quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia số lệnh liên kết bốn vị trí quá lớn

### Reason
 Gia số lệnh vị trí quá lớn, vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x148612 Gia số lệnh liên kết năm vị trí quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia số lệnh liên kết năm vị trí quá lớn

### Reason
 Gia số lệnh vị trí quá lớn, vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x158612 Gia số lệnh liên kết sáu vị trí quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia số lệnh liên kết sáu vị trí quá lớn

### Reason
 Gia số lệnh vị trí quá lớn, vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x108613 Gia tốc khớp quá mức 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc khớp quá mức

### Reason
 Gia tốc lệnh vị trí quá lớn, vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x118613 Gia tốc hai khớp quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc hai khớp quá lớn

### Reason
 Gia tốc lệnh vị trí quá lớn, vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x128613 Gia tốc quá mức của ba khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc quá mức của ba khớp

### Reason
 Gia tốc lệnh vị trí quá lớn, vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x138613 Tăng tốc quá mức của bốn khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tăng tốc quá mức của bốn khớp

### Reason
 Gia tốc lệnh vị trí quá lớn, vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x148613 Gia tốc năm khớp quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc năm khớp quá lớn

### Reason
 Gia tốc lệnh vị trí quá lớn, vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x158613 Gia tốc khớp sáu quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Gia tốc khớp sáu quá lớn

### Reason
 Gia tốc lệnh vị trí quá lớn, vượt quá ngưỡng

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x108614 Lệnh liên kết 1 vị trí quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lệnh liên kết 1 vị trí quá lớn

### Reason
 Lệnh vị trí do bộ điều khiển đưa ra là sai

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x118614 Lệnh khớp 2 vị trí quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lệnh khớp 2 vị trí quá lớn

### Reason
 Lệnh vị trí do bộ điều khiển đưa ra là sai

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x128614 Lệnh liên kết ba vị trí quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lệnh liên kết ba vị trí quá lớn

### Reason
 Lệnh vị trí do bộ điều khiển đưa ra là sai

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x138614 Lệnh khớp bốn vị trí quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lệnh khớp bốn vị trí quá lớn

### Reason
 Lệnh vị trí do bộ điều khiển đưa ra là sai

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x148614 Lệnh khớp năm vị trí quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lệnh khớp năm vị trí quá lớn

### Reason
 Lệnh vị trí do bộ điều khiển đưa ra là sai

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x158614 Lệnh khớp sáu vị trí quá lớn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lệnh khớp sáu vị trí quá lớn

### Reason
 Lệnh vị trí do bộ điều khiển đưa ra là sai

### Action
 1. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không. 4. Nếu chế độ séc-vô được sử dụng tại thời điểm đó, vui lòng kiểm tra xem lệnh gửi là liên tục hay bất thường và liệu giải pháp đảo vị trí có liên tục hay bất thường không.

## 0x108615 Giao tiếp chung-CAN bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Giao tiếp chung-CAN bất thường

### Reason
 Giao tiếp xe buýt robot bất thường

### Action
 Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không.

## 0x118615 Khớp 2 giao tiếp CAN bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 2 giao tiếp CAN bất thường

### Reason
 Giao tiếp xe buýt robot bất thường

### Action
 Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không.

## 0x128615 Khớp 3 giao tiếp CAN bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 3 giao tiếp CAN bất thường

### Reason
 Giao tiếp xe buýt robot bất thường

### Action
 Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không.

## 0x138615 Khớp 4 giao tiếp CAN bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 4 giao tiếp CAN bất thường

### Reason
 Giao tiếp xe buýt robot bất thường

### Action
 Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không.

## 0x148615 Khớp 5 giao tiếp CAN bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 5 giao tiếp CAN bất thường

### Reason
 Giao tiếp xe buýt robot bất thường

### Action
 Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không.

## 0x158615 Khớp 6 giao tiếp CAN bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 6 giao tiếp CAN bất thường

### Reason
 Giao tiếp xe buýt robot bất thường

### Action
 Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem giao tiếp bus của robot có bất thường không.

## 0x103220 Điện áp thấp chung 1 servo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điện áp thấp chung 1 servo

### Reason
 Điện áp bus được phát hiện và vượt quá ngưỡng thiếu điện áp của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem gia tốc tải hoặc chuyển động của rô-bốt có được đặt quá cao hay không, vui lòng thử giảm các điều kiện vận hành. 2. Vui lòng thử kiểm tra xem cáp hạng nặng của robot có được kết nối bất thường không. 3. Vui lòng liên hệ với nhân viên kỹ thuật để giúp kiểm tra xem phần cứng của bo mạch điều khiển có bất thường không. 4. Vui lòng liên hệ với nhân viên kỹ thuật để hỗ trợ kiểm tra xem thông tin liên lạc hoặc nguồn điện của tủ điều khiển điện có bất thường hay không.

## 0x113220 Điện áp thấp chung 2 servo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điện áp thấp chung 2 servo

### Reason
 Điện áp bus được phát hiện và vượt quá ngưỡng thiếu điện áp của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem gia tốc tải hoặc chuyển động của rô-bốt có được đặt quá cao hay không, vui lòng thử giảm các điều kiện vận hành. 2. Vui lòng thử kiểm tra xem cáp hạng nặng của robot có được kết nối bất thường không. 3. Vui lòng liên hệ với nhân viên kỹ thuật để giúp kiểm tra xem phần cứng của bo mạch điều khiển có bất thường không. 4. Vui lòng liên hệ với nhân viên kỹ thuật để hỗ trợ kiểm tra xem thông tin liên lạc hoặc nguồn điện của tủ điều khiển điện có bất thường hay không.

## 0x123220 Điện áp chung ba Servo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điện áp chung ba Servo

### Reason
 Điện áp bus được phát hiện và vượt quá ngưỡng thiếu điện áp của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem gia tốc tải hoặc chuyển động của rô-bốt có được đặt quá cao hay không, vui lòng thử giảm các điều kiện vận hành. 2. Vui lòng thử kiểm tra xem cáp hạng nặng của robot có được kết nối bất thường không. 3. Vui lòng liên hệ với nhân viên kỹ thuật để giúp kiểm tra xem phần cứng của bo mạch điều khiển có bất thường không. 4. Vui lòng liên hệ với nhân viên kỹ thuật để hỗ trợ kiểm tra xem thông tin liên lạc hoặc nguồn điện của tủ điều khiển điện có bất thường hay không.

## 0x133220 Điện áp chung bốn Servo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điện áp chung bốn Servo

### Reason
 Điện áp bus được phát hiện và vượt quá ngưỡng thiếu điện áp của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem gia tốc tải hoặc chuyển động của rô-bốt có được đặt quá cao hay không, vui lòng thử giảm các điều kiện vận hành. 2. Vui lòng thử kiểm tra xem cáp hạng nặng của robot có được kết nối bất thường không. 3. Vui lòng liên hệ với nhân viên kỹ thuật để giúp kiểm tra xem phần cứng của bo mạch điều khiển có bất thường không. 4. Vui lòng liên hệ với nhân viên kỹ thuật để hỗ trợ kiểm tra xem thông tin liên lạc hoặc nguồn điện của tủ điều khiển điện có bất thường hay không.

## 0x143220 Điện áp chung năm Servo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điện áp chung năm Servo

### Reason
 Điện áp bus được phát hiện và vượt quá ngưỡng thiếu điện áp của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem gia tốc tải hoặc chuyển động của rô-bốt có được đặt quá cao hay không, vui lòng thử giảm các điều kiện vận hành. 2. Vui lòng thử kiểm tra xem cáp hạng nặng của robot có được kết nối bất thường không. 3. Vui lòng liên hệ với nhân viên kỹ thuật để giúp kiểm tra xem phần cứng của bo mạch điều khiển có bất thường không. 4. Vui lòng liên hệ với nhân viên kỹ thuật để hỗ trợ kiểm tra xem thông tin liên lạc hoặc nguồn điện của tủ điều khiển điện có bất thường hay không.

## 0x153220 Khớp sáu servo thiếu điện áp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp sáu servo thiếu điện áp

### Reason
 Điện áp bus được phát hiện và vượt quá ngưỡng thiếu điện áp của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem gia tốc tải hoặc chuyển động của rô-bốt có được đặt quá cao hay không, vui lòng thử giảm các điều kiện vận hành. 2. Vui lòng thử kiểm tra xem cáp hạng nặng của robot có được kết nối bất thường không. 3. Vui lòng liên hệ với nhân viên kỹ thuật để giúp kiểm tra xem phần cứng của bo mạch điều khiển có bất thường không. 4. Vui lòng liên hệ với nhân viên kỹ thuật để hỗ trợ kiểm tra xem thông tin liên lạc hoặc nguồn điện của tủ điều khiển điện có bất thường hay không.

## 0x103210 Quá áp servo chung 1 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá áp servo chung 1

### Reason
 Điện áp bus được phát hiện và vượt quá ngưỡng quá áp của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem gia tốc tải hoặc chuyển động của rô-bốt có được đặt quá cao hay không, vui lòng thử giảm các điều kiện vận hành. 2. Hãy thử kiểm tra xem tấm phóng điện của tủ điều khiển điện có bất thường không. 3. Vui lòng liên hệ với nhân viên kỹ thuật để giúp kiểm tra xem phần cứng của bo mạch điều khiển có bất thường không.

## 0x113210 Quá áp servo chung 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá áp servo chung 2

### Reason
 Điện áp bus được phát hiện và vượt quá ngưỡng quá áp của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem gia tốc tải hoặc chuyển động của rô-bốt có được đặt quá cao hay không, vui lòng thử giảm các điều kiện vận hành. 2. Hãy thử kiểm tra xem tấm phóng điện của tủ điều khiển điện có bất thường không. 3. Vui lòng liên hệ với nhân viên kỹ thuật để giúp kiểm tra xem phần cứng của bo mạch điều khiển có bất thường không.

## 0x123210 Quá áp ba Servo chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá áp ba Servo chung

### Reason
 Điện áp bus được phát hiện và vượt quá ngưỡng quá áp của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem gia tốc tải hoặc chuyển động của rô-bốt có được đặt quá cao hay không, vui lòng thử giảm các điều kiện vận hành. 2. Hãy thử kiểm tra xem tấm phóng điện của tủ điều khiển điện có bất thường không. 3. Vui lòng liên hệ với nhân viên kỹ thuật để giúp kiểm tra xem phần cứng của bo mạch điều khiển có bất thường không.

## 0x133210 Quá áp chung bốn Servo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá áp chung bốn Servo

### Reason
 Điện áp bus được phát hiện và vượt quá ngưỡng quá áp của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem gia tốc tải hoặc chuyển động của rô-bốt có được đặt quá cao hay không, vui lòng thử giảm các điều kiện vận hành. 2. Hãy thử kiểm tra xem tấm phóng điện của tủ điều khiển điện có bất thường không. 3. Vui lòng liên hệ với nhân viên kỹ thuật để giúp kiểm tra xem phần cứng của bo mạch điều khiển có bất thường không.

## 0x143210 Quá áp chung năm Servo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá áp chung năm Servo

### Reason
 Điện áp bus được phát hiện và vượt quá ngưỡng quá áp của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem gia tốc tải hoặc chuyển động của rô-bốt có được đặt quá cao hay không, vui lòng thử giảm các điều kiện vận hành. 2. Hãy thử kiểm tra xem tấm phóng điện của tủ điều khiển điện có bất thường không. 3. Vui lòng liên hệ với nhân viên kỹ thuật để giúp kiểm tra xem phần cứng của bo mạch điều khiển có bất thường không.

## 0x153210 Quá áp chung sáu servo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá áp chung sáu servo

### Reason
 Điện áp bus được phát hiện và vượt quá ngưỡng quá áp của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem gia tốc tải hoặc chuyển động của rô-bốt có được đặt quá cao hay không, vui lòng thử giảm các điều kiện vận hành. 2. Hãy thử kiểm tra xem tấm phóng điện của tủ điều khiển điện có bất thường không. 3. Vui lòng liên hệ với nhân viên kỹ thuật để giúp kiểm tra xem phần cứng của bo mạch điều khiển có bất thường không.

## 0x104310 Khớp 1 servo quá nhiệt 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 1 servo quá nhiệt

### Reason
 Nhiệt độ được phát hiện trên bảng điều khiển vượt quá ngưỡng quá nhiệt của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem nhiệt độ môi trường xung quanh hiện tại của rô-bốt có vượt quá phạm vi nhiệt độ của rô-bốt hay không. 2. Vui lòng kiểm tra xem nhiệt độ của bề mặt ngoài của khớp có cao hơn 50°C hay không. Nếu cao hơn 50°C, vui lòng giảm các điều kiện vận hành. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp hoặc bộ giảm tốc khớp không.

## 0x114310 Khớp 2 servo quá nhiệt 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 2 servo quá nhiệt

### Reason
 Nhiệt độ được phát hiện trên bảng điều khiển vượt quá ngưỡng quá nhiệt của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem nhiệt độ môi trường xung quanh hiện tại của rô-bốt có vượt quá phạm vi nhiệt độ của rô-bốt hay không. 2. Vui lòng kiểm tra xem nhiệt độ của bề mặt ngoài của khớp có cao hơn 50°C hay không. Nếu cao hơn 50°C, vui lòng giảm các điều kiện vận hành. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp hoặc bộ giảm tốc khớp không.

## 0x124310 Khớp ba servo quá nhiệt 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp ba servo quá nhiệt

### Reason
 Nhiệt độ được phát hiện trên bảng điều khiển vượt quá ngưỡng quá nhiệt của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem nhiệt độ môi trường xung quanh hiện tại của rô-bốt có vượt quá phạm vi nhiệt độ của rô-bốt hay không. 2. Vui lòng kiểm tra xem nhiệt độ của bề mặt ngoài của khớp có cao hơn 50°C hay không. Nếu cao hơn 50°C, vui lòng giảm các điều kiện vận hành. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp hoặc bộ giảm tốc khớp không.

## 0x134310 Khớp bốn servo quá nhiệt 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp bốn servo quá nhiệt

### Reason
 Nhiệt độ được phát hiện trên bảng điều khiển vượt quá ngưỡng quá nhiệt của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem nhiệt độ môi trường xung quanh hiện tại của rô-bốt có vượt quá phạm vi nhiệt độ của rô-bốt hay không. 2. Vui lòng kiểm tra xem nhiệt độ của bề mặt ngoài của khớp có cao hơn 50°C hay không. Nếu cao hơn 50°C, vui lòng giảm các điều kiện vận hành. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp hoặc bộ giảm tốc khớp không.

## 0x144310 Khớp năm servo quá nhiệt 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp năm servo quá nhiệt

### Reason
 Nhiệt độ được phát hiện trên bảng điều khiển vượt quá ngưỡng quá nhiệt của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem nhiệt độ môi trường xung quanh hiện tại của rô-bốt có vượt quá phạm vi nhiệt độ của rô-bốt hay không. 2. Vui lòng kiểm tra xem nhiệt độ của bề mặt ngoài của khớp có cao hơn 50°C hay không. Nếu cao hơn 50°C, vui lòng giảm các điều kiện vận hành. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp hoặc bộ giảm tốc khớp không.

## 0x154310 Khớp sáu servo quá nhiệt 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp sáu servo quá nhiệt

### Reason
 Nhiệt độ được phát hiện trên bảng điều khiển vượt quá ngưỡng quá nhiệt của bảng điều khiển phần cứng

### Action
 1. Vui lòng kiểm tra xem nhiệt độ môi trường xung quanh hiện tại của rô-bốt có vượt quá phạm vi nhiệt độ của rô-bốt hay không. 2. Vui lòng kiểm tra xem nhiệt độ của bề mặt ngoài của khớp có cao hơn 50°C hay không. Nếu cao hơn 50°C, vui lòng giảm các điều kiện vận hành. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp hoặc bộ giảm tốc khớp không.

## 0x102350 Quá tải mô-đun chung 1 (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá tải mô-đun chung 1 (I2T)

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x112350 Quá tải mô-đun chung 2 (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá tải mô-đun chung 2 (I2T)

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x122350 Quá tải ba mô-đun chung (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá tải ba mô-đun chung (I2T)

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x132350 Quá tải mô-đun chung bốn (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá tải mô-đun chung bốn (I2T)

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x142350 Quá tải mô-đun chung năm (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá tải mô-đun chung năm (I2T)

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x152350 Quá tải mô-đun chung sáu (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá tải mô-đun chung sáu (I2T)

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x105480 Chế ngự chung-Servo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Chế ngự chung-Servo

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x115480 Công suất servo chung 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Công suất servo chung 2

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x125480 Khớp ba servo áp đảo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp ba servo áp đảo

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x135480 Chế ngự Servo bốn phần 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Chế ngự Servo bốn phần

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x145480 Khớp năm servo áp đảo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp năm servo áp đảo

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x155480 Khớp sáu servo áp đảo 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp sáu servo áp đảo

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x103380 Hiệu chỉnh số 0 của bộ mã hóa liên kết 1 không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hiệu chỉnh số 0 của bộ mã hóa liên kết 1 không thành công

### Reason
 Trong quá trình kích hoạt khớp, vòng quay của động cơ không phù hợp với dự kiến

### Action
 1. Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số liên quan của khớp báo động có bất thường không. 2. Vui lòng thử bật khớp lên và xuống để kiểm tra xem phanh có bất thường không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây ABZ của khớp hoặc đĩa mã ABZ hay không.

## 0x113380 Không hiệu chỉnh điểm 0 của bộ mã hóa liên kết 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không hiệu chỉnh điểm 0 của bộ mã hóa liên kết 2

### Reason
 Trong quá trình kích hoạt khớp, vòng quay của động cơ không phù hợp với dự kiến

### Action
 1. Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số liên quan của khớp báo động có bất thường không. 2. Vui lòng thử bật khớp lên và xuống để kiểm tra xem phanh có bất thường không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây ABZ của khớp hoặc đĩa mã ABZ hay không.

## 0x123380 Hiệu chỉnh số 0 của bộ mã hóa liên kết ba không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hiệu chỉnh số 0 của bộ mã hóa liên kết ba không thành công

### Reason
 Trong quá trình kích hoạt khớp, vòng quay của động cơ không phù hợp với dự kiến

### Action
 1. Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số liên quan của khớp báo động có bất thường không. 2. Vui lòng thử bật khớp lên và xuống để kiểm tra xem phanh có bất thường không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây ABZ của khớp hoặc đĩa mã ABZ hay không.

## 0x133380 Không thể hiệu chỉnh điểm không của bộ mã hóa chung bốn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể hiệu chỉnh điểm không của bộ mã hóa chung bốn

### Reason
 Trong quá trình kích hoạt khớp, vòng quay của động cơ không phù hợp với dự kiến

### Action
 1. Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số liên quan của khớp báo động có bất thường không. 2. Vui lòng thử bật khớp lên và xuống để kiểm tra xem phanh có bất thường không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây ABZ của khớp hoặc đĩa mã ABZ hay không.

## 0x143380 Không thể hiệu chỉnh điểm không của bộ mã hóa chung năm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể hiệu chỉnh điểm không của bộ mã hóa chung năm

### Reason
 Trong quá trình kích hoạt khớp, vòng quay của động cơ không phù hợp với dự kiến

### Action
 1. Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số liên quan của khớp báo động có bất thường không. 2. Vui lòng thử bật khớp lên và xuống để kiểm tra xem phanh có bất thường không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây ABZ của khớp hoặc đĩa mã ABZ hay không.

## 0x153380 Hiệu chỉnh số 0 của bộ mã hóa liên kết không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hiệu chỉnh số 0 của bộ mã hóa liên kết không thành công

### Reason
 Trong quá trình kích hoạt khớp, vòng quay của động cơ không phù hợp với dự kiến

### Action
 1. Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số liên quan của khớp báo động có bất thường không. 2. Vui lòng thử bật khớp lên và xuống để kiểm tra xem phanh có bất thường không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây ABZ của khớp hoặc đĩa mã ABZ hay không.

## 0x103381 Mất pha chung một đầu ra 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mất pha chung một đầu ra

### Reason
 Trong quá trình bật, đầu ra dòng điện ba pha không bình thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây điện ba pha của mối nối hay không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong mạch động cơ khớp không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp không.

## 0x113381 Mất pha chung 2 đầu ra 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mất pha chung 2 đầu ra

### Reason
 Trong quá trình bật, đầu ra dòng điện ba pha không bình thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây điện ba pha của mối nối hay không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong mạch động cơ khớp không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp không.

## 0x123381 Mất pha chung ba đầu ra 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mất pha chung ba đầu ra

### Reason
 Trong quá trình bật, đầu ra dòng điện ba pha không bình thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây điện ba pha của mối nối hay không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong mạch động cơ khớp không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp không.

## 0x133381 Mất pha chung bốn đầu ra 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mất pha chung bốn đầu ra

### Reason
 Trong quá trình bật, đầu ra dòng điện ba pha không bình thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây điện ba pha của mối nối hay không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong mạch động cơ khớp không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp không.

## 0x143381 Mất pha chung năm đầu ra 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mất pha chung năm đầu ra

### Reason
 Trong quá trình bật, đầu ra dòng điện ba pha không bình thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây điện ba pha của mối nối hay không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong mạch động cơ khớp không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp không.

## 0x153381 Mất pha sáu đầu ra chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mất pha sáu đầu ra chung

### Reason
 Trong quá trình bật, đầu ra dòng điện ba pha không bình thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây điện ba pha của mối nối hay không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong mạch động cơ khớp không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp không.

## 0x103130 Mất pha chung đầu vào 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mất pha chung đầu vào

### Reason
 Trong quá trình bật, đầu ra dòng điện ba pha không bình thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây điện ba pha của mối nối hay không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong mạch động cơ khớp không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp không.

## 0x113130 Mất pha chung hai đầu vào 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mất pha chung hai đầu vào

### Reason
 Trong quá trình bật, đầu ra dòng điện ba pha không bình thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây điện ba pha của mối nối hay không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong mạch động cơ khớp không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp không.

## 0x123130 Mất pha chung ba đầu vào 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mất pha chung ba đầu vào

### Reason
 Trong quá trình bật, đầu ra dòng điện ba pha không bình thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây điện ba pha của mối nối hay không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong mạch động cơ khớp không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp không.

## 0x133130 Mất pha chung bốn đầu vào 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mất pha chung bốn đầu vào

### Reason
 Trong quá trình bật, đầu ra dòng điện ba pha không bình thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây điện ba pha của mối nối hay không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong mạch động cơ khớp không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp không.

## 0x143130 Mất pha chung năm đầu vào 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mất pha chung năm đầu vào

### Reason
 Trong quá trình bật, đầu ra dòng điện ba pha không bình thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây điện ba pha của mối nối hay không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong mạch động cơ khớp không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp không.

## 0x153130 Mất pha sáu đầu vào chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Mất pha sáu đầu vào chung

### Reason
 Trong quá trình bật, đầu ra dòng điện ba pha không bình thường

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong hệ thống dây điện ba pha của mối nối hay không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong mạch động cơ khớp không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong tấm dẫn động khớp không.

## 0x105441 chung một lỗi kết nối nội bộ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 chung một lỗi kết nối nội bộ

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x115441 Lỗi kết nối nội bộ chung 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi kết nối nội bộ chung 2

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x125441 Liên ba lỗi kết nối nội bộ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên ba lỗi kết nối nội bộ

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x135441 chung bốn lỗi kết nối nội bộ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 chung bốn lỗi kết nối nội bộ

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x145441 liên năm lỗi kết nối nội bộ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 liên năm lỗi kết nối nội bộ

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x155441 Liên sáu lỗi kết nối nội bộ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên sáu lỗi kết nối nội bộ

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x105280 Khớp một lỗi tham số nội bộ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp một lỗi tham số nội bộ

### Reason
 Thông số servo vượt quá ngưỡng và lỗi này sẽ chỉ được báo cáo khi bật nguồn.

### Action
 Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số bên trong của khớp có bất thường không.

## 0x115280 Khớp 2 lỗi thông số bên trong 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 2 lỗi thông số bên trong

### Reason
 Thông số servo vượt quá ngưỡng và lỗi này sẽ chỉ được báo cáo khi bật nguồn.

### Action
 Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số bên trong của khớp có bất thường không.

## 0x125280 Khớp 3 lỗi thông số bên trong 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 3 lỗi thông số bên trong

### Reason
 Thông số servo vượt quá ngưỡng và lỗi này sẽ chỉ được báo cáo khi bật nguồn.

### Action
 Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số bên trong của khớp có bất thường không.

## 0x135280 Khớp 4 lỗi tham số nội bộ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp 4 lỗi tham số nội bộ

### Reason
 Thông số servo vượt quá ngưỡng và lỗi này sẽ chỉ được báo cáo khi bật nguồn.

### Action
 Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số bên trong của khớp có bất thường không.

## 0x145280 Liên năm lỗi tham số nội bộ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên năm lỗi tham số nội bộ

### Reason
 Thông số servo vượt quá ngưỡng và lỗi này sẽ chỉ được báo cáo khi bật nguồn.

### Action
 Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số bên trong của khớp có bất thường không.

## 0x155280 Liên kết sáu lỗi tham số nội bộ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên kết sáu lỗi tham số nội bộ

### Reason
 Thông số servo vượt quá ngưỡng và lỗi này sẽ chỉ được báo cáo khi bật nguồn.

### Action
 Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem các thông số bên trong của khớp có bất thường không.

## 0x105281 Tràn tính toán chung-PID 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tràn tính toán chung-PID

### Reason
 Hoạt động của Servo PID vượt quá giới hạn

### Action
 Liên hệ với nhân viên R&D để giải quyết

## 0x115281 Tràn tính toán PID chung 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tràn tính toán PID chung 2

### Reason
 Hoạt động của Servo PID vượt quá giới hạn

### Action
 Liên hệ với nhân viên R&D để giải quyết

## 0x125281 Tràn ba hoạt động PID chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tràn ba hoạt động PID chung

### Reason
 Hoạt động của Servo PID vượt quá giới hạn

### Action
 Liên hệ với nhân viên R&D để giải quyết

## 0x135281 Tràn tính toán PID chung 4 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tràn tính toán PID chung 4

### Reason
 Hoạt động của Servo PID vượt quá giới hạn

### Action
 Liên hệ với nhân viên R&D để giải quyết

## 0x145281 Tràn tính toán PID chung 5 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tràn tính toán PID chung 5

### Reason
 Hoạt động của Servo PID vượt quá giới hạn

### Action
 Liên hệ với nhân viên R&D để giải quyết

## 0x155281 Tràn tính toán PID chung 6 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tràn tính toán PID chung 6

### Reason
 Hoạt động của Servo PID vượt quá giới hạn

### Action
 Liên hệ với nhân viên R&D để giải quyết

## 0x105211 Lỗi lựa chọn mô hình chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi lựa chọn mô hình chung

### Reason
 Bảng điều khiển phần cứng không phù hợp với dòng sản phẩm servo Zu

### Action
 Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem có bất kỳ sự bất thường nào trong phiên bản phần cứng chung và thông số nhóm servo hay không.

## 0x115211 Lỗi lựa chọn mô hình chung 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi lựa chọn mô hình chung 2

### Reason
 Bảng điều khiển phần cứng không phù hợp với dòng sản phẩm servo Zu

### Action
 Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem có bất kỳ sự bất thường nào trong phiên bản phần cứng chung và thông số nhóm servo hay không.

## 0x125211 Lỗi lựa chọn mô hình chung ba 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi lựa chọn mô hình chung ba

### Reason
 Bảng điều khiển phần cứng không phù hợp với dòng sản phẩm servo Zu

### Action
 Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem có bất kỳ sự bất thường nào trong phiên bản phần cứng chung và thông số nhóm servo hay không.

## 0x135211 Lỗi lựa chọn mô hình chung bốn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi lựa chọn mô hình chung bốn

### Reason
 Bảng điều khiển phần cứng không phù hợp với dòng sản phẩm servo Zu

### Action
 Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem có bất kỳ sự bất thường nào trong phiên bản phần cứng chung và thông số nhóm servo hay không.

## 0x145211 Lỗi lựa chọn mô hình chung năm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi lựa chọn mô hình chung năm

### Reason
 Bảng điều khiển phần cứng không phù hợp với dòng sản phẩm servo Zu

### Action
 Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem có bất kỳ sự bất thường nào trong phiên bản phần cứng chung và thông số nhóm servo hay không.

## 0x155211 Liên sáu lỗi lựa chọn mô hình 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên sáu lỗi lựa chọn mô hình

### Reason
 Bảng điều khiển phần cứng không phù hợp với dòng sản phẩm servo Zu

### Action
 Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem có bất kỳ sự bất thường nào trong phiên bản phần cứng chung và thông số nhóm servo hay không.

## 0x104210 động cơ chung quá nóng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 động cơ chung quá nóng

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x114210 Động cơ khớp 2 quá nhiệt 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Động cơ khớp 2 quá nhiệt

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x124210 Khớp ba động cơ quá nóng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp ba động cơ quá nóng

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x134210 Khớp bốn động cơ quá nóng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp bốn động cơ quá nóng

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x144210 Khớp năm động cơ quá nhiệt 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp năm động cơ quá nhiệt

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x154210 Khớp sáu động cơ quá nhiệt 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp sáu động cơ quá nhiệt

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x105210 Cài đặt tham số của khớp nối không phù hợp với sức mạnh của phần cứng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Cài đặt tham số của khớp nối không phù hợp với sức mạnh của phần cứng

### Reason
 Bảng điều khiển phần cứng, mô hình thương hiệu động cơ, loạt sản phẩm nhóm servo, ba cái này không khớp

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong các thông số sản xuất của khớp không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bảng truyền động chung có bất thường không.

## 0x115210 Cài đặt tham số liên kết 2 không phù hợp với sức mạnh phần cứng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Cài đặt tham số liên kết 2 không phù hợp với sức mạnh phần cứng

### Reason
 Bảng điều khiển phần cứng, mô hình thương hiệu động cơ, loạt sản phẩm nhóm servo, ba cái này không khớp

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong các thông số sản xuất của khớp không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bảng truyền động chung có bất thường không.

## 0x125210 Cài đặt ba tham số chung không phù hợp với sức mạnh phần cứng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Cài đặt ba tham số chung không phù hợp với sức mạnh phần cứng

### Reason
 Bảng điều khiển phần cứng, mô hình thương hiệu động cơ, loạt sản phẩm nhóm servo, ba cái này không khớp

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong các thông số sản xuất của khớp không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bảng truyền động chung có bất thường không.

## 0x135210 Cài đặt bốn tham số chung không khớp với sức mạnh phần cứng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Cài đặt bốn tham số chung không khớp với sức mạnh phần cứng

### Reason
 Bảng điều khiển phần cứng, mô hình thương hiệu động cơ, loạt sản phẩm nhóm servo, ba cái này không khớp

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong các thông số sản xuất của khớp không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bảng truyền động chung có bất thường không.

## 0x145210 Cài đặt năm tham số chung không khớp với sức mạnh phần cứng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Cài đặt năm tham số chung không khớp với sức mạnh phần cứng

### Reason
 Bảng điều khiển phần cứng, mô hình thương hiệu động cơ, loạt sản phẩm nhóm servo, ba cái này không khớp

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong các thông số sản xuất của khớp không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bảng truyền động chung có bất thường không.

## 0x155210 Cài đặt sáu tham số chung không phù hợp với sức mạnh phần cứng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Cài đặt sáu tham số chung không phù hợp với sức mạnh phần cứng

### Reason
 Bảng điều khiển phần cứng, mô hình thương hiệu động cơ, loạt sản phẩm nhóm servo, ba cái này không khớp

### Action
 1. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong các thông số sản xuất của khớp không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bảng truyền động chung có bất thường không.

## 0x105282 chung một lỗi EEPROM 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 chung một lỗi EEPROM

### Reason
 Lỗi đọc và ghi chip EEPROM phần cứng

### Action
 1. Vui lòng thử bật và tắt nguồn robot nhiều lần để kiểm tra xem có sự dao động về thời gian hay không. Nếu sự cố vẫn tồn tại, vui lòng liên hệ với nhân viên kỹ thuật. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bảng truyền động chung có bất thường không.

## 0x115282 liên hai lỗi EEPROM 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 liên hai lỗi EEPROM

### Reason
 Lỗi đọc và ghi chip EEPROM phần cứng

### Action
 1. Vui lòng thử bật và tắt nguồn robot nhiều lần để kiểm tra xem có sự dao động về thời gian hay không. Nếu sự cố vẫn tồn tại, vui lòng liên hệ với nhân viên kỹ thuật. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bảng truyền động chung có bất thường không.

## 0x125282 Lỗi 3 EEPROM chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi 3 EEPROM chung

### Reason
 Lỗi đọc và ghi chip EEPROM phần cứng

### Action
 1. Vui lòng thử bật và tắt nguồn robot nhiều lần để kiểm tra xem có sự dao động về thời gian hay không. Nếu sự cố vẫn tồn tại, vui lòng liên hệ với nhân viên kỹ thuật. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bảng truyền động chung có bất thường không.

## 0x135282 Lỗi Quad EEPROM chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi Quad EEPROM chung

### Reason
 Lỗi đọc và ghi chip EEPROM phần cứng

### Action
 1. Vui lòng thử bật và tắt nguồn robot nhiều lần để kiểm tra xem có sự dao động về thời gian hay không. Nếu sự cố vẫn tồn tại, vui lòng liên hệ với nhân viên kỹ thuật. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bảng truyền động chung có bất thường không.

## 0x145282 Lỗi 5 EEPROM chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi 5 EEPROM chung

### Reason
 Lỗi đọc và ghi chip EEPROM phần cứng

### Action
 1. Vui lòng thử bật và tắt nguồn robot nhiều lần để kiểm tra xem có sự dao động về thời gian hay không. Nếu sự cố vẫn tồn tại, vui lòng liên hệ với nhân viên kỹ thuật. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bảng truyền động chung có bất thường không.

## 0x155282 Sáu lỗi EEPROM chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Sáu lỗi EEPROM chung

### Reason
 Lỗi đọc và ghi chip EEPROM phần cứng

### Action
 1. Vui lòng thử bật và tắt nguồn robot nhiều lần để kiểm tra xem có sự dao động về thời gian hay không. Nếu sự cố vẫn tồn tại, vui lòng liên hệ với nhân viên kỹ thuật. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bảng truyền động chung có bất thường không.

## 0x105283 Không thể kích hoạt trên liên kết 1 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể kích hoạt trên liên kết 1

### Reason
 Trong quá trình kích hoạt, việc kích hoạt không thành công do các lỗi hệ thống khác

### Action
 Vui lòng kiểm tra xem có thông báo lỗi nào khác trong hệ thống hay không, sau đó thực hiện thao tác kích hoạt sau khi xử lý các thông báo lỗi khác.

## 0x115283 Không thể kích hoạt trên liên kết 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể kích hoạt trên liên kết 2

### Reason
 Trong quá trình kích hoạt, việc kích hoạt không thành công do các lỗi hệ thống khác

### Action
 Vui lòng kiểm tra xem có thông báo lỗi nào khác trong hệ thống hay không, sau đó thực hiện thao tác kích hoạt sau khi xử lý các thông báo lỗi khác.

## 0x125283 Không thể kích hoạt trên liên kết 3 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể kích hoạt trên liên kết 3

### Reason
 Trong quá trình kích hoạt, việc kích hoạt không thành công do các lỗi hệ thống khác

### Action
 Vui lòng kiểm tra xem có thông báo lỗi nào khác trong hệ thống hay không, sau đó thực hiện thao tác kích hoạt sau khi xử lý các thông báo lỗi khác.

## 0x135283 Không kích hoạt được liên kết bốn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không kích hoạt được liên kết bốn

### Reason
 Trong quá trình kích hoạt, việc kích hoạt không thành công do các lỗi hệ thống khác

### Action
 Vui lòng kiểm tra xem có thông báo lỗi nào khác trong hệ thống hay không, sau đó thực hiện thao tác kích hoạt sau khi xử lý các thông báo lỗi khác.

## 0x145283 Không thể kích hoạt trên khớp 5 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể kích hoạt trên khớp 5

### Reason
 Trong quá trình kích hoạt, việc kích hoạt không thành công do các lỗi hệ thống khác

### Action
 Vui lòng kiểm tra xem có thông báo lỗi nào khác trong hệ thống hay không, sau đó thực hiện thao tác kích hoạt sau khi xử lý các thông báo lỗi khác.

## 0x155283 Không thể kích hoạt trên khớp 6 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể kích hoạt trên khớp 6

### Reason
 Trong quá trình kích hoạt, việc kích hoạt không thành công do các lỗi hệ thống khác

### Action
 Vui lòng kiểm tra xem có thông báo lỗi nào khác trong hệ thống hay không, sau đó thực hiện thao tác kích hoạt sau khi xử lý các thông báo lỗi khác.

## 0x106010 Nhiệt độ bộ mã hóa của khớp một quá nóng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Nhiệt độ bộ mã hóa của khớp một quá nóng

### Reason
 Trạng thái nhiệt độ bộ mã hóa là bất thường

### Action
 1. Vui lòng kiểm tra xem nhiệt độ của khớp có vượt quá yêu cầu của phạm vi hoạt động hay không và vui lòng giảm các điều kiện hoạt động. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong khớp nối hoặc bộ mã hóa hay không.

## 0x116010 Nhiệt độ của bộ mã hóa khớp 2 quá nóng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Nhiệt độ của bộ mã hóa khớp 2 quá nóng

### Reason
 Trạng thái nhiệt độ bộ mã hóa là bất thường

### Action
 1. Vui lòng kiểm tra xem nhiệt độ của khớp có vượt quá yêu cầu của phạm vi hoạt động hay không và vui lòng giảm các điều kiện hoạt động. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong khớp nối hoặc bộ mã hóa hay không.

## 0x126010 Nhiệt độ ba bộ mã hóa chung quá nóng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Nhiệt độ ba bộ mã hóa chung quá nóng

### Reason
 Trạng thái nhiệt độ bộ mã hóa là bất thường

### Action
 1. Vui lòng kiểm tra xem nhiệt độ của khớp có vượt quá yêu cầu của phạm vi hoạt động hay không và vui lòng giảm các điều kiện hoạt động. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong khớp nối hoặc bộ mã hóa hay không.

## 0x136010 Nhiệt độ bộ mã hóa chung bốn quá nóng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Nhiệt độ bộ mã hóa chung bốn quá nóng

### Reason
 Trạng thái nhiệt độ bộ mã hóa là bất thường

### Action
 1. Vui lòng kiểm tra xem nhiệt độ của khớp có vượt quá yêu cầu của phạm vi hoạt động hay không và vui lòng giảm các điều kiện hoạt động. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong khớp nối hoặc bộ mã hóa hay không.

## 0x146010 Nhiệt độ bộ mã hóa khớp năm quá nóng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Nhiệt độ bộ mã hóa khớp năm quá nóng

### Reason
 Trạng thái nhiệt độ bộ mã hóa là bất thường

### Action
 1. Vui lòng kiểm tra xem nhiệt độ của khớp có vượt quá yêu cầu của phạm vi hoạt động hay không và vui lòng giảm các điều kiện hoạt động. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong khớp nối hoặc bộ mã hóa hay không.

## 0x156010 Nhiệt độ bộ mã hóa chung sáu quá nóng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Nhiệt độ bộ mã hóa chung sáu quá nóng

### Reason
 Trạng thái nhiệt độ bộ mã hóa là bất thường

### Action
 1. Vui lòng kiểm tra xem nhiệt độ của khớp có vượt quá yêu cầu của phạm vi hoạt động hay không và vui lòng giảm các điều kiện hoạt động. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem có bất kỳ sự bất thường nào trong khớp nối hoặc bộ mã hóa hay không.

## 0x107180 Quá tải động cơ chung (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá tải động cơ chung (I2T)

### Reason
 Động cơ tạo ra một dòng điện lớn và nó tồn tại trong một thời gian

### Action
 1. Vui lòng kiểm tra xem có va chạm hay không trước khi robot báo động quá tải. 2. Vui lòng kiểm tra xem tải trọng thực tế của khớp có vượt quá tải trọng danh định của rô-bốt hay không. 3. Vui lòng liên hệ kỹ thuật viên để kiểm tra các thông số của khớp báo động. 4. Vui lòng kiểm tra xem cơ chế phanh khớp có bất thường không bằng chế độ kéo. 5. Hãy liên hệ với kỹ thuật viên để kiểm tra xem mối nối có bị kẹt cơ học hay không. 6. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem số đọc của bộ mã hóa ABZ rôto có bất thường không.

## 0x117180 Quá tải động cơ nối 2 (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá tải động cơ nối 2 (I2T)

### Reason
 Động cơ tạo ra một dòng điện lớn và nó tồn tại trong một thời gian

### Action
 1. Vui lòng kiểm tra xem có va chạm hay không trước khi robot báo động quá tải. 2. Vui lòng kiểm tra xem tải trọng thực tế của khớp có vượt quá tải trọng danh định của rô-bốt hay không. 3. Vui lòng liên hệ kỹ thuật viên để kiểm tra các thông số của khớp báo động. 4. Vui lòng kiểm tra xem cơ chế phanh khớp có bất thường không bằng chế độ kéo. 5. Hãy liên hệ với kỹ thuật viên để kiểm tra xem mối nối có bị kẹt cơ học hay không. 6. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem số đọc của bộ mã hóa ABZ rôto có bất thường không.

## 0x127180 Quá tải chung ba động cơ (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá tải chung ba động cơ (I2T)

### Reason
 Động cơ tạo ra một dòng điện lớn và nó tồn tại trong một thời gian

### Action
 1. Vui lòng kiểm tra xem có va chạm hay không trước khi robot báo động quá tải. 2. Vui lòng kiểm tra xem tải trọng thực tế của khớp có vượt quá tải trọng danh định của rô-bốt hay không. 3. Vui lòng liên hệ kỹ thuật viên để kiểm tra các thông số của khớp báo động. 4. Vui lòng kiểm tra xem cơ chế phanh khớp có bất thường không bằng chế độ kéo. 5. Hãy liên hệ với kỹ thuật viên để kiểm tra xem mối nối có bị kẹt cơ học hay không. 6. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem số đọc của bộ mã hóa ABZ rôto có bất thường không.

## 0x137180 Quá tải chung bốn động cơ (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá tải chung bốn động cơ (I2T)

### Reason
 Động cơ tạo ra một dòng điện lớn và nó tồn tại trong một thời gian

### Action
 1. Vui lòng kiểm tra xem có va chạm hay không trước khi robot báo động quá tải. 2. Vui lòng kiểm tra xem tải trọng thực tế của khớp có vượt quá tải trọng danh định của rô-bốt hay không. 3. Vui lòng liên hệ kỹ thuật viên để kiểm tra các thông số của khớp báo động. 4. Vui lòng kiểm tra xem cơ chế phanh khớp có bất thường không bằng chế độ kéo. 5. Hãy liên hệ với kỹ thuật viên để kiểm tra xem mối nối có bị kẹt cơ học hay không. 6. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem số đọc của bộ mã hóa ABZ rôto có bất thường không.

## 0x147180 Quá tải chung năm động cơ (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá tải chung năm động cơ (I2T)

### Reason
 Động cơ tạo ra một dòng điện lớn và nó tồn tại trong một thời gian

### Action
 1. Vui lòng kiểm tra xem có va chạm hay không trước khi robot báo động quá tải. 2. Vui lòng kiểm tra xem tải trọng thực tế của khớp có vượt quá tải trọng danh định của rô-bốt hay không. 3. Vui lòng liên hệ kỹ thuật viên để kiểm tra các thông số của khớp báo động. 4. Vui lòng kiểm tra xem cơ chế phanh khớp có bất thường không bằng chế độ kéo. 5. Hãy liên hệ với kỹ thuật viên để kiểm tra xem mối nối có bị kẹt cơ học hay không. 6. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem số đọc của bộ mã hóa ABZ rôto có bất thường không.

## 0x157180 Quá tải chung sáu động cơ (I2T) 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Quá tải chung sáu động cơ (I2T)

### Reason
 Động cơ tạo ra một dòng điện lớn và nó tồn tại trong một thời gian

### Action
 1. Vui lòng kiểm tra xem có va chạm hay không trước khi robot báo động quá tải. 2. Vui lòng kiểm tra xem tải trọng thực tế của khớp có vượt quá tải trọng danh định của rô-bốt hay không. 3. Vui lòng liên hệ kỹ thuật viên để kiểm tra các thông số của khớp báo động. 4. Vui lòng kiểm tra xem cơ chế phanh khớp có bất thường không bằng chế độ kéo. 5. Hãy liên hệ với kỹ thuật viên để kiểm tra xem mối nối có bị kẹt cơ học hay không. 6. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem số đọc của bộ mã hóa ABZ rôto có bất thường không.

## 0x107181 Hỏng phanh chung một động cơ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hỏng phanh chung một động cơ

### Reason
 Solenoid không được phát hiện

### Action
 1. Vui lòng kiểm tra xem hệ thống dây điện của khớp điện từ có bất thường không. 2. Vui lòng kiểm tra xem giá trị điện trở của nam châm điện đo có bình thường không.

## 0x117181 Hỏng phanh động cơ khớp 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hỏng phanh động cơ khớp 2

### Reason
 Solenoid không được phát hiện

### Action
 1. Vui lòng kiểm tra xem hệ thống dây điện của khớp điện từ có bất thường không. 2. Vui lòng kiểm tra xem giá trị điện trở của nam châm điện đo có bình thường không.

## 0x127181 Lỗi phanh chung ba động cơ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi phanh chung ba động cơ

### Reason
 Solenoid không được phát hiện

### Action
 1. Vui lòng kiểm tra xem hệ thống dây điện của khớp điện từ có bất thường không. 2. Vui lòng kiểm tra xem giá trị điện trở của nam châm điện đo có bình thường không.

## 0x137181 Lỗi phanh chung bốn động cơ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi phanh chung bốn động cơ

### Reason
 Solenoid không được phát hiện

### Action
 1. Vui lòng kiểm tra xem hệ thống dây điện của khớp điện từ có bất thường không. 2. Vui lòng kiểm tra xem giá trị điện trở của nam châm điện đo có bình thường không.

## 0x147181 Lỗi phanh động cơ năm khớp 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi phanh động cơ năm khớp

### Reason
 Solenoid không được phát hiện

### Action
 1. Vui lòng kiểm tra xem hệ thống dây điện của khớp điện từ có bất thường không. 2. Vui lòng kiểm tra xem giá trị điện trở của nam châm điện đo có bình thường không.

## 0x157181 Khớp sáu động cơ phanh thất bại 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp sáu động cơ phanh thất bại

### Reason
 Solenoid không được phát hiện

### Action
 1. Vui lòng kiểm tra xem hệ thống dây điện của khớp điện từ có bất thường không. 2. Vui lòng kiểm tra xem giá trị điện trở của nam châm điện đo có bình thường không.

## 0x107182 đảo ngược tiêm tần số cao 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 đảo ngược tiêm tần số cao

### Reason
 Hướng cực từ thực tế của động cơ không phù hợp với tính toán phun xung và xảy ra hiện tượng điều khiển bất thường

### Action
 1. Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số của động cơ có đúng không. 2. Vui lòng kiểm tra xem đấu dây thứ tự pha của động cơ có đúng không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem tấm truyền động khớp có bất thường không.

## 0x117182 khớp hai tần số cao tiêm đảo ngược 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 khớp hai tần số cao tiêm đảo ngược

### Reason
 Hướng cực từ thực tế của động cơ không phù hợp với tính toán phun xung và xảy ra hiện tượng điều khiển bất thường

### Action
 1. Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số của động cơ có đúng không. 2. Vui lòng kiểm tra xem đấu dây thứ tự pha của động cơ có đúng không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem tấm truyền động khớp có bất thường không.

## 0x127182 Khớp ba tần số cao tiêm đảo ngược 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp ba tần số cao tiêm đảo ngược

### Reason
 Hướng cực từ thực tế của động cơ không phù hợp với tính toán phun xung và xảy ra hiện tượng điều khiển bất thường

### Action
 1. Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số của động cơ có đúng không. 2. Vui lòng kiểm tra xem đấu dây thứ tự pha của động cơ có đúng không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem tấm truyền động khớp có bất thường không.

## 0x137182 Khớp nối bốn tần số cao đảo ngược 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khớp nối bốn tần số cao đảo ngược

### Reason
 Hướng cực từ thực tế của động cơ không phù hợp với tính toán phun xung và xảy ra hiện tượng điều khiển bất thường

### Action
 1. Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số của động cơ có đúng không. 2. Vui lòng kiểm tra xem đấu dây thứ tự pha của động cơ có đúng không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem tấm truyền động khớp có bất thường không.

## 0x147182 Liên năm đảo ngược tiêm tần số cao 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên năm đảo ngược tiêm tần số cao

### Reason
 Hướng cực từ thực tế của động cơ không phù hợp với tính toán phun xung và xảy ra hiện tượng điều khiển bất thường

### Action
 1. Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số của động cơ có đúng không. 2. Vui lòng kiểm tra xem đấu dây thứ tự pha của động cơ có đúng không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem tấm truyền động khớp có bất thường không.

## 0x157182 Liên kết sáu mũi tiêm tần số cao đảo ngược 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên kết sáu mũi tiêm tần số cao đảo ngược

### Reason
 Hướng cực từ thực tế của động cơ không phù hợp với tính toán phun xung và xảy ra hiện tượng điều khiển bất thường

### Action
 1. Vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem các thông số của động cơ có đúng không. 2. Vui lòng kiểm tra xem đấu dây thứ tự pha của động cơ có đúng không. 3. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem tấm truyền động khớp có bất thường không.

## 0x107386 Lỗi bên trong bộ mã hóa chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi bên trong bộ mã hóa chung

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x117386 Lỗi bên trong bộ mã hóa chung 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi bên trong bộ mã hóa chung 2

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x127386 Lỗi bên trong bộ mã hóa ba 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi bên trong bộ mã hóa ba

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x137386 Lỗi bên trong bộ mã hóa bốn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi bên trong bộ mã hóa bốn

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x147386 Lỗi bên trong bộ mã hóa năm 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi bên trong bộ mã hóa năm

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x157386 Lỗi bên trong bộ mã hóa sáu 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi bên trong bộ mã hóa sáu

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem servo có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x107580 vượt quá động học 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 vượt quá động học

### Reason
 Mô-men xoắn Feedforward vượt ngưỡng Servo

### Action
 Liên hệ với bộ điều khiển để xử lý

## 0x117580 Giới hạn động học của khớp 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Giới hạn động học của khớp 2

### Reason
 Mô-men xoắn Feedforward vượt ngưỡng Servo

### Action
 Liên hệ với bộ điều khiển để xử lý

## 0x127580 Trikinetic Overrun chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Trikinetic Overrun chung

### Reason
 Mô-men xoắn Feedforward vượt ngưỡng Servo

### Action
 Liên hệ với bộ điều khiển để xử lý

## 0x137580 Chung bốn động tràn ngập 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Chung bốn động tràn ngập

### Reason
 Mô-men xoắn Feedforward vượt ngưỡng Servo

### Action
 Liên hệ với bộ điều khiển để xử lý

## 0x147580 Liên ngũ động tràn ngập 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên ngũ động tràn ngập

### Reason
 Mô-men xoắn Feedforward vượt ngưỡng Servo

### Action
 Liên hệ với bộ điều khiển để xử lý

## 0x157580 Liên sáu động tràn ngập 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Liên sáu động tràn ngập

### Reason
 Mô-men xoắn Feedforward vượt ngưỡng Servo

### Action
 Liên hệ với bộ điều khiển để xử lý

## 0x103211 Lỗi cấp nguồn bảng điều khiển chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cấp nguồn bảng điều khiển chung

### Reason
 Bảng điều khiển phần cứng bị hỏng

### Action
 Liên Hệ Xử Lý Điện

## 0x113211 Lỗi cấp nguồn bảng điều khiển chung 2 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cấp nguồn bảng điều khiển chung 2

### Reason
 Bảng điều khiển phần cứng bị hỏng

### Action
 Liên Hệ Xử Lý Điện

## 0x123211 Lỗi cung cấp điện cho ba ổ đĩa chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cung cấp điện cho ba ổ đĩa chung

### Reason
 Bảng điều khiển phần cứng bị hỏng

### Action
 Liên Hệ Xử Lý Điện

## 0x133211 Lỗi cung cấp điện bốn ổ chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cung cấp điện bốn ổ chung

### Reason
 Bảng điều khiển phần cứng bị hỏng

### Action
 Liên Hệ Xử Lý Điện

## 0x143211 Lỗi cung cấp điện cho bảng điều khiển chung năm ổ đĩa 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cung cấp điện cho bảng điều khiển chung năm ổ đĩa

### Reason
 Bảng điều khiển phần cứng bị hỏng

### Action
 Liên Hệ Xử Lý Điện

## 0x153211 Lỗi cung cấp điện cho sáu ổ đĩa chung 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi cung cấp điện cho sáu ổ đĩa chung

### Reason
 Bảng điều khiển phần cứng bị hỏng

### Action
 Liên Hệ Xử Lý Điện

## 0x107388 Tín hiệu từ tính của bộ mã hóa chung 1 là bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tín hiệu từ tính của bộ mã hóa chung 1 là bất thường

### Reason
 Lỗi biên độ tín hiệu bộ mã hóa, lỗi chế độ từ tính, mất tín hiệu, tín hiệu bất thường

### Action
 1. Vui lòng kiểm tra xem lỗi có được báo cáo cho khớp cố định hay không và vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem khớp hoặc bộ mã hóa có bất thường không. 2. Vui lòng kiểm tra xem có bất kỳ nhiễu tín hiệu bên ngoài hoặc tín hiệu từ tính nào trong môi trường làm việc hoặc cơ thể của rô-bốt hay không.

## 0x117388 Tín hiệu từ của bộ mã hóa thứ hai của khớp là bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tín hiệu từ của bộ mã hóa thứ hai của khớp là bất thường

### Reason
 Lỗi biên độ tín hiệu bộ mã hóa, lỗi chế độ từ tính, mất tín hiệu, tín hiệu bất thường

### Action
 1. Vui lòng kiểm tra xem lỗi có được báo cáo cho khớp cố định hay không và vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem khớp hoặc bộ mã hóa có bất thường không. 2. Vui lòng kiểm tra xem có bất kỳ nhiễu tín hiệu bên ngoài hoặc tín hiệu từ tính nào trong môi trường làm việc hoặc cơ thể của rô-bốt hay không.

## 0x127388 Tín hiệu từ của bộ mã hóa khớp ba là bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tín hiệu từ của bộ mã hóa khớp ba là bất thường

### Reason
 Lỗi biên độ tín hiệu bộ mã hóa, lỗi chế độ từ tính, mất tín hiệu, tín hiệu bất thường

### Action
 1. Vui lòng kiểm tra xem lỗi có được báo cáo cho khớp cố định hay không và vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem khớp hoặc bộ mã hóa có bất thường không. 2. Vui lòng kiểm tra xem có bất kỳ nhiễu tín hiệu bên ngoài hoặc tín hiệu từ tính nào trong môi trường làm việc hoặc cơ thể của rô-bốt hay không.

## 0x137388 Tín hiệu từ tính của bốn bộ mã hóa của khớp là bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tín hiệu từ tính của bốn bộ mã hóa của khớp là bất thường

### Reason
 Lỗi biên độ tín hiệu bộ mã hóa, lỗi chế độ từ tính, mất tín hiệu, tín hiệu bất thường

### Action
 1. Vui lòng kiểm tra xem lỗi có được báo cáo cho khớp cố định hay không và vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem khớp hoặc bộ mã hóa có bất thường không. 2. Vui lòng kiểm tra xem có bất kỳ nhiễu tín hiệu bên ngoài hoặc tín hiệu từ tính nào trong môi trường làm việc hoặc cơ thể của rô-bốt hay không.

## 0x147388 Tín hiệu từ của bộ mã hóa năm khớp là bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tín hiệu từ của bộ mã hóa năm khớp là bất thường

### Reason
 Lỗi biên độ tín hiệu bộ mã hóa, lỗi chế độ từ tính, mất tín hiệu, tín hiệu bất thường

### Action
 1. Vui lòng kiểm tra xem lỗi có được báo cáo cho khớp cố định hay không và vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem khớp hoặc bộ mã hóa có bất thường không. 2. Vui lòng kiểm tra xem có bất kỳ nhiễu tín hiệu bên ngoài hoặc tín hiệu từ tính nào trong môi trường làm việc hoặc cơ thể của rô-bốt hay không.

## 0x157388 Tín hiệu từ của bộ mã hóa sáu khớp là bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Tín hiệu từ của bộ mã hóa sáu khớp là bất thường

### Reason
 Lỗi biên độ tín hiệu bộ mã hóa, lỗi chế độ từ tính, mất tín hiệu, tín hiệu bất thường

### Action
 1. Vui lòng kiểm tra xem lỗi có được báo cáo cho khớp cố định hay không và vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra xem khớp hoặc bộ mã hóa có bất thường không. 2. Vui lòng kiểm tra xem có bất kỳ nhiễu tín hiệu bên ngoài hoặc tín hiệu từ tính nào trong môi trường làm việc hoặc cơ thể của rô-bốt hay không.

## 0x108000 Sai lệch một vị trí khớp - dừng bảo vệ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Sai lệch một vị trí khớp - dừng bảo vệ

### Reason
 Phát hiện va chạm dựa trên vị trí servo sau lỗi

### Action
 1. Vui lòng kiểm tra xem robot có va chạm không. 2. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 3. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 4. Vui lòng kiểm tra xem cài đặt tải của rô-bốt có chính xác không.

## 0x118000 Sai lệch vị trí khớp 2 - dừng bảo vệ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Sai lệch vị trí khớp 2 - dừng bảo vệ

### Reason
 Phát hiện va chạm dựa trên vị trí servo sau lỗi

### Action
 1. Vui lòng kiểm tra xem robot có va chạm không. 2. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 3. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 4. Vui lòng kiểm tra xem cài đặt tải của rô-bốt có chính xác không.

## 0x128000 Sai lệch ba vị trí chung - dừng bảo vệ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Sai lệch ba vị trí chung - dừng bảo vệ

### Reason
 Phát hiện va chạm dựa trên vị trí servo sau lỗi

### Action
 1. Vui lòng kiểm tra xem robot có va chạm không. 2. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 3. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 4. Vui lòng kiểm tra xem cài đặt tải của rô-bốt có chính xác không.

## 0x138000 Khớp bốn vị trí lệch - dừng bảo vệ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Khớp bốn vị trí lệch - dừng bảo vệ

### Reason
 Phát hiện va chạm dựa trên vị trí servo sau lỗi

### Action
 1. Vui lòng kiểm tra xem robot có va chạm không. 2. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 3. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 4. Vui lòng kiểm tra xem cài đặt tải của rô-bốt có chính xác không.

## 0x148000 Sai lệch năm vị trí khớp - dừng bảo vệ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Sai lệch năm vị trí khớp - dừng bảo vệ

### Reason
 Phát hiện va chạm dựa trên vị trí servo sau lỗi

### Action
 1. Vui lòng kiểm tra xem robot có va chạm không. 2. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 3. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 4. Vui lòng kiểm tra xem cài đặt tải của rô-bốt có chính xác không.

## 0x158000 Sai lệch sáu vị trí khớp - dừng bảo vệ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Sai lệch sáu vị trí khớp - dừng bảo vệ

### Reason
 Phát hiện va chạm dựa trên vị trí servo sau lỗi

### Action
 1. Vui lòng kiểm tra xem robot có va chạm không. 2. Vui lòng kiểm tra xem khả năng tăng tốc của chương trình có được đặt quá cao hay không. 3. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong cài đặt tham số của quá trình chuyển đoạn chuyển động hay không. 4. Vui lòng kiểm tra xem cài đặt tải của rô-bốt có chính xác không.

## 0x108001 Báo động lệch vị trí khớp 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Báo động lệch vị trí khớp

### Reason
 Phát hiện va chạm dựa trên vị trí servo sau lỗi

### Action
 1. Vui lòng kiểm tra xem robot có va chạm không. 2. Vui lòng kiểm tra xem gia tốc chuyển động của robot có được đặt quá cao không. 3. Vui lòng kiểm tra xem tải trọng của robot có vượt quá phạm vi yêu cầu hay không. 4. Vui lòng kiểm tra xem tư thế cài đặt của robot trong phần mềm có phù hợp với tư thế thực tế hay không. 5. Vui lòng kiểm tra xem chuyển đoạn chuyển động có được sử dụng không chính xác trong quá trình chuyển động hay không.

## 0x118001 Báo động lệch vị trí khớp 2 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Báo động lệch vị trí khớp 2

### Reason
 Phát hiện va chạm dựa trên vị trí servo sau lỗi

### Action
 1. Vui lòng kiểm tra xem robot có va chạm không. 2. Vui lòng kiểm tra xem gia tốc chuyển động của robot có được đặt quá cao không. 3. Vui lòng kiểm tra xem tải trọng của robot có vượt quá phạm vi yêu cầu hay không. 4. Vui lòng kiểm tra xem tư thế cài đặt của robot trong phần mềm có phù hợp với tư thế thực tế hay không. 5. Vui lòng kiểm tra xem chuyển đoạn chuyển động có được sử dụng không chính xác trong quá trình chuyển động hay không.

## 0x128001 Báo động lệch ba vị trí chung 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Báo động lệch ba vị trí chung

### Reason
 Phát hiện va chạm dựa trên vị trí servo sau lỗi

### Action
 1. Vui lòng kiểm tra xem robot có va chạm không. 2. Vui lòng kiểm tra xem gia tốc chuyển động của robot có được đặt quá cao không. 3. Vui lòng kiểm tra xem tải trọng của robot có vượt quá phạm vi yêu cầu hay không. 4. Vui lòng kiểm tra xem tư thế cài đặt của robot trong phần mềm có phù hợp với tư thế thực tế hay không. 5. Vui lòng kiểm tra xem chuyển đoạn chuyển động có được sử dụng không chính xác trong quá trình chuyển động hay không.

## 0x138001 Khớp bốn vị trí lệch báo động 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Khớp bốn vị trí lệch báo động

### Reason
 Phát hiện va chạm dựa trên vị trí servo sau lỗi

### Action
 1. Vui lòng kiểm tra xem robot có va chạm không. 2. Vui lòng kiểm tra xem gia tốc chuyển động của robot có được đặt quá cao không. 3. Vui lòng kiểm tra xem tải trọng của robot có vượt quá phạm vi yêu cầu hay không. 4. Vui lòng kiểm tra xem tư thế cài đặt của robot trong phần mềm có phù hợp với tư thế thực tế hay không. 5. Vui lòng kiểm tra xem chuyển đoạn chuyển động có được sử dụng không chính xác trong quá trình chuyển động hay không.

## 0x148001 Báo động lệch năm vị trí chung 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Báo động lệch năm vị trí chung

### Reason
 Phát hiện va chạm dựa trên vị trí servo sau lỗi

### Action
 1. Vui lòng kiểm tra xem robot có va chạm không. 2. Vui lòng kiểm tra xem gia tốc chuyển động của robot có được đặt quá cao không. 3. Vui lòng kiểm tra xem tải trọng của robot có vượt quá phạm vi yêu cầu hay không. 4. Vui lòng kiểm tra xem tư thế cài đặt của robot trong phần mềm có phù hợp với tư thế thực tế hay không. 5. Vui lòng kiểm tra xem chuyển đoạn chuyển động có được sử dụng không chính xác trong quá trình chuyển động hay không.

## 0x158001 Sáu vị trí khớp bị lệch khỏi báo động 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Sáu vị trí khớp bị lệch khỏi báo động

### Reason
 Dựa trên vị trí servo theo lỗi để xác định phát hiện va chạm

### Action
 1. Kiểm tra xem robot có gửi va chạm hay không.
2. Vui lòng kiểm tra xem gia tốc chuyển động robot có được đặt quá nhiều hay không.
3. Kiểm tra xem robot có tải nằm ngoài phạm vi yêu cầu hay không.
4. Kiểm tra xem tư thế cài đặt robot trong phần mềm có phù hợp với tư thế thực tế hay không.
5. Kiểm tra xem chuyển động có bị lỗi trong chuyển động hay không.

## 0x105201 joint 1 parameter locked warning 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 joint 1 parameter locked warning

### Reason
 

### Action
 

## 0x115201 joint 2 parameter locked warning 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 joint 2 parameter locked warning

### Reason
 

### Action
 

## 0x125201 joint 3 parameter locked warning 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 joint 3 parameter locked warning

### Reason
 

### Action
 

## 0x135201 joint 4 parameter locked warning 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 joint 4 parameter locked warning

### Reason
 

### Action
 

## 0x145201 joint 5 parameter locked warning 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 joint 5 parameter locked warning

### Reason
 

### Action
 

## 0x155201 joint 6 parameter locked warning 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 joint 6 parameter locked warning

### Reason
 

### Action
 

## 0x105202 joint 1 zero calibration and DH parameter conflict 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint 1 zero calibration and DH parameter conflict

### Reason
 

### Action
 

## 0x115202 joint 2 zero calibration and DH parameter conflict 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint 2 zero calibration and DH parameter conflict

### Reason
 

### Action
 

## 0x125202 joint 2 zero calibration and DH parameter conflict 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint 2 zero calibration and DH parameter conflict

### Reason
 

### Action
 

## 0x135202 joint 4 zero calibration and DH parameter conflict 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint 4 zero calibration and DH parameter conflict

### Reason
 

### Action
 

## 0x145202 joint 5 zero calibration and DH parameter conflict 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint 5 zero calibration and DH parameter conflict

### Reason
 

### Action
 

## 0x155202 joint 6 zero calibration and DH parameter conflict 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint 6 zero calibration and DH parameter conflict

### Reason
 

### Action
 

## 0x108616 joint 1 temperature sensor communication failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint 1 temperature sensor communication failure

### Reason
 

### Action
 

## 0x118616 joint 2 temperature sensor communication failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint 2 temperature sensor communication failure

### Reason
 

### Action
 

## 0x128616 joint 3 temperature sensor communication failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint 3 temperature sensor communication failure

### Reason
 

### Action
 

## 0x138616 joint 4 temperature sensor communication failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint 4 temperature sensor communication failure

### Reason
 

### Action
 

## 0x148616 joint 5 temperature sensor communication failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint 5 temperature sensor communication failure

### Reason
 

### Action
 

## 0x158616 joint 6 temperature sensor communication failure 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 joint 6 temperature sensor communication failure

### Reason
 

### Action
 

## 0x201104 Các tham số bus nối tiếp IO RTU mở rộng không nhất quán 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Các tham số bus nối tiếp IO RTU mở rộng không nhất quán

### Reason
 Nhiều mô-đun IO mở rộng RTU được cấu hình và các tham số bus nối tiếp của từng mô-đun không nhất quán

### Action
 Sửa đổi các tham số bus nối tiếp IO RTU mở rộng sao cho các tham số của từng mô-đun giống với tham số của mô-đun RTU đầu tiên

## 0x201102 Không thể tạo kết nối Modbus RTU trong quá trình khởi tạo IO mở rộng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể tạo kết nối Modbus Rtu trong quá trình khởi tạo IO mở rộng

### Reason
 Đã xảy ra lỗi khi kết nối mô-đun IO phụ Modbus theo cấu hình đã cho trong quá trình khởi tạo.

### Action
 1) Vui lòng xác nhận loại và cấu hình giao tiếp của mô-đun IO mở rộng;
2) Vui lòng xác nhận rằng kết nối vật lý giao tiếp giữa giao diện tủ điều khiển và mô-đun IO mở rộng bên ngoài là bình thường;
3) Vui lòng xác nhận rằng nguồn điện của mô-đun IO mở rộng là bình thường;
4) Bạn có thể thử sử dụng công cụ Modbus Poll để kết nối với IO mở rộng để kiểm tra xem mô-đun IO mở rộng có bất thường không.

## 0x201202 Không thể tạo kết nối Modbus TCP trong quá trình khởi tạo IO mở rộng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể tạo kết nối Modbus Tcp trong quá trình khởi tạo IO mở rộng

### Reason
 Đã xảy ra lỗi khi kết nối mô-đun IO phụ Modbus theo cấu hình đã cho trong quá trình khởi tạo.

### Action
 1) Vui lòng xác nhận loại và cấu hình giao tiếp của mô-đun IO mở rộng;
2) Vui lòng xác nhận rằng kết nối vật lý giao tiếp giữa giao diện tủ điều khiển và mô-đun IO mở rộng bên ngoài là bình thường;
3) Vui lòng xác nhận rằng nguồn điện của mô-đun IO mở rộng là bình thường;
4) Bạn có thể thử sử dụng công cụ Modbus Poll để kết nối với IO mở rộng để kiểm tra xem mô-đun IO mở rộng có bất thường không.

## 0x201304 Lỗi không xác định trong quá trình khởi tạo IO mở rộng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Lỗi không xác định trong quá trình khởi tạo

### Reason
 Đã xảy ra lỗi khi kết nối mô-đun IO phụ Modbus theo cấu hình đã cho trong quá trình khởi tạo.

### Action
 1) Vui lòng xác nhận loại và cấu hình giao tiếp của mô-đun IO mở rộng;
2) Vui lòng xác nhận rằng kết nối vật lý giao tiếp giữa giao diện tủ điều khiển và mô-đun IO mở rộng bên ngoài là bình thường;
3) Vui lòng xác nhận rằng nguồn điện của mô-đun IO mở rộng là bình thường;
4) Bạn có thể thử sử dụng công cụ Modbus Poll để kết nối với IO mở rộng để kiểm tra xem mô-đun IO mở rộng có bất thường không.

## 0x201101 Lỗi cấu hình Modbus RTU trong quá trình khởi tạo IO mở rộng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khởi tạo IO mở rộng không thành công Các tham số truyền thông Modbus RTU không khớp

### Reason
 Đã xảy ra lỗi khi kết nối mô-đun IO phụ Modbus theo cấu hình đã cho trong quá trình khởi tạo.

### Action
 1) Vui lòng xác nhận loại và cấu hình giao tiếp của mô-đun IO mở rộng;
2) Vui lòng xác nhận rằng kết nối vật lý giao tiếp giữa giao diện tủ điều khiển và mô-đun IO mở rộng bên ngoài là bình thường;
3) Vui lòng xác nhận rằng nguồn điện của mô-đun IO mở rộng là bình thường;
4) Bạn có thể thử sử dụng công cụ Modbus Poll để kết nối với IO mở rộng để kiểm tra xem mô-đun IO mở rộng có bất thường không.

## 0x201201 Lỗi cấu hình Modbus TCP trong quá trình khởi tạo IO mở rộng 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khởi tạo IO mở rộng không thành công Lỗi định dạng tham số giao tiếp Modbus TCP

### Reason
 Đã xảy ra lỗi khi kết nối mô-đun IO phụ Modbus theo cấu hình đã cho trong quá trình khởi tạo.

### Action
 1) Vui lòng xác nhận loại và cấu hình giao tiếp của mô-đun IO mở rộng;
2) Vui lòng xác nhận rằng kết nối vật lý giao tiếp giữa giao diện tủ điều khiển và mô-đun IO mở rộng bên ngoài là bình thường;
3) Vui lòng xác nhận rằng nguồn điện của mô-đun IO mở rộng là bình thường;
4) Bạn có thể thử sử dụng công cụ Modbus Poll để kết nối với IO mở rộng để kiểm tra xem mô-đun IO mở rộng có bất thường không.

## 0x202103 Nút Modbus RTU ngoại tuyến khi IO mở rộng đang chạy 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể chạy nút IO Modbus RTU mở rộng bị ngắt kết nối

### Reason
 Trong quá trình hoạt động, mô-đun IO mở rộng Modbus RTU bị ngắt kết nối khỏi bộ điều khiển.

### Action
 1) Vui lòng xác nhận loại và cấu hình giao tiếp của mô-đun IO mở rộng;
2) Vui lòng xác nhận rằng kết nối vật lý giao tiếp giữa giao diện tủ điều khiển và mô-đun IO mở rộng bên ngoài là bình thường;
3) Vui lòng xác nhận rằng nguồn điện của mô-đun IO mở rộng là bình thường;
4) Bạn có thể thử sử dụng công cụ Modbus Poll để kết nối với IO mở rộng để kiểm tra xem mô-đun IO mở rộng có bất thường không.

## 0x202102 Nút Modbus TCP ngoại tuyến khi IO mở rộng đang chạy 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể chạy nút IO Modbus TCP mở rộng bị ngắt kết nối

### Reason
 Trong quá trình hoạt động, mô-đun IO mở rộng Modbus TCP bị ngắt kết nối khỏi bộ điều khiển.

### Action
 1) Vui lòng xác nhận loại và cấu hình giao tiếp của mô-đun IO mở rộng;
2) Vui lòng xác nhận rằng kết nối vật lý giao tiếp giữa giao diện tủ điều khiển và mô-đun IO mở rộng bên ngoài là bình thường;
3) Vui lòng xác nhận rằng nguồn điện của mô-đun IO mở rộng là bình thường;
4) Bạn có thể thử sử dụng công cụ Modbus Poll để kết nối với IO mở rộng để kiểm tra xem mô-đun IO mở rộng có bất thường không.

## 0x3F0001 Khởi tạo giao tiếp cảm biến mô-men xoắn không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khởi tạo kết nối cảm biến mô-men xoắn không thành công

### Reason
 Khi mở bằng cảm biến, kết nối sẽ được thiết lập với cảm biến theo cấu hình giao tiếp. Lỗi này sẽ trở lại khi kết nối giao tiếp giữa bộ điều khiển và cảm biến bị lỗi.

### Action
 1) Vui lòng xác nhận loại cảm biến mô-men xoắn và cấu hình giao tiếp;
2) Vui lòng xác nhận rằng kết nối vật lý giao tiếp giữa giao diện tủ điều khiển và cảm biến mô-men xoắn là bình thường;
3) Vui lòng xác nhận rằng nguồn điện của cảm biến mô-men xoắn là bình thường;
4) Bạn có thể thử sử dụng công cụ sửa lỗi Modbus hoặc công cụ hỗ trợ gỡ lỗi mạng để kết nối cảm biến mô-men xoắn để kiểm tra xem cảm biến mô-men xoắn có bất thường không.

## 0x3F1001 Không thể nhận dữ liệu cảm biến mô-men xoắn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Không thể nhận dữ liệu cảm biến mô-men xoắn

### Reason
 Lỗi này sẽ được báo cáo khi giao tiếp giữa bộ điều khiển và cảm biến được thiết lập và kết nối được thiết lập bình thường, nhưng dữ liệu bị ngắt trong quá trình hoạt động.

### Action
 1) Vui lòng xác nhận loại cảm biến mô-men xoắn và cấu hình giao tiếp;
2) Vui lòng xác nhận rằng kết nối vật lý giao tiếp giữa giao diện tủ điều khiển và cảm biến mô-men xoắn là bình thường;
3) Vui lòng xác nhận rằng nguồn điện của cảm biến mô-men xoắn là bình thường;
4) Bạn có thể thử sử dụng công cụ sửa lỗi Modbus hoặc công cụ hỗ trợ gỡ lỗi mạng để kết nối cảm biến mô-men xoắn để kiểm tra xem cảm biến mô-men xoắn có bất thường không.

## 0x3F1002 Nhận được lỗi định dạng dữ liệu cảm biến mô-men xoắn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Nhận được lỗi định dạng dữ liệu cảm biến mô-men xoắn

### Reason
 Lỗi này thường xảy ra khi cảm biến mô-men xoắn được mở rộng qua TIO và lỗi được báo cáo khi định dạng của dữ liệu cảm biến mô-men xoắn nhận được là sai.

### Action
 1) Vui lòng xác nhận loại cảm biến mô-men xoắn và giao thức truyền thông; 2) Bạn có thể thử sử dụng công cụ gỡ lỗi Modbus, công cụ hỗ trợ gỡ lỗi mạng hoặc công cụ gỡ lỗi cổng nối tiếp để phân tích dữ liệu cảm biến mô-men xoắn nhận được nhằm xác định xem nó có phù hợp với giao thức truyền thông của Cảm biến mô-men xoắn JAKA+.

## 0x304281 Nhiệt độ PDU bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Nhiệt độ PDU bất thường

### Reason
 Nhiệt độ bên trong tủ điều khiển vượt quá 70°C

### Action
 1) Vui lòng kiểm tra xem nhiệt độ bên trong tủ điều khiển có vượt quá 70°C hay không;
2) Vui lòng kiểm tra xem quạt bên trong tủ điều khiển có hoạt động bình thường không.

## 0x304282 Điện trở phanh quá nhiệt 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Điện trở phanh quá nhiệt

### Reason
 Nhiệt độ của điện trở hãm bên trong MiniCAB vượt quá 80°C

### Action
 1) Vui lòng kiểm tra nhiệt độ bên trong của MiniCAB;
2) Hãy giảm gia tốc của robot;
3) Vui lòng thêm quạt làm mát;

## 0x303281 Điện áp nguồn 5V bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 5V bất thường (phạm vi dao động của điện áp nguồn)

### Reason
 Giá trị điện áp tín hiệu 5V bên trong tủ điều khiển vượt quá giá trị đặt trước bên trong (3,5~6,1V), bạn có thể sử dụng đồng hồ vạn năng để kiểm tra giá trị điện áp tín hiệu 5V.

### Action
 1) Vui lòng kiểm tra xem phiên bản phần sụn có phải là phiên bản mới nhất hay không, nếu không, hãy kiểm tra xem sự cố có còn tồn tại sau khi cập nhật lên phiên bản mới nhất hay không;
2) Sau khi ngắt kết nối nguồn điện đầu vào của tủ điều khiển, hãy khởi động lại nguồn điện và kiểm tra xem sự cố có còn tồn tại không, nếu còn, vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra phần cứng của tủ điều khiển;
3) Đối với tủ điều khiển nguồn điện 220V tiêu chuẩn, nếu rút nguồn điện 220V ra thì sẽ báo lỗi, đây là hiện tượng bình thường.

## 0x303282 Điện áp nguồn 12V bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Bất thường 12V (phạm vi dao động của điện áp nguồn)

### Reason
 Giá trị điện áp tín hiệu 12V bên trong tủ điều khiển vượt quá giá trị đặt trước bên trong (9 ~ 14V) và giá trị điện áp tín hiệu 11V có thể được đo bằng đồng hồ vạn năng.

### Action
 1) Vui lòng kiểm tra xem phiên bản phần sụn có phải là phiên bản mới nhất hay không, nếu không, hãy kiểm tra xem sự cố có còn tồn tại sau khi cập nhật lên phiên bản mới nhất hay không;
2) Sau khi ngắt kết nối nguồn điện đầu vào của tủ điều khiển, hãy khởi động lại nguồn điện và kiểm tra xem sự cố có còn tồn tại không, nếu còn, vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra phần cứng của tủ điều khiển;
3) Đối với tủ điều khiển nguồn điện 220V tiêu chuẩn, nếu rút nguồn điện 220V ra thì sẽ báo lỗi, đây là hiện tượng bình thường.

## 0x303283 Điện áp nguồn 24V bất thường 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Bất thường 24V (phạm vi dao động của điện áp nguồn)

### Reason
 Giá trị điện áp tín hiệu 12V bên trong tủ điều khiển vượt quá giá trị đặt trước bên trong (15 ~ 31V) và giá trị điện áp tín hiệu 12V có thể được đo bằng đồng hồ vạn năng.

### Action
 1) Vui lòng kiểm tra xem phiên bản phần sụn có phải là phiên bản mới nhất hay không, nếu không, hãy kiểm tra xem sự cố có còn tồn tại sau khi cập nhật lên phiên bản mới nhất hay không;
2) Sau khi ngắt kết nối nguồn điện đầu vào của tủ điều khiển, hãy khởi động lại nguồn điện và kiểm tra xem sự cố có còn tồn tại không, nếu còn, vui lòng liên hệ với nhân viên kỹ thuật để kiểm tra phần cứng của tủ điều khiển;
3) Đối với tủ điều khiển nguồn điện 220V tiêu chuẩn, nếu rút nguồn điện 220V ra thì sẽ báo lỗi, đây là hiện tượng bình thường.

## 0x303181 Điện áp nguồn 220V bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Nguồn điện 220V bất thường

### Reason
 Tủ điều khiển phát hiện biên độ và tần số tín hiệu 220V bất thường

### Action
 1) Vui lòng xác nhận điện áp và tần số nguồn điện hiện tại của tủ điều khiển. Chỉ nguồn AC trên 110V và 50~60Hz mới có chức năng phát hiện mất điện 220V. Tủ điều khiển được cấp nguồn từ 90~110V AC phải sử dụng phiên bản phần sụn với từ dis220v;
2) Vui lòng cập nhật phiên bản phần sụn mới nhất để kiểm tra xem sự cố có còn tồn tại không;
3) Nếu cả 1 và 2 đều không giải quyết được vấn đề, thì cần xác định biên độ và tần số của nguồn điện và những thay đổi về biên độ và tần số trong quá trình vận hành;
4) Nếu cả 1 và 2 đều không giải quyết được vấn đề và 3 không thể đo được, cần xác định xem nguồn điện của tủ điều khiển có bị cắt trực tiếp khi robot đang chạy hay không (bao gồm nhưng không giới hạn ở việc rút phích cắm 220V , mất nguồn khi xuất xưởng v.v.) , nếu không có bạn có thể update firmware lên firmware với phiên bản dis220V để dùng tạm.

## 0x303182 Rơle nguồn chính không bình thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Rơle nguồn chính không bình thường

### Reason
 Rơle điều khiển đầu ra 48V phát hiện tín hiệu đầu ra khi nó không được bật nguồn, nghĩa là rơle điều khiển tín hiệu đầu vào của nguồn điện 48V bị kẹt.

### Action
 1) Vui lòng cập nhật chương trình cơ sở SCB lên phiên bản mới nhất và kiểm tra xem sự cố có còn tồn tại không;
2) Vui lòng xác nhận biên độ và tần số của điện áp nguồn của tủ điều khiển, tủ điều khiển được cấp nguồn từ 90 ~ 110V AC phải sử dụng phiên bản phần sụn có từ dis220v;
3) Sau 2 bước trên vẫn báo lỗi, bạn liên hệ thợ kiểm tra xem rơle điều khiển nguồn 48V trong tủ điện điều khiển có bị hư không.

## 0x303381 Điện áp nguồn điện đầu ra của thân chính không bình thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Điện áp cơ thể hoặc cấu hình điện áp là bất thường

### Reason
 Giá trị điện áp xả do MiniCAB đặt nhỏ hơn giá trị điện áp đầu vào của MiniCAB.

### Action
 Vui lòng sử dụng APP để đặt lại điện áp xả.

## 0x303387 Rơle PSCB bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Rơle PSCB bất thường

### Reason
 Sau khi tắt nguồn thân chính, các giá trị điện áp của hai rơle điều khiển nguồn thân chính được PSCB phát hiện không nhất quán.

### Action
 1) Vui lòng cập nhật phiên bản phần sụn mới nhất để kiểm tra xem sự cố có còn tồn tại không;
2) Nếu nó vẫn tồn tại sau các thao tác trước đó, vui lòng liên hệ với kỹ thuật viên để kiểm tra xem rơle bên trong của PSCB có bị hỏng hay không.

## 0x302384 Dòng điện cung cấp IO của người dùng không bình thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Dòng điện cấp nguồn IO của người dùng không bình thường (2.3A)

### Reason
 Tổng giá trị dòng điện đầu ra 24V trên bảng tủ điều khiển vượt quá 1,5A

### Action
 1) Vui lòng tháo các bộ phận trên bảng điều khiển của tủ điều khiển và kiểm tra xem lỗi có còn được báo cáo hay không;
2) Nếu bước đầu tiên không được báo cáo, thiết bị người dùng không thể sử dụng tủ điều khiển để cấp nguồn và cần được cấp nguồn riêng;
3) Nếu thực hiện bước 1 vẫn báo lỗi và sau khi tắt máy khởi động lại vẫn báo lỗi, vui lòng liên hệ nhân viên kỹ thuật để kiểm tra xem có phải hư phần cứng không.

## 0x302385 Dòng điện IPC bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Dòng điện của máy tính công nghiệp không bình thường (dòng điện của máy tính công nghiệp vượt quá 1,5A thì coi như máy tính công nghiệp bị chập mạch, báo lỗi)

### Reason
 Máy tính công nghiệp không được kết nối sau khi khởi động hoặc dòng điện của máy tính công nghiệp vượt quá 1,5A;

### Action
 Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem phần cứng của máy tính công nghiệp có bất thường không.

## 0x302380 Dòng điện quạt bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Dòng điện quạt bất thường

### Reason
 Quạt tủ điều khiển không được kết nối hoặc quạt bị ngắn mạch

### Action
 Vui lòng kiểm tra tình trạng hỏng hóc của quạt.

## 0x302381 Báo động cấp 1 cho sự bất thường của dòng điện cơ thể 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Cảnh báo dòng điện đầu ra của cơ thể bất thường cấp 1: Mức tiêu thụ dòng điện cơ thể robot 25A là bất thường

### Reason
 Dòng điện do SCB thu thập vượt ngưỡng quy định

### Action
 Vui lòng kiểm tra xem SCB có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x302382 Báo động thứ cấp bất thường hiện tại của cơ thể 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đầu ra cơ thể cung cấp điện hiện tại cảnh báo sớm cấp 2 bất thường: 31,25A

### Reason
 Dòng điện do SCB thu thập vượt ngưỡng quy định

### Action
 Vui lòng kiểm tra xem SCB có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x302383 Báo động ba cấp cho sự bất thường hiện tại của cơ thể 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đầu ra cơ thể cung cấp điện hiện tại cảnh báo sớm cấp 3 bất thường: 37,25A

### Reason
 Dòng điện do SCB thu thập vượt ngưỡng quy định

### Action
 Vui lòng kiểm tra xem SCB có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x302391 Sức mạnh cơ thể bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Sức mạnh cơ thể bất thường

### Reason
 Công suất của thân chính được tính toán bởi bảng điều khiển an toàn vượt quá giá trị giới hạn đã đặt

### Action
 1. Vui lòng điều chỉnh lại cài đặt nguồn điện trong cài đặt bảo mật trong APP 2. Vui lòng liên hệ với nhân viên dịch vụ kỹ thuật để kiểm tra xem có vấn đề về nguồn điện vượt quá giới hạn trên phần cứng hay không.

## 0x309081 Phần cuối của robot đang kéo lê và chạy quá tốc độ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đã vượt quá tốc độ kéo và thả TCP

### Reason
 Tốc độ kéo TCP của thân chính vượt quá 1m/s.

### Action
 Vui lòng giảm tốc độ kéo, cảnh báo này không ảnh hưởng đến các chức năng khác, nó chỉ là một lời nhắc nhở.

## 0x309082 kích hoạt dừng khẩn cấp 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 dừng khẩn cấp

### Reason
 Bất kỳ tín hiệu dừng khẩn cấp nào của tay cầm, dừng khẩn cấp của người dùng và tín hiệu dừng khẩn cấp IO của chức năng an toàn đều được kích hoạt.

### Action
 Vui lòng kiểm tra xem tín hiệu dừng khẩn cấp của tay cầm, dừng khẩn cấp của người dùng và tín hiệu dừng khẩn cấp IO của chức năng an toàn nào được kích hoạt.

## 0x308181 Xử lý giao tiếp CAN bị gián đoạn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Xử lý giao tiếp CAN bị gián đoạn

### Reason
 Dữ liệu của bảng điều khiển an toàn và xe buýt tay cầm là sai.

### Action
 1. Vui lòng kiểm tra xem kết nối cáp giữa tay cầm và tủ điều khiển điện có bình thường không. 2. Vui lòng liên hệ với kỹ thuật viên để kiểm tra xem bus CAN giữa SCB/PSCB và CAN2 của tủ điều khiển có bất thường không.

## 0x308182 Giao tiếp bộ điều khiển CAN bị gián đoạn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Giao tiếp bộ điều khiển CAN bị gián đoạn

### Reason
 Sau khi bật nguồn của rô-bốt, lệnh do bộ điều khiển gửi đến thân chính đã không được nhận trong một khoảng thời gian.

### Action
 1) Vui lòng cập nhật chương trình cơ sở của SCB và PSCB lên phiên bản mới nhất và kiểm tra xem có lỗi không;
2) Kiểm tra xem dữ liệu của các khớp 1~6 đã được làm mới trên trang giám sát APP hoặc máy chủ servo chưa;
3) Vui lòng kiểm tra xem đèn báo ở cuối thân máy có sáng không, nếu không, vui lòng kiểm tra xem hệ thống dây điện có bình thường không.

## 0x308183 Cơ thể chính giao tiếp CAN bị gián đoạnCơ thể chính giao tiếp CAN bị gián đoạn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Cơ thể chính giao tiếp CAN bị gián đoạn

### Reason
 Sau khi bật nguồn của rô-bốt, lệnh do bộ điều khiển gửi đến thân chính đã không được nhận trong một khoảng thời gian.

### Action
 1) Vui lòng cập nhật chương trình cơ sở của SCB và PSCB lên phiên bản mới nhất và kiểm tra xem có lỗi không;
2) Kiểm tra xem dữ liệu của các khớp 1~6 đã được làm mới trên trang giám sát APP hoặc máy chủ servo chưa;
3) Vui lòng kiểm tra xem đèn báo ở cuối thân máy có sáng không, nếu không, vui lòng kiểm tra xem hệ thống dây điện có bình thường không.

## 0x308184 Giao tiếp TIO CAN bị gián đoạn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Giao tiếp TIO CAN bị gián đoạn

### Reason
 Sau khi bật nguồn của rô-bốt, lệnh do bộ điều khiển gửi đến thân chính đã không được nhận trong một khoảng thời gian.

### Action
 1) Vui lòng cập nhật chương trình cơ sở của SCB và PSCB lên phiên bản mới nhất và kiểm tra xem có lỗi không;
2) Kiểm tra xem dữ liệu của các khớp 1~6 đã được làm mới trên trang giám sát APP hoặc máy chủ servo chưa;
3) Vui lòng kiểm tra xem đèn báo ở cuối thân máy có sáng không, nếu không, vui lòng kiểm tra xem hệ thống dây điện có bình thường không.

## 0x308185 Đang chờ giao tiếp CAN hết thời gian bình thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đang chờ giao tiếp CAN hết thời gian bình thường

### Reason
 Sau khi bật nguồn của rô-bốt, lệnh do bộ điều khiển gửi đến thân chính đã không được nhận trong một khoảng thời gian.

### Action
 1) Vui lòng cập nhật chương trình cơ sở của SCB và PSCB lên phiên bản mới nhất và kiểm tra xem có lỗi không;
2) Kiểm tra xem dữ liệu của các khớp 1~6 đã được làm mới trên trang giám sát APP hoặc máy chủ servo chưa;
3) Vui lòng kiểm tra xem đèn báo ở cuối thân máy có sáng không, nếu không, vui lòng kiểm tra xem hệ thống dây điện có bình thường không.

## 0x305081 Tín hiệu dừng khẩn cấp của tay cầm không nhất quán 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tín hiệu dừng khẩn cấp của tay cầm không nhất quán

### Reason
 Tín hiệu là kênh dự phòng liên kết kép và sẽ báo lỗi nếu hai tín hiệu không nhất quán.

### Action
 Hãy thử thay thế tay cầm, hoặc liên hệ với kỹ thuật viên để kiểm tra mạch SCB của tủ.

## 0x305082 Đầu vào tín hiệu dừng khẩn cấp của người dùng không nhất quán 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đầu vào tín hiệu dừng khẩn cấp của người dùng không nhất quán

### Reason
 Tín hiệu là kênh dự phòng liên kết kép và sẽ báo lỗi nếu hai tín hiệu không nhất quán.

### Action
 Vui lòng kiểm tra xem đầu cuối p8 trên bảng có tiếp xúc kém không và kiểm tra xem mạch ngoài có bình thường không

## 0x305083 Đầu vào không nhất quán của tín hiệu dừng bảo vệ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đầu vào không nhất quán của tín hiệu dừng bảo vệ

### Reason
 Tín hiệu là kênh dự phòng liên kết kép và sẽ báo lỗi nếu hai tín hiệu không nhất quán.

### Action
 Vui lòng kiểm tra xem đầu cuối p8 trên bảng có tiếp xúc kém không và kiểm tra xem mạch ngoài có bình thường không

## 0x305084 Rơle SCB bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Rơle SCB bất thường

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem SCB có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x305085 Điện trở phanh quá nhiệt 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Điện trở phanh quá nhiệt

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem SCB có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x305086 Xử lý kích hoạt đầu vào là bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Xử lý kích hoạt đầu vào là bất thường

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem SCB có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x305087 Đầu vào dừng khẩn cấp bổ sung bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đầu vào dừng khẩn cấp bổ sung bất thường

### Reason
 Tín hiệu là kênh dự phòng liên kết kép và sẽ báo lỗi nếu hai tín hiệu không nhất quán.

### Action
 Vui lòng kiểm tra xem các đầu nối giao diện DI được cấu hình trên bảng điều khiển có tiếp xúc kém hay không và kiểm tra xem mạch bên ngoài có bình thường không.

## 0x305088 Ngoại lệ đầu vào dừng bảo vệ bổ sung 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Ngoại lệ đầu vào dừng bảo vệ bổ sung

### Reason
 Tín hiệu là kênh dự phòng liên kết kép và sẽ báo lỗi nếu hai tín hiệu không nhất quán.

### Action
 Vui lòng kiểm tra xem các đầu nối giao diện DI được cấu hình trên bảng điều khiển có tiếp xúc kém hay không và kiểm tra xem mạch bên ngoài có bình thường không.

## 0x305089 Đầu vào thiết lập lại dừng bảo vệ bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đầu vào thiết lập lại dừng bảo vệ bất thường

### Reason
 Tín hiệu là kênh dự phòng liên kết kép và sẽ báo lỗi nếu hai tín hiệu không nhất quán.

### Action
 Vui lòng kiểm tra xem các đầu nối giao diện DI được cấu hình trên bảng điều khiển có tiếp xúc kém hay không và kiểm tra xem mạch bên ngoài có bình thường không.

## 0x30508A Giảm ngoại lệ đầu vào chế độ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Giảm ngoại lệ đầu vào chế độ

### Reason
 Tín hiệu là kênh dự phòng liên kết kép và sẽ báo lỗi nếu hai tín hiệu không nhất quán.

### Action
 Vui lòng kiểm tra xem các đầu nối giao diện DI được cấu hình trên bảng điều khiển có tiếp xúc kém hay không và kiểm tra xem mạch bên ngoài có bình thường không.

## 0x30508B Ba vị trí cho phép nhập bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Ba vị trí cho phép nhập bất thường

### Reason
 Ba vị trí cho phép nhập bất thường

### Action
 

## 0x305090 Tắt đầu vào tín hiệu phát hiện va chạm bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tắt đầu vào tín hiệu phát hiện va chạm bất thường

### Reason
 Tắt đầu vào tín hiệu phát hiện va chạm bất thường

### Action
 

## 0x305091 Độ nhạy va chạm đầu vào tín hiệu LV1 bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Độ nhạy va chạm đầu vào tín hiệu LV1 bất thường

### Reason
 Độ nhạy va chạm đầu vào tín hiệu LV1 bất thường

### Action
 

## 0x305092 Độ nhạy va chạm LV2 tín hiệu đầu vào bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Độ nhạy va chạm LV2 tín hiệu đầu vào bất thường

### Reason
 Độ nhạy va chạm LV2 tín hiệu đầu vào bất thường

### Action
 

## 0x305093 Độ nhạy va chạm LV3 tín hiệu đầu vào bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Độ nhạy va chạm LV3 tín hiệu đầu vào bất thường

### Reason
 Độ nhạy va chạm LV3 tín hiệu đầu vào bất thường

### Action
 

## 0x305094 Độ nhạy va chạm đầu vào tín hiệu LV4 bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Độ nhạy va chạm đầu vào tín hiệu LV4 bất thường

### Reason
 Độ nhạy va chạm đầu vào tín hiệu LV4 bất thường

### Action
 

## 0x305095 Độ nhạy va chạm đầu vào tín hiệu LV5 bất thường 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Độ nhạy va chạm đầu vào tín hiệu LV5 bất thường

### Reason
 Độ nhạy va chạm đầu vào tín hiệu LV5 bất thường

### Action
 

## 0x305097 Độ nhạy va chạm là bất thường đầu vào tín hiệu 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Độ nhạy va chạm là bất thường đầu vào tín hiệu

### Reason
 Độ nhạy va chạm là bất thường đầu vào tín hiệu

### Action
 

## 0x303184 Tín hiệu an ninh bất thường từ chối điện 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tín hiệu đầu vào kỹ thuật số an toàn có sự bất thường, bảng điều khiển an toàn phát hiện lỗi bất thường không được loại bỏ, từ chối yêu cầu nạp lại năng lượng cho robot

### Reason
 Vui lòng kiểm tra xem tín hiệu đầu vào kỹ thuật số an toàn được cấu hình trong bảng điều khiển có bất thường không, xác nhận rằng tín hiệu đầu vào kỹ thuật số an toàn không có bất thường sau khi bật lại để xóa lỗi

### Action
 

## 0x309083 Ngưỡng báo động công suất máy robot 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Ngưỡng báo động công suất máy robot

### Reason
 chưa sử dụng

### Action
 Vui lòng kiểm tra xem SCB có phải là phiên bản gỡ lỗi hay không hoặc liên hệ với nhân viên dịch vụ kỹ thuật để cung cấp thông tin mô tả mã lỗi có liên quan.

## 0x0FFFFE các lỗi khác 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 các lỗi khác

### Reason
 

### Action
 

## 0x0FFFFF sai lầm không rõ 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 sai lầm không rõ

### Reason
 

### Action
 

## 0x10F0000 Kích hoạt dừng khẩn cấp hệ thống 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Kích hoạt dừng khẩn cấp hệ thống

### Reason
 

### Action
 

## 0x10F0001 Thiết lập lại hệ thống dừng khẩn cấp 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Thiết lập lại hệ thống dừng khẩn cấp

### Reason
 

### Action
 

## 0x10F0002 Robot được bật nguồn 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot được bật nguồn

### Reason
 

### Action
 

## 0x10F0003 Robot bị tắt nguồn 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot bị tắt nguồn

### Reason
 

### Action
 

## 0x10F0004 Robot servo kích hoạt hoàn tất 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot servo kích hoạt hoàn tất

### Reason
 

### Action
 

## 0x10F0005 Tắt bật servo rô-bốt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Tắt bật servo rô-bốt

### Reason
 

### Action
 

## 0x10F0006 Robot thoát khỏi chế độ phóng đại 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot thoát khỏi chế độ phóng đại

### Reason
 

### Action
 

## 0x10F0007 Robot vào chế độ phóng đại cấp độ đầu tiên 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot vào chế độ phóng đại cấp độ đầu tiên

### Reason
 

### Action
 

## 0x10F0008 Robot vào chế độ phóng đại thứ cấp 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot vào chế độ phóng đại thứ cấp

### Reason
 

### Action
 

## 0x10F0009 Robot đi vào điểm dừng bảo vệ 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot đi vào điểm dừng bảo vệ

### Reason
 

### Action
 

## 0x10F000a Robot thoát khỏi điểm dừng bảo vệ va chạm 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot thoát khỏi điểm dừng bảo vệ va chạm

### Reason
 

### Action
 

## 0x10F000b Rô-bốt đi vào điểm dừng bảo vệ chống va chạm 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Rô-bốt đi vào điểm dừng bảo vệ chống va chạm

### Reason
 

### Action
 

## 0x10F000c Khôi phục trạng thái giới hạn chung của robot 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Khôi phục trạng thái giới hạn chung của robot

### Reason
 

### Action
 

## 0x10F000d Tính năng băng chuyền đang bật 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Tính năng băng chuyền đang bật

### Reason
 

### Action
 

## 0x10F000e Tính năng băng chuyền đã tắt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Tính năng băng chuyền đã tắt

### Reason
 

### Action
 

## 0x10F000f Điều khiển mềm đang bật 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Điều khiển mềm đang bật

### Reason
 

### Action
 

## 0x10F0010 Kiểm soát độ mềm bị tắt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Kiểm soát độ mềm bị tắt

### Reason
 

### Action
 

## 0x10F0011 Robot vào chế độ kéo 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot vào chế độ kéo

### Reason
 

### Action
 

## 0x10F0012 Robot thoát khỏi chế độ kéo 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot thoát khỏi chế độ kéo

### Reason
 

### Action
 

## 0x10F0013 Robot chuyển sang chế độ lực kéo được kiểm soát 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot chuyển sang chế độ lực kéo được kiểm soát

### Reason
 

### Action
 

## 0x10F0014 Robot thoát khỏi chế độ kiểm soát lực kéo 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot thoát khỏi chế độ kiểm soát lực kéo

### Reason
 

### Action
 

## 0x10F0015 Chế độ chuyển động Robot SERVO đang bật 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chế độ chuyển động Robot SERVO đang bật

### Reason
 

### Action
 

## 0x10F0016 Chế độ chuyển động Robot SERVO đang tắt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chế độ chuyển động Robot SERVO đang tắt

### Reason
 

### Action
 

## 0x10F0017 Robot nằm ngoài ranh giới an toàn 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot nằm ngoài ranh giới an toàn

### Reason
 

### Action
 

## 0x10F0018 Robot quay trở lại trong phạm vi an toàn 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot quay trở lại trong phạm vi an toàn

### Reason
 

### Action
 

## 0x10F0019 Bắt đầu giới hạn tốc độ không gian Cartesian 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Bắt đầu giới hạn tốc độ không gian Cartesian

### Reason
 

### Action
 

## 0x10F001a Dừng giới hạn tốc độ không gian Cartesian 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Dừng giới hạn tốc độ không gian Cartesian

### Reason
 

### Action
 

## 0x10F001b Chương trình công việc bắt đầu thực hiện 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chương trình công việc bắt đầu thực hiện

### Reason
 

### Action
 

## 0x10F001c Chương trình điều hành bị treo 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chương trình điều hành bị treo

### Reason
 

### Action
 

## 0x10F001d Chương trình công việc tiếp tục thực hiện 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chương trình công việc tiếp tục thực hiện

### Reason
 

### Action
 

## 0x10F001e Chương trình điều hành dừng thực thi 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chương trình điều hành dừng thực thi

### Reason
 

### Action
 

## 0x10F001f Thay đổi cấu hình bảo mật 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kiểm tra tham số bảo mật thay đổi từ  thành 

### Reason
 Thay đổitrong các thông số bảo mật

### Action
 

## 0x10F0020 Robot chuyển sang chế độ giảm 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot chuyển sang chế độ giảm

### Reason
 

### Action
 

## 0x10F0021 Robot thoát khỏi chế độ giảm 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot thoát khỏi chế độ giảm

### Reason
 

### Action
 

## 0x10F0022 Robot vào Momentum Reduction 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot vào Momentum Reduction

### Reason
 

### Action
 

## 0x10F0023 Robot giảm năng lượng 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Robot giảm năng lượng

### Reason
 

### Action
 

## 0x10F0024 Robot thoát khỏi Protective Stop 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot thoát khỏi Protective Stop

### Reason
 

### Action
 

## 0x10F0025 Cấu hình bảo mật đã thay đổi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kiểm tra tham số bảo mật thay đổi từ  thành 

### Reason
 Thay đổi trong các thông số bảo mật

### Action
 

## 0x10F0026 Thay đổi cấu hình bảo mật 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kiểm tra tham số bảo mật thay đổi từ  thành 

### Reason
 Tư thế bảo mật trong tham số bảo mật thay đổi từ  thành 

### Action
 

## 0x10F0027 Thay đổi cấu hình bảo mật 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đánh giá tham số an toàn đã thay đổi từ  thành 

### Reason
 Phạm vi an toàn trong các tham số bảo mật đã thay đổi từ  thành 

### Action
 

## 0x10F0028 Thay đổi chế độ chạy của bộ điều khiển cấu hình bảo mật người dùng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kiểm tra tham số bảo mật thay đổi từ  thành 

### Reason
 Controller running mode thay đổi từ  thành 

### Action
 

## 0x10F0029 Thay đổi giới hạn nhỏ nhất của các khớp trong cấu hình bảo mật người dùng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tổng kiểm tra thông số bảo mật đã thay đổi từ  thành 

### Reason
 Đã thay đổi giới hạn âm chung  từ  thành 

### Action
 

## 0x10F002a Thay đổi giới hạn nhỏ nhất của các khớp trong cấu hình bảo mật người dùng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tổng kiểm tra thông số bảo mật đã thay đổi từ  thành 

### Reason
 Đã thay đổi giới hạn âm chung  từ  thành 

### Action
 

## 0x10F002b Chức năng bảo mật người dùng Thay đổi cấu hình DI 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đã thay đổi kiểm tra tham số bảo mật từ  thành 

### Reason
 DI  đã định cấu hình mã chức năng bảo mật đã thay đổi từ  thành 

### Action
 

## 0x10F002c Chức năng bảo mật người dùng Thay đổi cấu hình DO 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đã thay đổi kiểm tra tham số bảo mật từ  thành 

### Reason
 DO  đã định cấu hình mã chức năng bảo mật đã thay đổi từ  thành 

### Action
 

## 0x10F002D Đã thay đổi cấu hình giới hạn công suất của rô-bốt 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 xác minh thông số an toàn đã thay đổi từ  thành 

### Reason
 cấu hình giới hạn công suất của rô-bốt đã thay đổi từ  thành 

### Action
 

## 0x10F002E Giới hạn tốc độ đầu cuối của robot đã thay đổi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 xác minh tham số an toàn đã thay đổi từ  thành 

### Reason
 giới hạn tốc độ đầu cuối của rô-bốt đã thay đổi từ  thành 

### Action
 

## 0x10F002F Khoảng cách dừng cấu hình an toàn của người dùng đã thay đổi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 xác minh tham số an toàn đã thay đổi từ  thành 

### Reason
 khoảng cách dừng cấu hình bảo mật người dùng thay đổi từ  thành 

### Action
 

## 0x10F0030 Đã thay đổi thời gian dừng cấu hình bảo mật người dùng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 xác minh tham số bảo mật đã thay đổi từ  thành 

### Reason
 thời gian dừng cấu hình bảo mật người dùng thay đổi từ  thành 

### Action
 

## 0x10F0031 Giới hạn tốc độ khuỷu tay đã thay đổi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 kiểm tra tham số an toàn đã thay đổi từ  thành 

### Reason
 giới hạn tốc độ khuỷu tay thay đổi từ  thành 

### Action
 

## 0x10F0032 Mô-đun IO mở rộng được bật 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Mô-đun IO mở rộng được bật

### Reason
 

### Action
 

## 0x10F0033 Giới hạn tốc độ khớp nối thay đổi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kiểm tra tham số bảo mật thay đổi từ  thành 

### Reason
 giới hạn tốc độ khớp nối  thay đổi từ  thành 

### Action
 

## 0x10F0034 Giới hạn cảnh báo sai lệch khớp nối thay đổi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kiểm tra tham số bảo mật thay đổi từ  thành 

### Reason
 giới hạn cảnh báo sai lệch khớp nối  thay đổi từ  thành 

### Action
 

## 0x10F0035 Ràng buộc thái độ công cụ được thay đổi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 kiểm tra tham số bảo mật được thay đổi từ  thành 

### Reason
 Ràng buộc thái độ công cụ ban đầu là:
Hệ tọa độ , hướng dao x: , hướng dao Y: , phạm vi giới hạn: , khoảng cách an toàn: , hướng giới hạn rx: , ry: , rz: , kích hoạt chạy: , khởi động: ；
Các ràng buộc đặt ra công cụ hiện tại là:
Hệ tọa độ , hướng dao x: , hướng dao Y: , phạm vi giới hạn: , khoảng cách an toàn: , hướng giới hạn rx: , ry: , rz: , kích hoạt chạy: , bắt đầu khởi động: 

### Action
 

## 0x10F0036 Tùy chọn va chạm đã thay đổi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
  kiểm tra tham số bảo mật đã thay đổi từ  thành 

### Reason
  cấu hình xử lý va chạm ban đầu là:
Phương pháp quan sát va chạm: , tùy chọn xử lý sau va chạm: , góc nảy do va chạm: , khoảng cách nảy do va chạm: , gia tốc khớp nảy: , tốc độ khớp nảy: , bật lên Gia tốc tuyến tính: , vận tốc tuyến tính bật lại: 
Hiện tại cấu hình xử lý va chạm là:
Phương pháp quan sát va chạm: , tùy chọn xử lý sau va chạm: , góc nảy do va chạm: , khoảng cách nảy do va chạm: , gia tốc khớp nảy: , tốc độ khớp nảy: , nảy Gia tốc thẳng: , vận tốc thẳng bật lại: 

### Action
 

## 0x10F0037 Thay đổi giới hạn thời điểm servo 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kiểm tra tham số bảo mật thay đổi từ  thành 

### Reason
 Thay đổi giới hạn thời điểm từ  thành 

### Action
 

## 0x10F0038 Bật nguồn mặc định tải thay đổi cấu hình 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
  xác minh thông số bảo mật đã thay đổi từ  thành 

### Reason
  cấu hình chương trình mặc định ban đầu:
Tự động tải: , tên chương trình: 
Cấu hình mặc định chương trình hiện tại là:
Tự động tải: , tên chương trình: 

### Action
 

## 0x10F0039 Trạng thái tự động bật nguồn đã thay đổi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 xác minh thông số bảo mật thay đổi từ  thành 

### Reason
  trạng thái bật tự động bật nguồn đã thay đổi từ  thành 

### Action
 

## 0x10F003A Bật thay đổi trạng thái chương trình đang chạy tự động 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
  xác minh thông số bảo mật thay đổi từ  thành 

### Reason
  bật thay đổi trạng thái chương trình đang chạy tự động từ  thành 

### Action
 

## 0x10F003B Thay đổi cấu hình toàn cầu cho mặt phẳng an toàn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kiểm tra thông số an toàn thay đổi từ  sang 

### Reason
 Các thông số ban đầu:
  Loại khu vực: , bật nguồn: , bật hoạt động: , đến / vượt quá mặt phẳng an toàn sau khi xử lý: , giới hạn vị trí khuỷu tay được kích hoạt: ,
Các thông số mới:
  Loại khu vực: , bật nguồn: , chạy được kích hoạt: , đến / vượt quá mặt phẳng an toàn sau khi xử lý: , giới hạn vị trí khuỷu tay được kích hoạt: , giới hạn vị trí cổ tay được kích hoạt; 

### Action
 

## 0x10F003C Quá trình khởi tạo phát hiện thay đổi tham số bảo mật 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Đã thay đổi xác thực tham số bảo mật từ  thành 

### Reason
 

### Action
 

## 0x10F003D Lực cuối hạn chế thay đổi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kiểm tra thông số an toàn thay đổi từ  sang 

### Reason
 Giới hạn lực thay đổi từ  sang 

### Action
 

## 0x10F003F Thay đổi độ nhạy khớp 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kiểm tra thông số an toàn thay đổi từ  sang 

### Reason
 Độ nhạy thay đổi từ  sang 

### Action
 

## 0x10F0040 Va chạm làm thay đổi trạng thái năng lượng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kiểm tra thông số an toàn thay đổi từ  sang 

### Reason
 Thay đổi trạng thái năng lượng từ  sang 

### Action
 

## 0x10F0041 Thay đổi cấu hình mặt phẳng an toàn duy nhất 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kiểm tra thông số an toàn thay đổi từ  sang 

### Reason
  phẳng:
  Các thông số ban đầu:
  Tên phẳng: , bật: , modify: , d: , Khoảng cách an toàn: 
  Các thông số mới:
  Tên phẳng: , kích hoạt: , modify: , d: , khoảng cách an toàn: 

### Action
 

## 0x10F0042 Thay đổi vị trí mặt phẳng an toàn duy nhất 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kiểm tra thông số an toàn thay đổi từ  sang 

### Reason
  phẳng:
  Các thông số ban đầu:
  Điểm phẳng 1: , điểm phẳng 2:, điểm phẳng 3: , điểm mặt an toàn: 
  Các thông số mới:
  Điểm phẳng 1: , điểm phẳng 2:, điểm phẳng 3: , điểm mặt an toàn: 

### Action
 

## 0x10F0050  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x10F0051  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x10F0052  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x10F0053  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x10F0054  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x10F0055  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

## 0x10F0056  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 

### Reason
 

### Action
 

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
 

## 0x10F0100 Cảm biến mô-men xoắn đang bật 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Cảm biến mô-men xoắn đang bật

### Reason
 

### Action
 

## 0x10F0101 Cảm biến mô-men xoắn đã tắt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Cảm biến mô-men xoắn đã tắt

### Reason
 

### Action
 

## 0x10F0102 Mô-đun IO mở rộng được bật 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Mô-đun IO mở rộng được bật

### Reason
 

### Action
 

## 0x10F0103 Mô-đun IO mở rộng đã đóng 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Mô-đun IO mở rộng đã đóng

### Reason
 

### Action
 

## 0x10F0104 Khóa tay cầm điều khiển 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Khóa tay cầm điều khiển

### Reason
 

### Action
 

## 0x10F0200 Chức năng DI (chương trình thực thi) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DI (chương trình thực thi) được kích hoạt

### Reason
 

### Action
 

## 0x10F0201 Chức năng DI (tạm dừng chương trình) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DI (tạm dừng chương trình) được kích hoạt

### Reason
 

### Action
 

## 0x10F0202 Chức năng DI (thủ tục tiếp tục) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DI (thủ tục tiếp tục) được kích hoạt

### Reason
 

### Action
 

## 0x10F0203 Chức năng DI (dừng chương trình) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DI (dừng chương trình) được kích hoạt

### Reason
 

### Action
 

## 0x10F0204 Kích hoạt chức năng DI (bật nguồn) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Kích hoạt chức năng DI (bật nguồn)

### Reason
 

### Action
 

## 0x10F0205 Kích hoạt chức năng DI (tắt nguồn) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Kích hoạt chức năng DI (tắt nguồn)

### Reason
 

### Action
 

## 0x10F0206 Chức năng DI (bật servo bật) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DI (bật servo bật) được kích hoạt

### Reason
 

### Action
 

## 0x10F0207 Chức năng DI (tắt servo bật) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DI (tắt servo bật) được kích hoạt

### Reason
 

### Action
 

## 0x10F0208 Chức năng DI (vào chế độ ghi đè đầu tiên) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DI (vào chế độ ghi đè đầu tiên) được kích hoạt

### Reason
 

### Action
 

## 0x10F0209 Chức năng DI (Vào chế độ ghi đè thứ cấp) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DI (Vào chế độ ghi đè thứ cấp) được kích hoạt

### Reason
 

### Action
 

## 0x10F020a Chức năng DI (vào điểm dừng bảo vệ) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DI (vào điểm dừng bảo vệ) được kích hoạt

### Reason
 

### Action
 

## 0x10F020b Chức năng DI (trở lại vị trí ban đầu) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DI (trở lại vị trí ban đầu) được kích hoạt

### Reason
 

### Action
 

## 0x10F020c Chức năng DI (xóa lỗi) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DI (xóa lỗi) được kích hoạt

### Reason
 

### Action
 

## 0x10F020d Chức năng DI (Vào Chế độ kéo) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DI (Vào Chế độ kéo) được kích hoạt

### Reason
 

### Action
 

## 0x10F020e Chức năng DI (thoát chế độ kéo) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DI (thoát chế độ kéo) được kích hoạt

### Reason
 

### Action
 

## 0x10F020f Chức năng DI (dừng chương trình hoặc tạm dừng chương trình) đã được kích hoạt, (chương trình đang chạy) không nên được thực thi 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Chức năng DI (dừng chương trình hoặc tạm dừng chương trình) đã được kích hoạt, (chương trình đang chạy) không nên được thực thi

### Reason
 

### Action
 

## 0x10F0210 Chức năng DI (chương trình tạm dừng) được kích hoạt, (chương trình tiếp tục) không được thực thi 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Chức năng DI (chương trình tạm dừng) được kích hoạt, (chương trình tiếp tục) không được thực thi

### Reason
 

### Action
 

## 0x10F0211 Chức năng DI (tắt nguồn) được kích hoạt, (bật nguồn) không được thực thi 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Chức năng DI (tắt nguồn) được kích hoạt, (bật nguồn) không được thực thi

### Reason
 

### Action
 

## 0x10F0212 Chức năng DI (Enable Down) đã được kích hoạt, (Enable Up) không nên được thực thi 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Chức năng DI (Enable Down) đã được kích hoạt, (Enable Up) không nên được thực thi

### Reason
 

### Action
 

## 0x10F0220 Chức năng DO (công việc nhàn rỗi) được thiết lập 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DO (công việc nhàn rỗi) được thiết lập

### Reason
 

### Action
 

## 0x10F0221 Đặt lại chức năng DO (công việc không hoạt động) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Đặt lại chức năng DO (công việc không hoạt động)

### Reason
 

### Action
 

## 0x10F0222 Cài đặt chức năng DO (tạm dừng chương trình công việc) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Cài đặt chức năng DO (tạm dừng chương trình công việc)

### Reason
 

### Action
 

## 0x10F0223 Đặt lại chức năng DO (tạm dừng chương trình công việc) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Đặt lại chức năng DO (tạm dừng chương trình công việc)

### Reason
 

### Action
 

## 0x10F0224 Cài đặt chức năng DO (chương trình công việc đang chạy) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Cài đặt chức năng DO (chương trình công việc đang chạy)

### Reason
 

### Action
 

## 0x10F0225 Reset chức năng DO (chương trình làm việc đang chạy) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Reset chức năng DO (chương trình làm việc đang chạy)

### Reason
 

### Action
 

## 0x10F0226 Chức năng DO (lỗi hệ thống điều khiển) được đặt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DO (lỗi hệ thống điều khiển) được đặt

### Reason
 

### Action
 

## 0x10F0227 Đặt lại chức năng DO (lỗi hệ thống điều khiển) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Đặt lại chức năng DO (lỗi hệ thống điều khiển)

### Reason
 

### Action
 

## 0x10F0228 Chức năng DO (bật nguồn robot) được đặt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DO (bật nguồn robot) được đặt

### Reason
 

### Action
 

## 0x10F0229 Đặt lại chức năng DO (bật nguồn rô-bốt) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Đặt lại chức năng DO (bật nguồn rô-bốt)

### Reason
 

### Action
 

## 0x10F022a Chức năng DO (bật servo được bật) được đặt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DO (bật servo được bật) được đặt

### Reason
 

### Action
 

## 0x10F022b Cài đặt lại chức năng DO (kích hoạt séc-vô đang bật) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Cài đặt lại chức năng DO (kích hoạt séc-vô đang bật)

### Reason
 

### Action
 

## 0x10F022c Bộ chức năng DO (robot đang chuyển động) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Bộ chức năng DO (robot đang chuyển động)

### Reason
 

### Action
 

## 0x10F022d Đặt lại chức năng DO (trong khi chuyển động của robot) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Đặt lại chức năng DO (trong khi chuyển động của robot)

### Reason
 

### Action
 

## 0x10F022e Cài đặt chức năng DO (robot đứng yên) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Cài đặt chức năng DO (robot đứng yên)

### Reason
 

### Action
 

## 0x10F022f Reset chức năng DO (robot đứng yên) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Reset chức năng DO (robot đứng yên)

### Reason
 

### Action
 

## 0x10F0230 Chức năng DO (hệ thống điều khiển sẵn sàng) được thiết lập 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DO (hệ thống điều khiển sẵn sàng) được thiết lập

### Reason
 

### Action
 

## 0x10F0231 Đặt lại chức năng DO (hệ thống điều khiển sẵn sàng) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Đặt lại chức năng DO (hệ thống điều khiển sẵn sàng)

### Reason
 

### Action
 

## 0x10F0232 Cài đặt chức năng DO (dừng khẩn cấp của robot) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Cài đặt chức năng DO (dừng khẩn cấp của robot)

### Reason
 

### Action
 

## 0x10F0233 Đặt lại chức năng DO (dừng khẩn cấp của robot) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Đặt lại chức năng DO (dừng khẩn cấp của robot)

### Reason
 

### Action
 

## 0x10F0234 Chức năng DO (robot ở chế độ ghi đè phụ) được đặt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DO (robot ở chế độ ghi đè phụ) được đặt

### Reason
 

### Action
 

## 0x10F0235 Đặt lại chức năng DO (robot ở chế độ ghi đè thứ cấp) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Đặt lại chức năng DO (robot ở chế độ ghi đè thứ cấp)

### Reason
 

### Action
 

## 0x10F0236 Chức năng DO (robot dừng bảo vệ) được cài đặt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DO (robot dừng bảo vệ) được cài đặt

### Reason
 

### Action
 

## 0x10F0237 Đặt lại chức năng DO (rô bốt dừng bảo vệ) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Đặt lại chức năng DO (rô bốt dừng bảo vệ)

### Reason
 

### Action
 

## 0x10F0238 Chức năng DO (robot ở vị trí ban đầu) được cài đặt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DO (robot ở vị trí ban đầu) được cài đặt

### Reason
 

### Action
 

## 0x10F0239 Reset chức năng DO (robot ở vị trí ban đầu) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Reset chức năng DO (robot ở vị trí ban đầu)

### Reason
 

### Action
 

## 0x10F0240 Chức năng DO (robot ở chế độ ghi đè chính) được đặt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng DO (robot ở chế độ ghi đè chính) được đặt

### Reason
 

### Action
 

## 0x10F0241 Đặt lại chức năng DO (robot đang ở chế độ ghi đè chính) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Đặt lại chức năng DO (robot đang ở chế độ ghi đè chính)

### Reason
 

### Action
 

## 0x10F0250 Chức năng an toàn DI (dừng khẩn cấp bổ sung) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DI (dừng khẩn cấp bổ sung) được kích hoạt

### Reason
 

### Action
 

## 0x10F0251 Chức năng an toàn DI (dừng bảo vệ bổ sung) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DI (dừng bảo vệ bổ sung) được kích hoạt

### Reason
 

### Action
 

## 0x10F0252 Chức năng an toàn DI (thiết lập lại dừng bảo vệ) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DI (thiết lập lại dừng bảo vệ) được kích hoạt

### Reason
 

### Action
 

## 0x10F0253 Chức năng an toàn DI (Reduced Mode) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DI (Reduced Mode) được kích hoạt

### Reason
 

### Action
 

## 0x10F0254 Chức năng an toàn DI (kích hoạt ba vị trí) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DI (kích hoạt ba vị trí) được kích hoạt

### Reason
 

### Action
 

## 0x10F0255 Chức năng an toàn DI (Thiết lập mức độ nhạy va chạm 0) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DI (Thiết lập mức độ nhạy va chạm 0) được kích hoạt

### Reason
 

### Action
 

## 0x10F0256 Chức năng an toàn DI (Thiết lập mức độ nhạy va chạm 1) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DI (Thiết lập mức độ nhạy va chạm 1) được kích hoạt

### Reason
 

### Action
 

## 0x10F0257 Chức năng an toàn DI (Thiết lập mức độ nhạy va chạm 2) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DI (Thiết lập mức độ nhạy va chạm 2) được kích hoạt

### Reason
 

### Action
 

## 0x10F0258 Chức năng an toàn DI (Thiết lập mức độ nhạy va chạm 3) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DI (Thiết lập mức độ nhạy va chạm 3) được kích hoạt

### Reason
 

### Action
 

## 0x10F0259 Chức năng an toàn DI (Thiết lập mức độ nhạy va chạm 4) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DI (Thiết lập mức độ nhạy va chạm 4) được kích hoạt

### Reason
 

### Action
 

## 0x10F025A Chức năng an toàn DI (Thiết lập mức độ nhạy va chạm 5) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DI (Thiết lập mức độ nhạy va chạm 5) được kích hoạt

### Reason
 

### Action
 

## 0x10F025B Chức năng an toàn DI (Thiết lập mức độ nhạy va chạm 7) được kích hoạt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DI (Thiết lập mức độ nhạy va chạm 7) được kích hoạt

### Reason
 

### Action
 

## 0x10F0260 Chức năng an toàn DO (dừng khẩn cấp được kích hoạt bằng nút bấm) được cài đặt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DO (dừng khẩn cấp được kích hoạt bằng nút bấm) được cài đặt

### Reason
 

### Action
 

## 0x10F0261 Đặt lại chức năng an toàn DO (khởi động nút dừng khẩn cấp) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Đặt lại chức năng an toàn DO (khởi động nút dừng khẩn cấp)

### Reason
 

### Action
 

## 0x10F0262 Chức năng an toàn DO (kích hoạt dừng khẩn cấp hệ thống) được đặt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DO (kích hoạt dừng khẩn cấp hệ thống) được đặt

### Reason
 

### Action
 

## 0x10F0263 Đặt lại chức năng an toàn DO (dừng khẩn cấp hệ thống) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Đặt lại chức năng an toàn DO (dừng khẩn cấp hệ thống)

### Reason
 

### Action
 

## 0x10F0264 Chức năng an toàn DO (rô-bốt dừng bảo vệ) được đặt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DO (rô-bốt dừng bảo vệ) được đặt

### Reason
 

### Action
 

## 0x10F0265 Đặt lại chức năng an toàn DO (rô bốt dừng bảo vệ) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Đặt lại chức năng an toàn DO (rô bốt dừng bảo vệ)

### Reason
 

### Action
 

## 0x10F0266 Chức năng an toàn DO (rô-bốt chuyển động) được cài đặt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DO (rô-bốt chuyển động) được cài đặt

### Reason
 

### Action
 

## 0x10F0267 Chức năng an toàn DO (rô-bốt chuyển động) được cài đặt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DO (rô-bốt chuyển động) được cài đặt

### Reason
 

### Action
 

## 0x10F0268 Chức năng an toàn DO (rô-bốt ở chế độ giảm) được đặt 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Chức năng an toàn DO (rô-bốt ở chế độ giảm) được đặt

### Reason
 

### Action
 

## 0x10F0269 Đặt lại chức năng an toàn DO (rô bốt ở chế độ giảm) 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Đặt lại chức năng an toàn DO (rô bốt ở chế độ giảm)

### Reason
 

### Action
 

## 0x10F026A Cổng đầu ra kỹ thuật số không có sẵn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Cổng đầu ra kỹ thuật số không có sẵn

### Reason
 Cổng đầu ra kỹ thuật số [: Pin_] được thiết lập để làm chức năng DO hoặc an ninh DO, không được phép sửa đổi như một đặc vụ DO

### Action
 1, hủy cấu hình chức năng cho cổng [: pin_];
2, không đặt trạng thái của cổng [: pin_] theo hướng dẫn

## 0x10F0280 Hoàn thành nhận dạng tham số động lực học 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Hoàn thành nhận dạng tham số động lực học

### Reason
 

### Action
 

## 0x10F0281 Nhận dạng tham số ma sát đã hoàn thành 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Nhận dạng tham số ma sát đã hoàn thành

### Reason
 

### Action
 

## 0x10F0282 Viết các thông số động học hoàn thành, khởi động lại hoặc khởi động lại có hiệu lực 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Viết các thông số động học hoàn thành, khởi động lại hoặc khởi động lại có hiệu lực

### Reason
 

### Action
 

## 0x10F0283 Kết thúc Crash Bounce 
 Type: Info 

 IsShowConfirm：No  

### Description 
 Điểm va chạm quá gần điểm bắt đầu chuyển động, sự phục hồi có thể bị chấm dứt vì không thể xác nhận liệu đường đi của sự phục hồi có an toàn hay không.

### Reason
 

### Action
 

## 0x10F0284  
 Type: Info 

 IsShowConfirm：No  

### Description 
 

### Reason
 

### Action
 

## 0x10F0300 Khởi tạo đăng nhập không thành công 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Khởi tạo đăng nhập không thành công

### Reason
 Có một ngoại lệ trong việc đọc dữ liệu khi đăng nhập vào kết nối

### Action
 1. Vui lòng kiểm tra xem có phiên bản nào không khớp giữa phiên bản APP phần mềm hiện tại và phiên bản bộ điều khiển hay không. 2. Vui lòng kiểm tra xem có bất kỳ sự bất thường nào trong kết nối mạng không. 3. Vui lòng thử kết nối lại robot hoặc khởi động lại hoạt động của APP.

## 0x10F0301 Phiên bản thử nghiệm nội bộ đã hết hạn 
 Type: Error 

 IsShowConfirm：Yes  

### Description 
 Phiên bản thử nghiệm nội bộ đã hết hạn

### Reason
 Phiên bản thử nghiệm nội bộ đã hết hạn

### Action
 Phiên bản thử nghiệm nội bộ

## 0xE0000 Không có lỗi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không có lỗi

### Reason
 Không có lỗi

### Action
 Không có lỗi

## 0xE0001 Ngoại lệ khi gọi gRPC 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Ngoại lệ khi gọi gRPC

### Reason
 Ngoại lệ khi gọi gRPC

### Action
 Hãy liên hệ với kỹ thuật viên JAKA để tư vấn.

## 0xE0002 Mật khẩu lỗi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Mật khẩu lỗi

### Reason
 Lỗi đăng nhập, mật khẩu sai

### Action
 Hãy kiểm tra nhập mật khẩu là đúng, nhập sai, hãy nhập lại mật khẩu chính xác

## 0xE0003 Lỗi tên người dùng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Lỗi tên người dùng

### Reason
 Lỗi đăng nhập, tên người dùng sai

### Action
 Hãy kiểm tra xem tên người dùng đã nhập đúng, nhập sai, hãy nhập lại tên người dùng chính xác.

## 0xE0004 Lặp lại đăng nhập 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Lặp lại đăng nhập

### Reason
 Lặp lại đăng nhập

### Action
 Hãy xác nhận rằng các thiết bị đầu cuối khác đã bị ngắt kết nối trước khi đăng nhập.

## 0xE0005 Người dùng chưa đăng nhập 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Người dùng chưa đăng nhập

### Reason
 Người dùng chưa đăng nhập

### Action
 Hãy đăng nhập tên người dùng và mật khẩu trước khi hành động.

## 0xE0006 Sự bất thường giới hạn khớp 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Giới hạn tối thiểu của các khớp là quá nhỏ hoặc giới hạn tối đa là quá lớn hoặc giới hạn tối thiểu là lớn hơn giới hạn tối đa.

### Reason
 Giới hạn tối thiểu của các khớp là quá nhỏ hoặc giới hạn tối đa là quá lớn hoặc giới hạn tối thiểu là lớn hơn giới hạn tối đa.

### Action
 Xin vui lòng điều chỉnh giới hạn khớp đến vị trí thích hợp trước khi phẫu thuật.

## 0xE0007 Nghịch giải kinematics đã thất bại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Nghịch giải kinematics đã thất bại

### Reason
 Nghịch giải kinematics đã thất bại

### Action
 Giải pháp nghịch lý của robot thất bại, xin vui lòng dạy lại robot.

## 0xE0008 Giải pháp vận động học đã thất bại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Giải pháp vận động học đã thất bại

### Reason
 Giải pháp vận động học đã thất bại

### Action
 Hãy liên hệ với kỹ thuật viên JAKA để tư vấn.

## 0xE0009 Không tìm thấy tập tin hay thư mục 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không tìm thấy tập tin hay thư mục

### Reason
 Không tìm thấy tập tin hay thư mục

### Action
 Hãy xác nhận rằng tập tin hoặc thư mục tồn tại trước khi hành động.

## 0xE000A Phát hiện không khớp với MD5 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Phát hiện không khớp với MD5

### Reason
 Phát hiện không khớp với MD5

### Action
 Hãy kiểm tra xác nhận MD5.

## 0xE000B Điểm trung tâm công cụ điện toán thất bại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Điểm trung tâm công cụ điện toán thất bại

### Reason
 Điểm trung tâm công cụ điện toán thất bại

### Action
 Khung ảnh công cụ tính toán sai, hãy kiểm tra khung ảnh công cụ được thiết lập là đúng

## 0xE000C Thông số không hợp lệ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Thông số không hợp lệ

### Reason
 Thông số không hợp lệ

### Action
 Tham số là không đúng, sau khi sửa đổi các tham số chính xác để hoạt động.

## 0xE000D Quá nhiều kết quả buộc vào cùng một trạng thái 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Quá nhiều kết quả buộc vào cùng một trạng thái

### Reason
 Quá nhiều kết quả buộc vào cùng một trạng thái

### Action
 Xin vui lòng thay đổi tình trạng DI, DO để cho kết quả bình thường.

## 0xE000E Bí danh biến đã tồn tại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Bí danh biến đã tồn tại

### Reason
 Bí danh biến đã tồn tại

### Action
 Hãy thay đổi tên biến trước khi hành động.

## 0xE000F Giá trị tham số nằm ngoài phạm vi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Giá trị tham số nằm ngoài phạm vi

### Reason
 Giá trị tham số nằm ngoài phạm vi

### Action
 Hãy thay đổi giá trị tham số đến phạm vi thích hợp trước khi hành động.

## 0xE0010 ID thông báo vượt quá tầm kiểm soát 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 ID thông báo vượt quá tầm kiểm soát

### Reason
 ID thông báo vượt quá tầm kiểm soát

### Action
 Vui lòng thay đổi ID thông báo để phù hợp.

## 0xE0011 Vui lòng thay đổi ID thông báo để phù hợp. 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Vui lòng thay đổi ID thông báo để phù hợp.

### Reason
 Vui lòng thay đổi ID thông báo để phù hợp.

### Action
 Hãy kiểm tra xem chuỗi dài hơn 16 ký tự, sửa đổi thành 16 ký tự trước khi hành động.

## 0xE0012 Không có quyền hành 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không có quyền hành

### Reason
 Không có quyền hành

### Action
 Không có quyền hành, xin vui lòng đăng nhập một lần nữa sau khi chuyển quyền trước khi hành động.

## 0xE0013 Cấp quyền người dùng không đúng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Cấp quyền người dùng không đúng

### Reason
 Cấp quyền người dùng không đúng

### Action
 Quyền hoạt động là không đủ, xin vui lòng đăng nhập một lần nữa sau khi chuyển quyền và sau đó hành động.

## 0xE0014 Tên người dùng đã tồn tại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tên người dùng đã tồn tại

### Reason
 Tên người dùng đã tồn tại

### Action
 Hãy thay đổi tên người dùng trước khi đăng nhập.

## 0xE0015 Nâng cấp cài đặt gói là không chính xác 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Nâng cấp cài đặt gói là không chính xác

### Reason
 Nâng cấp cài đặt gói là không chính xác

### Action
 Hãy kiểm tra xem tên gói cài đặt là đúng

## 0xE0016 Không hỗ trợ hệ thống tọa độ jog 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không hỗ trợ hệ thống tọa độ jog

### Reason
 Không hỗ trợ hệ thống tọa độ jog

### Action
 Vui lòng kiểm tra xem có hỗ trợ hệ thống định vị jog không, sửa đổi đúng trước khi hành động.

## 0xE0017 Mô hình này hiện không được hỗ trợ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Mô hình này hiện không được hỗ trợ

### Reason
 Mô hình này hiện không được hỗ trợ

### Action
 Hãy kiểm tra xem robot có hỗ trợ chế độ hiện hành, chuyển sang chế độ đúng trước khi hành động.

## 0xE0018 Robot đang di chuyển 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Robot đang di chuyển

### Reason
 Robot đang di chuyển

### Action
 Hãy kiểm tra xem robot đang di chuyển, nên làm cho robot dừng hoạt động.

## 0xE0019 Không thể nạp công việc khi công việc đang chạy 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể nạp công việc khi công việc đang chạy

### Reason
 Không thể nạp công việc khi công việc đang chạy

### Action
 Chương trình đang chạy, dừng chương trình và mở chương trình.

## 0xE001A Kim đang được dùng bởi các chức năng khác 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Kim đang được dùng bởi các chức năng khác

### Reason
 Kim đang được dùng bởi các chức năng khác

### Action
 Hãy xem Kim đang được dùng bởi các chức năng khác.

## 0xE001B Không thể thiết lập mức độ phân cấp trong chế độ suy giảm 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể thiết lập mức độ phân cấp trong chế độ suy giảm

### Reason
 Không thể thiết lập mức độ phân cấp trong chế độ suy giảm

### Action
 Hãy kiểm tra xem bạn đang ở chế độ thu hồi, bạn nên thiết lập mức độ phân cấp trong chế độ không thu hồi.

## 0xE001C Lỗi tạo văn lệnh NGC khi quỹ đạo được lặp lại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Lỗi tạo văn lệnh NGC khi quỹ đạo được lặp lại

### Reason
 Lỗi tạo văn lệnh NGC khi quỹ đạo được lặp lại

### Action
 Xem tập tin văn lệnh có đúng không

## 0xE001D Chỉ có một kênh Tiors 485 có thể dùng bộ cảm biến mô-men xoắn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Chỉ có một kênh Tiors 485 có thể dùng bộ cảm biến mô-men xoắn

### Reason
 Chỉ có một kênh Tiors 485 có thể dùng bộ cảm biến mô-men xoắn

### Action
 Hãy kiểm tra xem kênh Tio RS485 có bị thay đổi bởi nhiều kênh sử dụng vào một kênh trước khi hành động.

## 0xE001E Chuyển kênh cảm biến mô-men xoắn không thành công 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Chuyển kênh cảm biến mô-men xoắn không thành công

### Reason
 Chuyển kênh cảm biến mô-men xoắn không thành công

### Action
 Hãy kiểm tra xem bộ cảm biến mô-men xoắn có hoạt động không, ngừng hoạt động trước khi hành động.

## 0xE001F Dòng chảy robot là không chính xác 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Dòng chảy robot là không chính xác

### Reason
 Dòng chảy robot là không chính xác

### Action
 Hãy kiểm tra cho dù dòng chảy robot là chính xác, sửa đổi cho dòng chảy robot đúng số sau khi hoạt động

## 0xE0020 Dịch vụ redis không hoạt động 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Dịch vụ redis không hoạt động

### Reason
 Dịch vụ redis không hoạt động

### Action
 Hãy kiểm tra xem máy phục vụ redis có hoạt động không và đảm bảo rằng redis sẽ hoạt động sau khi nó hoạt động.

## 0xE0021 Một mô hình robot chưa biết 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Một mô hình robot chưa biết

### Reason
 Một mô hình robot chưa biết

### Action
 Hãy kiểm tra xem mô hình robot có đúng không

## 0xE0022 Số lượng mô-đun Extio hoặc chỉ số Extio vượt quá phạm vi. 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Số lượng mô-đun Extio hoặc chỉ số Extio vượt quá phạm vi.

### Reason
 Số lượng mô-đun Extio hoặc chỉ số IO mở rộng vượt quá phạm vi.
Số lượng tối đa mô-đun Extio: 8
Phạm vi chỉ số Extio DI/DO: 0~64
Phạm vi chỉ số Extio AI/AO: 0~31

### Action
 Vui lòng kiểm tra số lượng mô-đun Extio hoặc chỉ số Extio trước khi tiến hành thao tác.

## 0xE0026 Hoạt động này không được phép trong chế độ mô phỏng 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Hoạt động này không được phép trong chế độ mô phỏng

### Reason
 Hoạt động này không được phép trong chế độ mô phỏng

### Action
 Hãy thử lại sau khi thoát khỏi chế độ mô phỏng

## 0xE0027 Đọc hồ sơ mạng thất bại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Đọc hồ sơ mạng thất bại

### Reason
 Đọc hồ sơ mạng thất bại

### Action
 Hãy thử thiết lập lại và liên hệ với kỹ thuật viên để kiểm tra hồ sơ mạng nếu nó vẫn xuất hiện

## 0xE0028 Không thể nhận dạng trong trạng thái kích hoạt  
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể nhận dạng trong trạng thái kích hoạt 

### Reason
 Không thể nhận dạng trong trạng thái kích hoạt 

### Action
 Vui lòng kiểm tra và sửa đổi cấu hình DI chức năng. 

## 0xE03E8 Số lượng AddOn đã vượt quá giới hạn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Số lượng AddOn đã vượt quá giới hạn

### Reason
 Số lượng AddOn đã vượt quá giới hạn

### Action
 Kiểm tra số lượng khởi động AddOn, xin vui lòng làm sạch một phần của AddOn trước khi hành động.

## 0xE03E9 Dịch vụ AddOn đã thất bại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Dịch vụ AddOn đã thất bại

### Reason
 Dịch vụ AddOn đã thất bại

### Action
 Dịch vụ AddOn không hoạt động, hãy kiểm tra cấu hình AddOn trước khi hành động.

## 0xE03EA Tắt dịch vụ AddOn không thành công 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tắt dịch vụ AddOn không thành công

### Reason
 Tắt dịch vụ AddOn không thành công

### Action
 Lỗi tắt dịch vụ AddOn, hãy kiểm tra cấu hình AddOn trước khi hành động.

## 0xE03EB Cấu hình không hợp lệ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Cấu hình không hợp lệ

### Reason
 Cấu hình không hợp lệ

### Action
 Hãy kiểm tra hồ sơ AddOn trước khi hành động.

## 0xE03EC Dịch vụ AddOn không tồn tại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Dịch vụ AddOn không tồn tại

### Reason
 Dịch vụ AddOn không tồn tại

### Action
 Dịch vụ AddOn không có AddOn chưa được phát hiện, AddOn có thể đã được di chuyển hoặc xóa, xin vui lòng cập nhật và thử lại.

## 0xE03ED Cấu hình AddOn không tồn tại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Cấu hình AddOn không tồn tại

### Reason
 Cấu hình AddOn không tồn tại

### Action
 Cấu hình AddOn không tồn tại, hãy xác nhận phiên bản phần mềm hiện thời và liên lạc với nhân viên dịch vụ kỹ thuật JAKA.

## 0xE03EE Thông số AddOn không rõ trong hồ sơ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Thông số AddOn không rõ trong hồ sơ

### Reason
 Thông số AddOn không rõ trong hồ sơ

### Action
 Chưa xác định được mục convention trong hồ sơ AddOn, hãy kiểm tra xem nó có đúng không.

## 0xE03EF Lỗi kiểu AddOn trong hồ sơ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Lỗi kiểu AddOn trong hồ sơ

### Reason
 Lỗi kiểu AddOn trong hồ sơ

### Action
 Chưa xác định mục cấu hình kiểu của cấu hình AddOn, hãy xác nhận loại là một số trong phạm vi 1-3.

## 0xE03F0 Lỗi ngôn ngữ lập trình tập tin cấu hình 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Lỗi ngôn ngữ lập trình tập tin cấu hình

### Reason
 Lỗi ngôn ngữ lập trình tập tin cấu hình

### Action
 Lỗi ngôn ngữ lập trình tập tin cấu hình

## 0xE03F1 Lỗi nhập chương trình AddOn trong hồ sơ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Lỗi nhập chương trình AddOn trong hồ sơ

### Reason
 Lỗi nhập chương trình AddOn trong hồ sơ

### Action
 Chưa xác định được ngôn ngữ trong cấu hình AddOn, hãy đảm bảo rằng dịch vụ không rỗng và ít hơn 50 byte dịch vụ

## 0xE03F2 Lỗi cấu hình tự khởi động trong tập tin cấu hình 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Lỗi cấu hình tự khởi động trong tập tin cấu hình

### Reason
 Lỗi cấu hình tự khởi động trong tập tin cấu hình

### Action
 Chưa xác định được mục khả năng serviceenable trong hồ sơ AddOn, hãy chắc chắn rằng servicekhả năng là đúng hoặc sai

## 0xE03F3 Hồ sơ thiếu các mục cấu hình cần thiết 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Hồ sơ thiếu các mục cấu hình cần thiết

### Reason
 Hồ sơ thiếu các mục cấu hình cần thiết

### Action
 Không có mục cấu hình cần thiết trong hồ sơ AddOn, hãy kiểm tra xem hồ sơ có đúng không

## 0xE03F4 Lỗi cấu hình tên trong AddOn trong hồ sơ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Lỗi cấu hình tên trong AddOn trong hồ sơ

### Reason
 Lỗi cấu hình tên trong AddOn trong hồ sơ

### Action
 Tập tin cấu hình AddOn có số byte Name trên 40 byte, hãy thử lại sau khi xác nhận cấu hình là đúng.

## 0xE03F5 Lỗi mô tả AddOn trong hồ sơ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Lỗi mô tả AddOn trong hồ sơ

### Reason
 Lỗi mô tả AddOn trong hồ sơ

### Action
 Số byte trong hồ sơ AddOn là hơn 40 byte, hãy thử lại sau khi xác nhận cấu hình là đúng.

## 0xE03F6 Không thể nhận dạng phiên bản AddOn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể nhận dạng phiên bản AddOn

### Reason
 Không thể nhận dạng phiên bản AddOn

### Action
 Không xác định được phiên bản trong cấu hình AddOn, hãy thử lại sau khi xác nhận cấu hình đúng.

## 0xE03F7 Lỗi địa chỉ mạng AddOn trong hồ sơ 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Lỗi địa chỉ mạng AddOn trong hồ sơ

### Reason
 Lỗi địa chỉ mạng AddOn trong hồ sơ

### Action
 Lỗi phân tích url trong hồ sơ AddOn, hãy thử lại sau khi xác nhận cấu hình là đúng.

## 0xE03F8 Có một sự bất thường trong khẩu hiệu phân phối 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Có một sự bất thường trong khẩu hiệu phân phối

### Reason
 Có một sự bất thường trong khẩu hiệu phân phối

### Action
 Việc phân bổ cổng AddOn đã thất bại, hãy liên hệ với kỹ thuật viên thẻ để hỗ trợ sau khi xác nhận hồ sơ là đúng.

## 0xE03F9 Dịch vụ AddOn đang hoạt động 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Dịch vụ AddOn đang hoạt động

### Reason
 Dịch vụ AddOn đang hoạt động

### Action
 Dịch vụ AddOn đang chạy, xin dừng lại trước khi hoạt động lại.

## 0xE03FA Thư mục đã có 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Thư mục đã có

### Reason
 Thư mục đã có

### Action
 Hãy kiểm tra xem thư mục đã tồn tại và chọn đúng thư mục trước khi hành động.

## 0xE03FB Địa chỉ IP đã tồn tại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Địa chỉ IP đã tồn tại

### Reason
 Địa chỉ IP đã tồn tại

### Action
 Hãy kiểm tra xem địa chỉ IP có tồn tại không, thay đổi nó thành địa chỉ IP chính xác trước khi hành động.

## 0xE044C Tập tin xác nhận không khớp 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tập tin xác nhận không khớp

### Reason
 Tập tin xác nhận không khớp

### Action
 Hãy kiểm tra xem các tập tin có khớp với nhau hay tải lại chương trình nâng cấp

## 0xE044D Mật khẩu lỗi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Mật khẩu lỗi

### Reason
 Mật khẩu lỗi

### Action
 Vui lòng nhập mật khẩu chính xác

## 0xE044E Nhập mật khẩu không phù hợp hai lần 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Nhập mật khẩu không phù hợp hai lần

### Reason
 Nhập mật khẩu không phù hợp hai lần

### Action
 Nhập mật khẩu hai lần

## 0xE044F Cần phải đặt lại mật khẩu để đăng nhập lần đầu tiên 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Cần phải đặt lại mật khẩu để đăng nhập lần đầu tiên

### Reason
 Cần phải đặt lại mật khẩu để đăng nhập lần đầu tiên

### Action
 Vui lòng đặt lại mật khẩu trước khi thực hiện chiến dịch đăng nhập.

## 0xE0450 Thay đổi mật khẩu không thể giống như lần trước 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Thay đổi mật khẩu không thể giống như lần trước

### Reason
 Thay đổi mật khẩu không thể giống như lần trước

### Action
 Thay đổi mật khẩu khác với lần trước.

## 0xE0451 Tài khoản không được kích hoạt 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Tài khoản không được kích hoạt

### Reason
 Tài khoản không được kích hoạt

### Action
 Tài khoản không được kích hoạt, xin vui lòng liên hệ với người quản lý thiết bị

## 0xE0452 Không thể kích hoạt tài khoản 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể kích hoạt tài khoản

### Reason
 Không thể kích hoạt tài khoản

### Action
 Không thể kích hoạt tài khoản, tên tài khoản sai, xin vui lòng liên hệ với người quản lý thiết bị

## 0xE0453 AddOn đang lắp đặt 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 AddOn đang lắp đặt

### Reason
 AddOn đang lắp đặt

### Action
 Cài đặt AddOn đang tiến hành, xin vui lòng thử lại sau.

## 0xE0454 Cài đặt AddOn đã thất bại 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Cài đặt AddOn đã thất bại

### Reason
 Cài đặt AddOn đã thất bại

### Action
 Cài đặt AddOn đã thất bại, hãy xác nhận rằng gói cài đặt AddOn là chính xác sau khi thử lại.

## 0xE0455 Gói AddOn quá lớn 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Gói AddOn quá lớn

### Reason
 Gói AddOn quá lớn

### Action
 AddOn cài đặt gói là quá lớn hoặc quá nhiều tập tin trong gói, gây ra thời gian cài đặt, xin vui lòng giảm kích thước của gói cài đặt và số lượng tập tin sau khi thử lại.

## 0xEFFFF Không biết lỗi 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không biết lỗi

### Reason
 Không biết lỗi

### Action
 Hãy liên hệ với kỹ thuật viên JAKA để tư vấn.

## 0x201002 TIO không bật nguồn được 
 Type: Warning 

 IsShowConfirm：Yes  

### Description 
 Không thể khởi tạo TIO sau khi bật nguồn robot.

### Reason
 Sau khi tất cả các khớp của robot thiết lập liên lạc, không nhận được dữ liệu TIO nào trong vòng 1 giây.

### Action
 Kiểm tra xem đường truyền thông TIO và đường dây điện có được kết nối tốt hay không; kiểm tra xem bo mạch TIO có hư hỏng rõ ràng hay không; liên hệ với nhà sản xuất để được hỗ trợ

