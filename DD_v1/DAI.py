import time, DAN, requests, random

ServerIP = '140.113.199.207' #Change to your IoTtalk IP or None for autoSearching
Reg_addr='0516320' #None # if None, Reg_addr = MAC address

DAN.profile['dm_name']='Dummy_Device'
DAN.profile['df_list']=['Dummy_Sensor', 'Dummy_Control','OneParameter','ThreeParameter']
DAN.profile['d_name']= None # None for autoNaming
DAN.device_registration_with_retry(ServerIP, Reg_addr)

list_time = []
k=0

while True:
    try:
    #Pull data from a device feature called "Dummy_Control"
        value1=DAN.pull('Dummy_Control')
        if value1 != None:
            if value1[0] != 0:
                #print (value1[0])
                tmp2=time.time()
                if k<10:
                    list_time.append(tmp2-tmp1)
                    k = k+1
                elif k==10:
                    print(*list_time, sep = ", ")
                    print("Average Time:",sum(list_time)/len(list_time))
                    k = k+1

    #Push data to a device feature called "Dummy_Sensor"
        value2=random.uniform(1, 10)
        DAN.push ('Dummy_Sensor', value2)
        tmp1=time.time();
        

    except Exception as e:
        print(e)
        DAN.device_registration_with_retry(ServerIP, Reg_addr)

    time.sleep(0.2)
