import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const opts = { timestamps: true };

export const User = model('User', new Schema({
  name: {type:String, required:true, trim:true, maxlength:100},
  email: {type:String, required:true, unique:true, lowercase:true, trim:true},
  passwordHash: {type:String, required:true},
  mobile: {type:String, default:''},
  role: {type:String, enum:['user','admin'], default:'user'},
  preferredLanguage: {type:String, enum:['en','hi','mr'], default:'en'}
}, opts));

export const TourPackage = model('TourPackage', new Schema({
  destination:{type:String,required:true,trim:true}, title:{type:String,required:true},
  category:{type:String,required:true}, description:{type:String,default:''},
  includedServices:[String], pricePerPerson:{type:Number,required:true,min:0},
  travelDate:{type:Date}, pickupLocations:[String], images:[String],
  itinerary:[{day:Number,title:String,description:String}], importantInfo:[String],
  cancellationPolicy:{type:String,default:'Cancel at least 7 days before departure for review of refund eligibility.'},
  rating:{type:Number,min:0,max:5,default:0}, active:{type:Boolean,default:true}, featured:{type:Boolean,default:false}
}, opts));

export const Booking = model('Booking', new Schema({
  bookingId:{type:String,unique:true,index:true}, user:{type:Schema.Types.ObjectId,ref:'User',required:true},
  tour:{type:Schema.Types.ObjectId,ref:'TourPackage',required:true}, customerName:{type:String,required:true},
  mobile:{type:String,required:true}, email:{type:String,required:true},
  travelers:{type:Number,required:true,min:1,max:20}, travelDate:{type:Date,required:true},
  pickupLocation:{type:String,required:true}, specialRequirements:{type:String,default:''},
  pricePerPerson:{type:Number,required:true}, totalAmount:{type:Number,required:true},
  paymentMethod:{type:String,enum:['online','cash'],required:true},
  paymentStatus:{type:String,enum:['Pending','Paid','Failed','Refunded','Cash/Pay at Service'],default:'Pending'},
  status:{type:String,enum:['Pending','Confirmed','Cancelled','Completed'],default:'Pending'},
  cancellationReason:{type:String,default:''}
}, opts));

export const Payment = model('Payment', new Schema({
  booking:{type:Schema.Types.ObjectId,ref:'Booking',required:true}, provider:{type:String,default:'razorpay'},
  providerOrderId:String, providerPaymentId:String, amount:{type:Number,required:true},
  status:{type:String,enum:['Pending','Paid','Failed','Refunded'],default:'Pending'}
}, opts));

export const Review = model('Review', new Schema({
  user:{type:Schema.Types.ObjectId,ref:'User',required:true}, tour:{type:Schema.Types.ObjectId,ref:'TourPackage',required:true},
  booking:{type:Schema.Types.ObjectId,ref:'Booking',required:true}, stars:{type:Number,required:true,min:1,max:5},
  comment:{type:String,required:true,maxlength:1500}, active:{type:Boolean,default:true}
}, opts));

export const Wishlist = model('Wishlist', new Schema({
  user:{type:Schema.Types.ObjectId,ref:'User',required:true}, tour:{type:Schema.Types.ObjectId,ref:'TourPackage',required:true}
}, opts));

export const Notification = model('Notification', new Schema({
  user:{type:Schema.Types.ObjectId,ref:'User'}, title:{type:String,required:true},
  message:{type:String,required:true}, read:{type:Boolean,default:false}, kind:{type:String,default:'general'}
}, opts));

export const Offer = model('Offer', new Schema({
  title:{type:String,required:true}, description:{type:String,required:true}, code:{type:String,default:''},
  discountPercent:{type:Number,min:0,max:100,default:0}, startsAt:Date, endsAt:Date, active:{type:Boolean,default:true}
}, opts));

export const PickupLocation = model('PickupLocation', new Schema({
  name:{type:String,required:true}, address:{type:String,required:true}, active:{type:Boolean,default:true}
}, opts));

export const Inquiry = model('Inquiry', new Schema({
  name:{type:String,required:true}, email:{type:String,required:true}, mobile:{type:String,required:true},
  subject:{type:String,required:true}, message:{type:String,required:true}, status:{type:String,default:'New'}
}, opts));