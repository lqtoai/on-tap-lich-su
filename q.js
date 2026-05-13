const quizData = [
    // CÂU 1: MỨC ĐỘ ƯU TIÊN CSS
    {
        lesson: "CSS - Mức độ ưu tiên",
        q: "CSS tuân theo một thứ tự ưu tiên để quyết định mẫu nào được áp dụng khi một phần tử có nhiều định dạng?",
        ans: true
    },
    {
        lesson: "CSS - Mức độ ưu tiên",
        q: "Thuộc tính có từ khóa !important sẽ luôn có mức độ ưu tiên cao nhất trong CSS?",
        ans: true
    },
    {
        lesson: "CSS - Mức độ ưu tiên",
        q: "Mẫu CSS có trọng số THẤP nhất sẽ được ưu tiên áp dụng?",
        ans: false // Sai: Trọng số CAO nhất mới được ưu tiên
    },
    {
        lesson: "CSS - Mức độ ưu tiên",
        q: "Nếu hai mẫu định dạng có cùng trọng số, mẫu nào được khai báo SAU sẽ được áp dụng?",
        ans: true
    },

    // CÂU 2: QUẢN TRỊ CNTT - KIẾN THỨC CẦN THIẾT
    {
        lesson: "Nghề nghiệp CNTT - Quản trị",
        q: "Nhân sự quản trị hệ thống cần kiến thức về các phương thức tấn công mạng và tường lửa?",
        ans: true
    },
    {
        lesson: "Nghề nghiệp CNTT - Quản trị",
        q: "Người làm quản trị mạng CHỈ CẦN biết cài đặt cấu hình và bảo mật mạng là đủ?",
        ans: false // Sai: Cần thêm kĩ năng mềm và kiến thức pháp luật
    },
    {
        lesson: "Nghề nghiệp CNTT - Quản trị",
        q: "Nhân sự CNTT cần nắm vững kiến thức luật pháp an ninh mạng và quy chuẩn quốc tế?",
        ans: true
    },
    {
        lesson: "Nghề nghiệp CNTT - Quản trị",
        q: "Kỹ năng tự nghiên cứu và chịu áp lực cao là không cần thiết đối với quản trị mạng?",
        ans: false
    },

    // CÂU 3: CÔNG VIỆC THỰC TẾ
    {
        lesson: "Nghề nghiệp CNTT - Công việc thực tế",
        q: "Công việc của quản trị CNTT bao gồm triển khai giải pháp bảo mật nhiều lớp như mã hóa dữ liệu?",
        ans: true
    },
    {
        lesson: "Nghề nghiệp CNTT - Công việc thực tế",
        q: "Phát hiện dấu hiệu bất thường bằng cách theo dõi lưu lượng mạng và nhật ký hệ thống là việc của quản trị viên?",
        ans: true
    },
    {
        lesson: "Nghề nghiệp CNTT - Công việc thực tế",
        q: "Khi có sự cố, quản trị viên không cần khôi phục dữ liệu mà chỉ cần cài lại máy?",
        ans: false
    },
    {
        lesson: "Nghề nghiệp CNTT - Công việc thực tế",
        q: "KHÔNG NÊN cập nhật bản vá lỗi phần mềm và hệ điều hành để tránh làm chậm máy?",
        ans: false // Sai: Bắt buộc phải cập nhật để bảo mật
    }
];