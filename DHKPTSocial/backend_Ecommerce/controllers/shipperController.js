import Shipper from "../models/shipperModel.js";

// Đăng nhập Shipper (so username và password thuần)
export const loginShipper = async (req, res) => {
  const { username, password } = req.body;

  try {
    const shipper = await Shipper.findOne({ username, password });
    if (!shipper) {
      return res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu" });
    }

    res.status(200).json({
      message: "Đăng nhập thành công",
      shipper,
    });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

// Lấy danh sách shipper (tùy chọn lọc theo role hoặc status)
export const getAllShippers = async (req, res) => {
  const { role, status } = req.query;

  const filter = {};
  if (role) filter.role = role;
  if (status) filter.status = status;

  try {
    const shippers = await Shipper.find(filter);
    res.status(200).json(shippers);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

// Cập nhật trạng thái giao hàng (deliveryStatus: available, delivering, off)
export const updateDeliveryStatus = async (req, res) => {
  const { id } = req.params;
  const { deliveryStatus } = req.body;

  if (!['available', 'delivering', 'off'].includes(deliveryStatus)) {
    return res.status(400).json({ message: "deliveryStatus không hợp lệ" });
  }

  try {
    const shipper = await Shipper.findByIdAndUpdate(
      id,
      { deliveryStatus },
      { new: true }
    );
    if (!shipper) {
      return res.status(404).json({ message: "Không tìm thấy shipper" });
    }

    res.status(200).json({ message: "Cập nhật thành công", shipper });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

// Thêm shipper mới
export const createShipper = async (req, res) => {
  const data = req.body;

  try {
    const newShipper = new Shipper(data);
    await newShipper.save();
    res.status(201).json({ message: "Tạo shipper thành công", shipper: newShipper });
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi tạo shipper", error: err.message });
  }
};
